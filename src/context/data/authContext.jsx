/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { createContext, useEffect, useState } from "react";

// API
import { supabase } from '../../api/supabaseClient';

/* -------------------------------------------------------------------------- */
/*                             CREATE AUTH CONTEXT                            */
/* -------------------------------------------------------------------------- */
export const AuthContext = createContext({
  user: null,
  setUser: null,
  session: null,
  setSession: null,
  profile: null,
  loading: true,
});

/* -------------------------------------------------------------------------- */
/*                                AUTH PROVIDER                               */
/* -------------------------------------------------------------------------- */
function AuthProvider({ children }) {
/* ---------------------------------- HOOKS --------------------------------- */
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState(null);

  // Fetch profile for a given user
  const fetchProfile = async (userId) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("first_name, last_name, email, role")
      .eq("id", userId)
      .single();

    if (!error) setProfile(data);
  };

  useEffect(() => {
    // Get existing session on refresh
    supabase.auth.getSession().then(({ data }) => {
      const currentUser = data.session?.user ?? null;
      setUser(currentUser);
      setSession(data.session);
      if (currentUser) fetchProfile(currentUser.id);
      setLoading(false);
    });

    // Listen to auth change
    const { data: {subscription} } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        const currentUser = session?.user ?? null;
        setUser(currentUser);
        setSession(session);
        if (currentUser) fetchProfile(currentUser.id);
        setLoading(false);
      });

    return () => subscription.unsubscribe();
  }, []);

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <AuthContext.Provider value={{ user, setUser, session, setSession, profile, loading }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;