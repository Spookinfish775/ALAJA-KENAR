<template>
  <div>
    <SocialMenu v-if="!$isMobile" />
    <MainHeader v-if="$isDesctop" />
    <MobileMenu v-if="$isTablet" />
    <transition name="slickyHeader">
      <SlickyHeader v-if="showSlickyHeader" />
    </transition>
  </div>
</template>

<script>
import SocialMenu from "./social-menu.vue";
import MainHeader from "./main-header.vue";
import MobileMenu from "./mobile-menu.vue";
import SlickyHeader from "./slicky-header.vue";

export default {
  components: {
    SocialMenu,
    MainHeader,
    MobileMenu,
    SlickyHeader,
  },
  data() {
    return {
      showSlickyHeader: false,
    };
  },
  computed: {
    isMobile() {},
  },
  created() {
    document.addEventListener("scroll", (e) => {
      if (document.scrollingElement.scrollTop >= 300) {
        this.showSlickyHeader = true;
      } else {
        this.showSlickyHeader = false;
      }
    });
  },
};
</script>

<style lang="scss">
.slickyHeader-enter-active,
.slickyHeader-leave-active {
  transition: 0.6s;
}
.slickyHeader-enter,
.slickyHeader-leave-to {
  transform: translateY(-100%);
  // opacity: 0;
}
</style>