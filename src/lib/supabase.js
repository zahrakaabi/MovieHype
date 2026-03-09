/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { createClient } from '@supabase/supabase-js';
import { config } from '../config/supabase';


/* -------------------------------------------------------------------------- */
/*                               SUPABASE UTILS                               */
/* -------------------------------------------------------------------------- */
export const supabase = createClient(config.url, config.key);