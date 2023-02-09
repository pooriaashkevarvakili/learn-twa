<template>
  <div>
    fetch
    <div>{{ code }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      code: null,
    };
  },
  async fetch() {
    const code = await axios
      .get("https://jsonplaceholder.ir/posts")
      .then((response) => {
        this.code = response.data;
      });
    return { code };
  },
};
</script>

<style>
</style>