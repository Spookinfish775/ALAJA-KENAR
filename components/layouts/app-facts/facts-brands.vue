<template>
  <div class="facts-brands-wrapper mt-10 mb-10">
    <div class="contain">
      <vue-glide
        class="demo"
        type="slider"
        :gap="0"
        :startAt="0"
        :perView="3"
        :breakpoints="breakpoints"
        :bound="true"
      >
        <vue-glide-slide
          v-for="(slide, index) in brandsData"
          :key="index"
          class="slide"
        >
          <img class="my-glide-slide" :src="slide" alt="" />
        </vue-glide-slide>
      </vue-glide>
    </div>
  </div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";
export default {
  data() {
    return {
      breakpoints: {
        1200: { perView: 4 },
        768: { perView: 3 },
        574: { perView: 2 },
      },
      active: 0,
      slides: [0, 1, 2],
      brandsData: [
        "./images/home-page/facts-logo-one.png",
        "./images/home-page/facts-logo-two.jpg",
        "./images/home-page/facts-logo-three.jpg",
        // "./images/home-page/facts-logo-four.png",
        // "./images/home-page/facts-logo-five.jpg",
      ],
    };
  },
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
};
</script>

<style lang="scss">
.my-glide-slide {
  width: 200px !important;
}
.glide__slide {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
    transition: 0.8s;
    filter: grayscale(100%);
  }
  &:hover {
    cursor: pointer;
    img {
      animation-name: animateBrand;
      animation-duration: 0.6s;
      filter: grayscale(0%);
    }
  }
  @keyframes animateBrand {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(100%);
      visibility: hidden;
    }
    40% {
      visibility: hidden;
    }
    60% {
      transform: translateY(-100%);
      visibility: hidden;
    }
    80% {
      visibility: visible;
    }
    100% {
      transform: translateY(0);
      visibility: visible;
    }
  }
  @include max($middle) {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    img {
      width: 70%;
    }
  }
}
.facts-brands-wrapper {
  width: 100%;
  overflow-x: hidden;
  height: 150px;
  display: flex;
  justify-content: center;
  .contain {
    width: $container-lg;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @include max($middle) {
    .contain {
      width: 100%;
    }
  }
}
</style>