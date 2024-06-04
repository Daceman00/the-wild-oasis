
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://mzggdtsolyhmtathetvs.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16Z2dkdHNvbHlobXRhdGhldHZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3NDczODEsImV4cCI6MjAyNzMyMzM4MX0.JP1o3roANL0cLtmRonlGCn-TLYsVY25TFjh6Ie55RRw"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;