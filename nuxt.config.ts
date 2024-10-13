export default defineNuxtConfig({
  modules: ["@nuxtjs/supabase"],
  supabase: {
    key: process.env.SUPABASE_ANON_KEY,
  },
});
