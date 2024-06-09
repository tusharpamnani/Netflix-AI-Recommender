import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://efcbhjrflueteanacnyt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmY2JoanJmbHVldGVhbmFjbnl0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNzkzMjMyMSwiZXhwIjoyMDMzNTA4MzIxfQ.MxCP3rNCF4yKOhfsP2h7Qd-GAaRf3LiG7PV8RNMcFuI";

export const supabase = createClient(supabaseUrl, supabaseKey);