import { createClient } from '@supabase/supabase-js';

/* const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY; */
const supabaseUrl = 'https://jvwhculxdnhwptmwoals.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2d2hjdWx4ZG5od3B0bXdvYWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwMzg4MDUsImV4cCI6MjA0NTYxNDgwNX0.o03lvdVK-l8f0e0ggoeOIDbJ_ZPDMYUEKH9oLkZK-7E';


console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseKey);

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
