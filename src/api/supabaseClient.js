/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { createClient } from '@supabase/supabase-js';

/* -------------------------------------------------------------------------- */
/*                           CREATE SUPABASE CLIENT                           */
/* -------------------------------------------------------------------------- */
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLIC_KEY
);