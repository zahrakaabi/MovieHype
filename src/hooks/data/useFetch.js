/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useEffect, useState } from "react";
import { handleSupabase } from "../../utils/apiHelper";

/* -------------------------------------------------------------------------- */
/*                            useFetch CUSTOM HOOK                            */
/* -------------------------------------------------------------------------- */
//@TO DO : Use this useFetch<T>(url: string) with Typescript
function useFetch(query) {
/* ---------------------------------- HOOKS --------------------------------- */
  const [data, setData] = useState(null); //<T | null>
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); //<string | null>

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        // With axios
        //@TO DO : Typescript get<T>()
        // const response = await axiosInstance.get(url, {
        //   signal: controller.signal,
        // });
        // setData(response.data);

        // With Supabase
        const result = await handleSupabase(query);
        setData(result);
      } catch (err) {
        setError("Failed to load data", err);
      } finally {
        setLoading(false);
      };
    };

    fetchData();

    return () => controller.abort();
  }, [query]);

/* -------------------------------- RENDERING ------------------------------- */
  return { data, setData, loading, error };
};

export default useFetch;