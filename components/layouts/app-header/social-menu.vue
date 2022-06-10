<template>
  <div class="my-social-menu">
    <div class="contain">
      <div class="time">
        <v-icon small dark> mdi-clock-time-four </v-icon>
        <span>Mon - Fri: 9:00 - 18:00, GMT+5</span>
      </div>
      <!-- <div class="head-social">
        <v-btn v-for="(social, index) in socials" :key="index" icon dark>
          <v-icon small>
            {{ social.icon }}
          </v-icon>
        </v-btn>
      </div> -->

      <!-- <div class="head-langs">
        <v-select
          :items="langs"
          v-model="select"
          item-value="123"
          height="50px"
          flat
          solo
          dark
          hide-details
          background-color="#102d4e"
          @change="changeLanguage"
        ></v-select>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
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
    socials() {
      return [
        {
          icon: "mdi-facebook",
          link: "",
        },
        {
          icon: "mdi-linkedin",
          link: "",
        },
        {
          icon: "mdi-instagram",
          link: "",
        },
        {
          icon: "mdi-youtube",
          link: "",
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
.my-social-menu {
  background-color: #102d4e;
  padding: 10px 0;
  color: $main-text-color;
  font-size: 14px;
  @include max($medium) {
    display: none;
  }
  .contain {
    width: $container-lg;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    justify-content: flex-end;
    .time {
      i {
        margin: 0 5px 0 0;
      }
      display: flex;
      align-items: center;
      border-right: 1px solid rgba($color: $main-text-color, $alpha: 0.2);
      margin: 0 30px 0 0;
      padding: 0 30px 0 0;
    }
    .head-social {
      margin-top: 0.5%;
    }
    .head-langs {
      width: 100px;
    }
    @include max($middle) {
      display: flex;
      justify-content: flex-start;
    }
  }
}
</style>