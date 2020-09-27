<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Skillset />
  </div>
</template>

<script>
// @ is an alias to /src
import Skillset from "@/components/Skillset.vue";

export default {
  name: "Home",
  components: {
    Skillset,
  },
};
</script>
