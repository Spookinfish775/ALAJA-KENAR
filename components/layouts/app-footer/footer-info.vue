<template>
  <div class="footer-info-wrapper">
    <div class="contain">
      <div class="logo-block">
        <div class="logo"><img src="/logo2.png" alt="" /></div>
        <h1 class="description">
          {{ $t("footer.footerInfo.infoTitle.title") }}
        </h1>
        <!-- <div class="button-group">
          <v-btn
            v-for="(button, index) in buttonsData"
            :key="index"
            class="mx-2 button"
            :ref="index"
            fab
            dark
            small
            :color="button.color"
          >
            <v-icon> {{ button.icon }} </v-icon>
          </v-btn>
        </div> -->
      </div>
      <div class="links-block">
        <div class="title">
          <h1 class="title-text">
            {{ $t("footer.footerInfo.infoLinks.title") }}
          </h1>
          <div class="title-line"></div>
        </div>
        <div class="links">
          <ul>
            <li v-for="(link, index) in linksData" :key="index">
              <nuxt-link :to="link.path">
                <v-icon small dark>mdi-chevron-right</v-icon>
                <span> {{ link.name }} </span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="location-block">
        <div class="title">
          <h1 class="title-text">
            {{ $t("footer.footerInfo.infoLocation.title") }}
          </h1>
          <div class="title-line"></div>
        </div>
        <div class="with-icon">
          <v-icon small color="#67B12E">mdi-map-marker-outline</v-icon>
          <p class="location">
            {{ $t("footer.footerInfo.infoLocation.location") }}
          </p>
        </div>
        <div class="with-icon">
          <v-icon small color="#67B12E">mdi-phone</v-icon>
          <p class="number">
            {{ $t("footer.footerInfo.infoLocation.number") }}
          </p>
        </div>
        <h3 class="open-title">
          {{ $t("footer.footerInfo.infoLocation.workTimeTitle") }}
        </h3>
        <p class="open-true">
          {{ $t("footer.footerInfo.infoLocation.workTimeTrue") }}
        </p>
        <p class="open-false">
          {{ $t("footer.footerInfo.infoLocation.workTimeFalse") }}
        </p>
      </div>
      <!-- <div class="subscribe-block">
        <div class="title">
          <h1 class="title-text">
            {{ $t("footer.footerInfo.infoSubscribe.subscribeTitle") }}
          </h1>
          <div class="title-line"></div>
        </div>
        <p class="description">
          {{ $t("footer.footerInfo.infoSubscribe.subscribeDescription") }}
        </p>
        <div class="send-email">
          <v-text-field
            :label="inputData"
            class="rounded-0"
            flat
            solo
            dark
            background-color="#464646"
          ></v-text-field
          ><v-btn
            elevation="0"
            dark
            height="48px"
            class="rounded-0"
            color="rgba(69,89,122,.6)"
            ><v-icon> mdi-send </v-icon></v-btn
          >
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // buttonsData: [
      //   {
      //     icon: "mdi-facebook",
      //     color: "#166dc4",
      //   },
      //   {
      //     icon: "mdi-twitter",
      //     color: "#03a9f4",
      //   },
      //   {
      //     icon: "mdi-linkedin",
      //     color: "#67b12e",
      //   },
      //   {
      //     icon: "mdi-youtube",
      //     color: "#67b12e",
      //   },
      // ],
      linksData: [
        {
          name: this.$t("footer.footerInfo.infoLinks.linkGroup[0]"),
          path: "/",
        },
        {
          name: this.$t("footer.footerInfo.infoLinks.linkGroup[1]"),
          path: "/about-us",
        },
        {
          name: this.$t("footer.footerInfo.infoLinks.linkGroup[2]"),
          path: "/services",
        },
        {
          name: this.$t("footer.footerInfo.infoLinks.linkGroup[3]"),
          path: "/contact-us",
        },
      ],
      inputData: this.$t("footer.footerInfo.infoSubscribe.subscribeInput"),
    };
  },
};
</script>

