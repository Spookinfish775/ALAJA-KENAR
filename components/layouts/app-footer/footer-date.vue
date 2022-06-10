<template>
  <v-footer padless color="#102D4E" dark height="64px">
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} —
      <strong> {{ $t("footer.footerDate") }} </strong>
    </v-col>
  </v-footer>
</template>

<style lang="scss">
.v-application .text-center {
  padding-bottom: 0 !important;
}
</style>