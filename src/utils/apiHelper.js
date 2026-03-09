export const handleSupabase = async (query) => {
  const { data, error } = await query;
  if (error) return Promise.reject(error.message);
  return data;
};