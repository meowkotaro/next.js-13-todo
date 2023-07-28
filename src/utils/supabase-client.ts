import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../../database.types';
// NOTE: `createBrowserSupabaseClient` has been renamed to `createPagesBrowserClient` in version `0.7.0`

const supabase = createClientComponentClient<Database>();

export default supabase;