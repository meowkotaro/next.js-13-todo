import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// NOTE: `createServerComponentSupabaseClient` has been renamed to `createServerComponentClient` in version `0.7.0`
import type { Database } from '../../database.types';
import { cookies } from 'next/headers';

type Cookies = typeof cookies

export default function useSupabaseByServerComponent({ 
    cookies 
}: {
    cookies: Cookies
}) {
  // Create a supabase client for the server component
  const supabase = createServerComponentClient<Database>({cookies});

  // Use the supabase client to access the database or auth features
  // For example, to get the current user's session
//   const session = supabase.auth.getSession();

//   // Return the server component's props
//   return session
    return supabase
}