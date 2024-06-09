import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://efcbhjrflueteanacnyt.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmY2JoanJmbHVldGVhbmFjbnl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5MzIzMjEsImV4cCI6MjAzMzUwODMyMX0.5yppSt6sWwndMtu2-QYOFN1KAxUv2Zwng5KM7fAd3W0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});