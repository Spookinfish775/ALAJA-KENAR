<template>
  <div class="about-wrapper">
    <Greeting />
    <Content />
    <Choose />
    <Goals />
  </div>
</template>

<script>
import Greeting from "../components/about-page-components/greetings.vue";
import Content from "../components/about-page-components/about-content.vue";
import Choose from "../components/about-page-components/choose.vue";
import Goals from "../components/about-page-components/goals.vue";
export default {
  components: {
    Greeting,
    Content,
    Goals,
    Choose,
  },
};
</script>

<style lang="scss">
</style>