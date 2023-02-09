<template>
  <div>
    async Data

    <div>
      {{ code }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    const code = await axios.get("https://jsonplaceholder.ir/posts");
    return { code };
  },
};
</script>

<style>
</style>