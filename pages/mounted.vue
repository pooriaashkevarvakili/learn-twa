<template>
  <div>
    mounted
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
  mounted() {
    axios
      .get("https://jsonplaceholder.ir/posts")
      .then((response) => {
        this.code = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
  },
};
</script>

<style>
</style>