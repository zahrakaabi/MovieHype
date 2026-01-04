/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useEffect, useState } from "react";
import axiosInstance from "../../lib/axios";

/* -------------------------------------------------------------------------- */
/*                            useFetch CUSTOM HOOK                            */
/* -------------------------------------------------------------------------- */
//@TO DO : Use this useFetch<T>(url: string) with Typescript
function useFetch(url) {
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

        //@TO DO : Typescript get<T>()
        const response = await axiosInstance.get(url, {
          signal: controller.signal,
        });

        setData(response.data);
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

/* -------------------------------- RENDERING ------------------------------- */
  return { data, loading, error };
};

export default useFetch;