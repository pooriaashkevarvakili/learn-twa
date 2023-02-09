<template>
  <div class="flex space-x-4 items-center justify-center w-full h-screen">
    <nuxt-link to="/fetch" class="bg-green-400 text-white px-6 py-8"
      >fetch</nuxt-link
    >
    <nuxt-link to="/asyncData" class="bg-green-400 text-white px-6 py-8"
      >asyncData</nuxt-link
    >
    <nuxt-link to="/nuxtserverinit" class="bg-green-400 text-white px-6 py-8"
      >nuxtserverinit</nuxt-link
    >
    <nuxt-link to="/mounted" class="bg-green-400 text-white px-6 py-8"
      >mounted</nuxt-link
    >
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
