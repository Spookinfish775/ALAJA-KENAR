<template>
  <div class="my-slicky-header">
    <MobileMenu v-if="$isTablet" />
    <nav v-else>
      <div class="logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <div class="navigation-links">
        <ul>
          <li v-for="(link, index) in navLinks" :key="index">
            <nuxt-link :to="link.path">
              <span>{{ link.name }}</span>
              <div class="border-rigth"></div>
            </nuxt-link>
          </li>
          <!-- <div class="head-langs">
            <v-select
              :items="langs"
              v-model="select"
              item-value="123"
              height="50px"
              flat
              solo
              hide-details
              background-color="#ffffff"
              @change="changeLanguage"
            ></v-select>
          </div> -->
        </ul>
        <!-- <v-btn
          id="get-quote"
          large
          style="text-transform: none"
          color="#67b12e"
          dark
          depressed
        >
          {{ $t("header.getQuote") }}
        </v-btn> -->
      </div>
    </nav>
  </div>
</template>

<script>
import MobileMenu from "./mobile-menu.vue";
export default {
  components: {
    MobileMenu,
  },
  data() {
    return {
      langs: [
        {
          text: "Ru",
          value: "ru-RU",
        },
        {
          text: "Eng",
          value: "en-EN",
        },
      ],
    };
  },
  computed: {
    select() {
      if (this.$i18n.locale == "ru-RU") {
        return "Ru";
      } else if (this.$i18n.locale == "en-EN") {
        return "Eng";
      }
    },
    navLinks() {
      return [
        {
          name: this.$t("header.links.home"),
          path: "/",
        },
        {
          name: this.$t("header.links.aboutUs"),
          path: "/about-us",
        },
        {
          name: this.$t("header.links.services"),
          path: "/services",
        },
        {
          name: this.$t("header.links.contactUs"),
          path: "/contact-us",
        },
      ];
    },
  },
  methods: {
    changeLanguage(e) {
      if (e == "Ru") {
        this.$i18n.setLocale("ru-RU");
        window.location.reload();
      } else if (e == "Eng") {
        this.$i18n.setLocale("en-EN");
        window.location.reload();
      }
    },
  },
};
</script>

<style lang="scss">
.my-slicky-header {
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgb(0 0 0 / 5%);
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  nav {
    width: $container-lg;
    height: 85px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      img {
        margin: 10px 15px;
        width: 65px;
      }
    }
    .navigation-links {
      display: flex;
      align-items: center;
    }
    ul {
      display: flex;
      li {
        list-style: none;
        a {
          padding: 10px;
          font-weight: bold;
          display: flex;
          align-items: center;
          transition: 0.3s;
          .border-rigth {
            height: 0px;
            width: 2px;
            background-color: #000;
            margin: 0 0 0 10px;
            transition: 0.3s;
          }
          &:hover {
            color: $first-main-color !important;
            .border-rigth {
              height: 24px;
            }
          }
        }
      }
      .head-langs {
        width: 100px;
      }
      .v-text-field.v-text-field--enclosed .v-text-field__details,
      .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
        > .v-input__control
        > .v-input__slot {
        padding: 15px 15px 20px 15px;
      }
      .v-select__selection--comma {
        font-weight: 700;
      }
    }
  }
}
</style>