<style lang="scss">
.footer-info-wrapper {
  width: 100%;
  height: 345px;
  background-color: #ffffff;
  border-top: 5px solid #67b12e;
  display: flex;
  justify-content: center;
  .contain {
    width: $container-lg;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5%;
      .title-text {
        color: #184372;
        font-size: 24px !important;
      }
      .title-line {
        height: 1px;
        width: 40%;
        background-color: rgba(233, 234, 238, 0.15);
      }
    }
    .logo-block {
      width: 22%;
      height: 90%;
      padding: 0 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .logo {
        width: 100%;
        img {
          width: 35%;
        }
      }
      .description {
        color: #184372;
        font-size: 16px;
      }
      .button-group {
        width: 85%;
        display: flex;
        justify-content: space-between;
        .theme--dark.v-btn.v-btn--has-bg {
          margin: 0 !important;
        }
        .button {
          transition: 0.5s;
          &:hover {
            transform: translateY(-15%);
          }
        }
      }
    }
    .links-block {
      width: 22%;
      height: 65%;
      padding: 0 15px;
      .links {
        ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          padding: 0;
          li {
            width: 50%;
            height: 40px;
            display: flex;
            align-items: flex-end;
            transition: 0.4s;
            span {
              color: #184372;
              font-size: 14px;
              transition: 0.4s;
            }
            &:hover {
              transform: translateX(3%);
              span {
                color: $button-main-color;
              }
              .v-icon.v-icon {
                color: $button-main-color !important;
              }
            }
          }
        }
      }
      a.nuxt-link-exact-active {
        font-weight: bold;
        transform: translateX(7%);
        span {
          color: $button-main-color !important;
          border-bottom: 1px solid;
        }
        .v-icon.v-icon {
          color: $button-main-color !important;
        }
      }
    }
    .location-block {
      width: 22%;
      height: 65%;
      padding: 0 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .with-icon {
        display: flex;
        align-items: flex-start;
        p {
          padding-left: 5%;
        }
      }
      p {
        font-size: 14px;
        color: #184372;
        margin: 0;
      }
      h3 {
        font-size: 15px;
        color: #184372;
      }
    }
    .subscribe-block {
      width: 24%;
      height: 65%;
      padding: 0 15px;
      .description {
        margin-top: 9%;
        color: #184372;
        font-size: 15px;
      }
      .send-email {
        display: flex;
        .v-btn:not(.v-btn--round).v-size--default {
          .v-btn__content {
            transition: 0.4s;
          }
          &:hover {
            .v-btn__content {
              transform: translateX(10%);
            }
          }
        }
      }
    }
  }
  @include max($middle) {
    height: 618px;
    .contain {
      width: 100% !important;
      flex-wrap: wrap;
      .title {
        .title-line {
          width: 62%;
        }
      }
      .logo-block {
        width: 50%;
        height: 50%;
        padding: 0 20px;
        justify-content: flex-start;
        .logo {
          margin-top: 2%;
          width: 40%;
        }
        .description {
          margin-top: 4%;
        }
        .button-group {
          margin-top: 10%;
          width: 55%;
        }
      }
      .links-block {
        width: 50%;
        height: 50%;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .links {
          ul {
            li {
              width: 50%;
              height: 40px;
              align-items: flex-end;
            }
          }
        }
      }
      .location-block {
        width: 50%;
        height: 50%;
        padding: 0 20px;
        justify-content: flex-start;
        .with-icon {
          margin-top: 3%;
          p {
            padding-left: 2%;
          }
        }
        p {
          height: 40px;
          width: 60%;
        }
      }
      .subscribe-block {
        width: 50%;
        height: 50%;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .description {
          margin-top: 3%;
        }
        .send-email {
          margin-top: 3%;
        }
      }
    }
  }
  @include max($medium) {
    .col-12 {
      padding: 0 !important;
    }
    height: 780px;
    .contain {
      width: 100% !important;
      flex-wrap: wrap;
      .title {
        .title-line {
          width: 30%;
        }
        @include max($x-small) {
          .title-line {
            width: 10%;
          }
        }
      }
      .logo-block {
        width: 100%;
        height: 30%;
        padding: 0 10px;
        align-items: center;
        margin-top: 0.5%;
        .logo {
          margin-top: 0;
          width: 32%;
          display: flex;

          justify-content: center;
        }
        .description {
          margin-top: 2%;
        }
        .button-group {
          margin-top: 4%;
          width: 75%;
        }
      }
      .links-block {
        width: 50%;
        height: 40%;
        padding: 0 5px 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .links {
          ul {
            flex-direction: column;
            flex-wrap: nowrap;
            li {
              width: 80%;
              height: 35px;
            }
          }
        }
      }
      .location-block {
        width: 50%;
        height: 40%;
        padding: 0 10px 0 5px;
        .with-icon {
          margin: 3% 0;
          p {
            padding-left: 2%;
          }
        }
        p {
          margin-top: 0;
          height: auto !important;
          width: 100%;
        }
        h3 {
          margin: 3% 0;
        }
      }
      .subscribe-block {
        width: 100%;
        height: 30%;
        padding: 0 10px;
        margin-top: 1%;
        .title {
          .title-line {
            width: 66%;
          }
        }
        .description {
          margin: 2% 0 0 0;
        }
        .send-email {
          margin-top: 2%;
        }
      }
    }
  }
  @include max($small) {
    .contain {
      .logo-block {
        .logo {
          img {
            width: 50%;
          }
        }
      }
    }
  }
}
</style>