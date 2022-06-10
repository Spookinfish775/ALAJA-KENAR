<template>
  <div
    class="goals-wrapper"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="400"
  >
    <div class="contain">
      <div class="list-block">
        <div class="list">
          <ul>
            <li
              class="list-item"
              v-for="(item, index) in listData"
              :key="index"
              @click="changeDescription(item, index)"
            >
              <span :class="{ active: activeItem === index }">
                <b :class="{ active: activeLink === index }">
                  {{ item.title }}
                </b>
              </span>
            </li>
          </ul>
        </div>
        <div class="nav-line"></div>
        <div class="description">
          <transition name="slide-fade">
            <p v-if="show">
              {{ currentDescription }}
            </p>
          </transition>
        </div>
      </div>
      <div class="image-block"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      currentDescription: this.$t("about.goals.goalsDescriptions[0]"),
      activeLink: 0,
      activeItem: 0,
      listData: [
        {
          title: this.$t("about.goals.goalsList[0]"),
          description: this.$t("about.goals.goalsDescriptions[0]"),
        },
        {
          title: this.$t("about.goals.goalsList[1]"),
          description: this.$t("about.goals.goalsDescriptions[1]"),
        },
        {
          title: this.$t("about.goals.goalsList[2]"),
          description: this.$t("about.goals.goalsDescriptions[2]"),
        },
        {
          title: this.$t("about.goals.goalsList[3]"),
          description: this.$t("about.goals.goalsDescriptions[3]"),
        },
      ],
    };
  },
  methods: {
    changeDescription(item, index) {
      this.activeLink = index;
      this.activeItem = index;
      if (this.currentDescription != item.description) {
        this.show = false;
        setTimeout(() => {
          this.currentDescription = item.description;
          this.show = true;
        }, 10);
      }
    },
  },
};
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.7s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
.goals-wrapper {
  margin: 6% 0;
  width: 100%;
  height: 530px;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/images/about-page/goals-bg.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  .contain {
    width: $container-lg;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .list-block {
      width: 45%;
      height: 80%;
      display: flex;
      justify-content: space-between;
      .list {
        width: 30%;
        height: 100%;
        ul {
          padding: 0;
          height: 80%;
          list-style: none;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
          .list-item {
            color: #ffffff;
            font-size: 24px;
            font-weight: 700;
            cursor: pointer;
            position: relative;
            span {
              display: block !important;
              width: 208px !important;
              b {
                position: relative;
                &.active {
                  &::before {
                    width: 100%;
                  }
                }
                &::before {
                  position: absolute;
                  bottom: 0;
                  content: "";
                  display: block;
                  transition: 0.5s;
                  width: 0%;
                  height: 1px;
                  background-color: #ffffff;
                }
              }
              &::after {
                content: "";
                transition: 0.5s;
                display: block;
                width: 10px;
                height: 0%;
                z-index: 2;
                position: absolute;
                right: 0;
                top: -50%;
                background-color: $first-main-color;
              }
              &.active {
                &::after {
                  height: 200%;
                }
              }
            }
          }
        }
      }
      .nav-line {
        width: 4px;
        height: 82%;
        background-color: #ffffff;
      }
      .description {
        width: 55%;
        p {
          color: #ffffff;
          font-size: 22px;
          font-weight: 700;
        }
      }
    }
    .image-block {
      width: 50%;
      height: 80%;
      background: url("/images/about-page/goals-main.jpg") top no-repeat;
      background-size: contain;
    }
  }
  @include max($middle) {
    height: 870px;
    width: 100%;
    .contain {
      padding: 15px;
      width: 100%;
      flex-direction: column;
      .list-block {
        width: 80%;
        height: 45%;
        position: relative;
        .list {
          width: 35%;
          ul {
            width: 100%;
            .list-item {
              width: 100%;
              span {
                width: 100%;
              }
            }
          }
        }
        .nav-line {
          position: absolute;
          height: 80%;
          left: 34.3%;
        }
      }
      .image-block {
        width: 80%;
        height: 50%;
      }
    }
  }
  @include max($medium) {
    .contain {
      .list-block {
        .nav-line {
          left: 33.8%;
        }
      }
    }
  }
  @include max($small) {
    .contain {
      .list-block {
        flex-direction: column;
        width: 100%;
        .list {
          width: 100%;
          height: 50%;
          ul {
            height: 100%;
            justify-content: space-between;
            .list-item {
              span {
                &.active {
                  &::after {
                    height: 100%;
                    top: 0;
                  }
                }
              }
            }
          }
        }
        .nav-line {
          display: none;
        }
        .description {
          width: 100%;
        }
      }
      .image-block {
        width: 100%;
      }
    }
  }
}
</style>