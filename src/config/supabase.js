const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Fail fast if env variables are missing
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase URL and Key are required. Check your .env.local file."
  );
};

export const config = {
  url: supabaseUrl,
  key: supabaseKey,
};