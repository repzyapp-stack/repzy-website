import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder';

// Create client (will fail on actual requests if keys are dummy, but won't crash the app on load)
export const supabase = createClient(
  supabaseUrl.startsWith('http') ? supabaseUrl : 'https://placeholder.supabase.co', 
  supabaseAnonKey
);
