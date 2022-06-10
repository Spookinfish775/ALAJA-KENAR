<template>
  <v-app light>
    <AppHeader />
    <v-main class="my-main-content">
      <Nuxt />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from "~/components/layouts/app-header/index.vue";
import AppFooter from "~/components/layouts/app-footer/index.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
.my-main-content {
  overflow: hidden !important;
}
</style>
