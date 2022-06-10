<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: 0.5,
    }"
    min-height="200"
    transition="fade-transition"
  >
    <div class="facts-wrapper">
      <Main />
      <Brands />
    </div>
  </v-lazy>
</template>

<script>
import Main from "./facts-main.vue";
import Brands from "./facts-brands.vue";
export default {
  components: {
    Main,
    Brands,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss">
</style>