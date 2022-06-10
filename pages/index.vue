<template>
  <div>
    <Hero />
    <Description />
    <Services />
    <Facts />
  </div>
</template>

<script>
import Services from "../components/layouts/app-services/index.vue";
import Facts from "../components/layouts/app-facts/index.vue";
import Hero from "../components/main-page/hero.vue";
import Description from "../components/main-page/description.vue";
export default {
  components: {
    Hero,
    Description,
    Services,
    Facts,
  },
};
</script>


