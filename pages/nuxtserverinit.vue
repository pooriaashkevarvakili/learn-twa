<template>
  <div>
    nuxt server init
    {{ titles }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["titles"]),
  },
};
</script>

<style>
</style>