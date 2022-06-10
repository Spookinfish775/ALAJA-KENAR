<template>
  <div class="mobile-menu">
    <div class="logo">
      <img src="/logo.png" alt="logo" />
    </div>
    <div @click="openMenu" :class="{ open: openState }" id="nav-icon4">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <v-navigation-drawer v-model="openState" fixed>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <div class="drawer-menu-logo">
              <img src="/logo.png" alt="logo" />
            </div>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="indigo--text text--accent-4"
        >
          <nuxt-link
            v-for="(link, index) in navLinks"
            :key="index"
            :to="link.path"
          >
            <v-list-item>
              <v-list-item-title>{{ link.name }}</v-list-item-title>
            </v-list-item>
          </nuxt-link>
          <!-- <span class="ru" @click="changeToRu">Ru</span>
          <span class="eng" @click="changeToEng">Eng</span> -->
        </v-list-item-group>
      </v-list>

      <v-list class="mt-8" nav dense>
        <v-list-item-group
          v-model="group"
          active-class="indigo--text text--accent-4"
        >
          <v-list-item v-for="(contact, index) in contacts" :key="index">
            <div class="contact-block">
              <a
                :id="contact.value"
                v-if="contact.type"
                :href="contact.type + contact.value"
              >
                <v-icon color="#102d4e" large>
                  {{ contact.icon }}
                </v-icon>
                <div>
                  <p class="title">{{ contact.title }}</p>
                  <p class="sub-title">{{ contact.subtitle }}</p>
                </div>
              </a>
              <a v-else>
                <v-icon color="#102d4e" large>
                  {{ contact.icon }}
                </v-icon>
                <div>
                  <p class="title">{{ contact.title }}</p>
                  <p class="sub-title">{{ contact.subtitle }}</p>
                </div>
              </a>
            </div>
          </v-list-item>
          <v-list-item>
            <!-- <v-btn
              id="get-quote"
              large
              style="text-transform: none"
              class="mx-auto mt-8"
              color="#67b12e"
              dark
              depressed
            >
              {{ $t("header.getQuote") }}
            </v-btn> -->
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import links from "./data/links";
import contacts from "./data/contacts";
export default {
  data() {
    return {
      openState: false,
      group: null,
    };
  },
  methods: {
    changeToEng() {
      this.$i18n.setLocale("en-EN");
      window.location.reload();
    },
    changeToRu() {
      this.$i18n.setLocale("ru-RU");
      window.location.reload();
    },
    openMenu() {
      this.openState = !this.openState;
    },
  },
  computed: {
    navLinks() {
      return links(this);
    },
    contacts() {
      return contacts(this);
    },
  },
};
</script>

<style lang="scss">
.mobile-menu {
  width: 100%;
  padding: 15px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 5%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .ru {
    margin: 20px 0 0 8px;
    font-size: 13px;
    border-bottom: 2px solid transparent;
    transition: 0.4s;
    &:hover {
      border-bottom: 2px solid #304ffe;
      cursor: pointer;
    }
  }
  .eng {
    margin: 20px 0 0 0;
    font-size: 13px;
    margin-left: 8%;
    border-bottom: 2px solid transparent;
    transition: 0.4s;
    &:hover {
      border-bottom: 2px solid #304ffe;
      cursor: pointer;
    }
  }

  .logo {
    img {
      width: 75px;
    }
  }

  .drawer-menu-logo {
    margin: 0 auto;
    padding: 30px 0 30px 0;
    img {
      width: 110px;
    }
  }

  .contact-block {
    a {
      display: flex;
      align-items: center;
    }
    i {
      margin: 0 10px 0 0;
    }
    p {
      margin: 0;
    }
    .title {
      font-size: 15px !important;
      font-weight: 700;
    }
    .sub-title {
      font-size: 15px;
    }
  }

  #nav-icon4 {
    width: 30px;
    height: 32px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: #1f2233;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
    }
  }

  #nav-icon4 span:nth-child(1) {
    top: 3px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #nav-icon4 span:nth-child(2) {
    top: 10px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #nav-icon4 span:nth-child(3) {
    top: 17px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #nav-icon4.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 5px;
    left: 3px;
  }

  #nav-icon4.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  #nav-icon4.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 25px;
    left: 3px;
  }
}
</style>