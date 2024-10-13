<script setup lang="ts">
  const supabase = useSupabaseClient();
  const runtimeConfig = useRuntimeConfig();
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${runtimeConfig.public.redirectHost}/confirm`,
      },
    });
    if (error) console.log(error);
  };
</script>
<template>
  <div>
    <button @click="signInWithGoogle">Sign In with Google</button>
  </div>
</template>
