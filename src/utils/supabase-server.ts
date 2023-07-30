import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '../../database.types';
import { cookies } from 'next/headers';

type Cookies = typeof cookies

export default function useSupabaseByServerComponent({ 
    cookies 
}: {
    cookies: Cookies
}) {
  const supabase = createServerComponentClient<Database>({cookies});
    return supabase
}