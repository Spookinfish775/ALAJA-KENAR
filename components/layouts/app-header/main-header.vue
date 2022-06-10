<template>
  <div class="main-header">
    <div class="contacts">
      <div class="contain">
        <div class="logo">
          <img src="/logo2.png" alt="logo" />
        </div>
        <div class="contact-links">
          <div
            class="block"
            v-for="(contact, index) in contacts"
            :key="index"
            @mouseover.stop="animateIcon(contact.icon)"
          >
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
        </div>
      </div>
    </div>
    <nav>
      <ul>
        <li v-for="(link, index) in navLinks" :key="index">
          <nuxt-link :to="link.path">
            <span>{{ link.name }}</span>
            <div class="border-rigth"></div>
          </nuxt-link>
        </li>
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
    </nav>
  </div>
</template>

<script>
import links from "./data/links";
import contacts from "./data/contacts";
export default {
  data() {
    return {
      langs: ["Ru", "Eng"],
    };
  },
  computed: {
    navLinks() {
      return links(this);
    },
    contacts() {
      return contacts(this);
    },
  },
  methods: {
    animateIcon(target) {
      const xMax = 16;
      this.$anime({
        easing: "easeInOutSine",
        targets: `.${target}`,
        duration: 550,
        translateY: [
          {
            value: xMax * -1,
          },
          {
            value: xMax,
          },
          {
            value: xMax / -2,
          },
          {
            value: xMax / 2,
          },
          {
            value: 0,
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss">
.main-header {
  position: relative;
  .contacts {
    // background-color: #1c89ba;
    background-color: #ffffff;
    padding: 10px 0 45px 0;
    .contain {
      width: $container-lg;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        margin: 15px;
        img {
          width: 95px;
        }
      }
      .contact-links {
        display: flex;
        margin: 15px;
        .block {
          margin-left: 50px;
          cursor: pointer;
          a {
            display: flex;
            align-items: flex-start;
          }
          :nth-child(1) {
            margin-left: 0;
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
            color: $main-text-color;
            color: #0a2b49;
          }
          .sub-title {
            color: #3c6081;
            font-size: 15px;
          }
        }
      }
    }
  }
  nav {
    width: $container-lg;
    height: 70px;
    position: absolute;
    left: 50%;
    bottom: -35px;
    z-index: 3;
    transform: translateX(-50%);
    background-color: #ffffff;
    padding: 0 15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    ul {
      display: flex;
      li {
        list-style: none;
        a {
          padding: 25px;
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
    }
  }
}
</style>