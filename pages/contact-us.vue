<template>
  <div class="contactus-wrapper">
    <Greeting />
    <Form />
  </div>
</template>

<script>
import Greeting from "../components/contact-page-components/greetings.vue";
import Form from "../components/contact-page-components/form.vue";
export default {
  components: {
    Greeting,
    Form,
  },
};
</script>

<style lang="scss">
</style>