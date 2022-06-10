<template>
  <div class="contact-form-wrapper">
    <div class="contain">
      <div class="header">
        <div class="main">
          <div class="description">
            <div class="line"></div>
            <p>{{ $t("contact.formHeader.headerDescription") }}</p>
          </div>
          <h1 v-html="$t('contact.formHeader.headerTitle')"></h1>
        </div>
        <div class="side">
          <p>{{ $t("contact.formHeader.headerSide") }}</p>
        </div>
      </div>
      <div class="contact-content-block">
        <div class="left-side">
          <div class="image">
            <img src="/images/contact-page/contact-main.jpg" alt="" />
          </div>
        </div>
        <div class="right-side">
          <h1 class="form-header" v-html="$t('contact.formMain')"></h1>
          <div class="form-block">
            <div class="links">
              <div
                class="link"
                v-for="(item, index) in addressLinksData"
                :key="index"
              >
                <div class="icon">
                  <v-icon x-large color="#67b12e"> {{ item.icon }} </v-icon>
                </div>
                <div class="text">
                  <h1 class="title">{{ item.title }}</h1>
                  <p class="description">{{ item.description }}</p>
                  <p class="description-two" v-if="item.descriptionTwo">
                    {{ item.descriptionTwo }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addressLinksData: {
        linkOne: {
          icon: "mdi-office-building-marker",
          title: this.$t("contact.formAddressLinks.location.title"),
          description: this.$t("contact.formAddressLinks.location.description"),
        },
        linkTwo: {
          icon: "mdi-email",
          title: this.$t("contact.formAddressLinks.mail.title"),
          description: this.$t("contact.formAddressLinks.mail.description"),
        },
        linkThree: {
          icon: "mdi-phone-in-talk",
          title: this.$t("contact.formAddressLinks.phone.title"),
          description: this.$t("contact.formAddressLinks.phone.descriptionOne"),
        },
      },
    };
  },
};
</script>

<style lang="scss">
.contact-form-wrapper {
  background-color: rgb(230, 230, 230);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 6% 0;
  .contain {
    width: $container-lg;
    .header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .main {
        width: 35%;
        .description {
          display: flex;
          align-items: center;
          .line {
            width: 45px;
            height: 3.5px;
            background-color: #064d6d;
          }
          p {
            font-weight: 600 !important;
            margin: 0 0 0 4%;
          }
        }
        h1 {
          font-size: 36px !important;
          line-height: 58px !important;
          font-weight: 900 !important;
          span {
            color: $first-main-color;
          }
        }
      }
      .side {
        width: 45%;
        p {
          font-size: 18px;
          line-height: 34px;
        }
      }
    }
    .contact-content-block {
      width: 100%;
      display: flex;
      .left-side {
        width: 50%;
        padding: 1.5% 1.5% 1.5% 0;
        .image {
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
      .right-side {
        width: 50%;
        padding: 1.5% 0 1.5% 1.5%;
        .form-header {
          width: 80% !important;
          font-size: 36px !important;
          line-height: 58px !important;
          font-weight: 900 !important;
          span {
            color: $first-main-color;
          }
        }
        .form-block {
          width: 100%;
          margin-top: 5%;
          padding: 2%;
          background-color: #ffffff;
          box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
          .links {
            .link {
              display: flex;
              margin-bottom: 5%;
              .text {
                margin-left: 2%;
                .title {
                  font-size: 24px !important;
                  font-weight: 900 !important;
                  margin-bottom: 5px;
                }
                .description {
                  line-height: 26px;
                  margin: 10px 0 0 0;
                }
              }
            }
          }
        }
      }
    }
  }
  @include max($middle) {
    .contain {
      width: 100%;
      padding: 0 2%;
    }
  }
  @include max($medium-x) {
    .contain {
      .header {
        flex-direction: column;
        .main {
          width: 100%;
        }
        .side {
          width: 100%;
        }
      }
      .contact-content-block {
        flex-direction: column;
        .left-side {
          width: 70%;
        }
        .right-side {
          width: 100%;
        }
      }
    }
  }
}
</style>