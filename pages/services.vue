<template>
  <div class="services-page-wrapper">
    <Greeting />
    <Title />
    <FirstService />
    <SecondServices />
    <ThirdServices />
    <FourServices />
  </div>
</template>

<script>
import Greeting from "../components/services-page-components/greeting.vue";
import Title from "../components/services-page-components/title.vue";
import FirstService from "../components/services-page-components/serviceFirst.vue";
import SecondServices from "../components/services-page-components/servicesSecond.vue";
import ThirdServices from "../components/services-page-components/servicesThird.vue";
import FourServices from "../components/services-page-components/servicesFour.vue";
export default {
  components: {
    Greeting,
    Title,
    FirstService,
    SecondServices,
    ThirdServices,
    FourServices,
  },
};
</script>

<style lang="scss">
</style>