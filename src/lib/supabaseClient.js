import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uifwauhbrmrakyzcnauc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpZndhdWhicm1yYWt5emNuYXVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3NTM0ODcsImV4cCI6MjA2NzMyOTQ4N30.q7SFACbWMSFsm25772LD-w_qVFwquqX8ujvJVUBp3jg";

export const supabase = createClient(supabaseUrl, supabaseKey);
