<template>
  <div id="home" class="banner-component">
    <div class="top-view">
      <v-row
        no-gutters
        align="center"
        justify="center"
        class="full-height px-2"
      >
        <v-col cols="2" md="1">
          <div class="menu-icons">
            <div
              v-for="n in 3"
              :key="n"
              :class="{ close: n === 1, hide: n === 2, medium: n === 3 }"
              class="center cursor-pointer"
            ></div>
          </div>
        </v-col>
        <v-col v-if="!$vuetify.breakpoint.smAndDown" cols="3" md="1">
          <div class="navigation center">
            <div class="backward cursor-pointer">
              <v-icon large>mdi-chevron-left</v-icon>
            </div>
            <div class="forward cursor-pointer">
              <v-icon large>mdi-chevron-right</v-icon>
            </div>
          </div>
        </v-col>
        <v-col
          :cols="!$vuetify.breakpoint.smAndDown ? 7 : 10"
          md="10"
          :class="!$vuetify.breakpoint.smAndDown ? '' : 'px-3'"
        >
          <div
            class="search-bar d-flex"
            :class="!$vuetify.breakpoint.smAndDown ? 'px-3' : ''"
          >
            <div
              class="search-icon cursor-pointer center"
              :class="!$vuetify.breakpoint.smAndDown ? 'pr-3' : 'px-2'"
            >
              <v-icon :large="!$vuetify.breakpoint.smAndDown">
                mdi-magnify
              </v-icon>
            </div>
            <div class="search center pl-2 black--text">
              <vue-typed-js
                :strings="searchStrings"
                :show-cursor="false"
                :type-speed="20"
                @onComplete="typeComplete"
              >
                <div class="typing"></div>
              </vue-typed-js>
              <div
                v-if="!$vuetify.breakpoint.smAndDown"
                class="search-text blink-1"
              >
                |
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div v-if="loading">
      <Loader />
    </div>
    <div v-else class="middle-view">
      <v-row
        no-gutters
        align="center"
        justify="center"
        class="full-height px-3"
      >
        <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 2">
          <v-img
            :src="require('@/assets/images/banner/logo.jpg')"
            :lazy-src="require('@/assets/images/banner/logo.jpg')"
            alt="logo"
            :class="$vuetify.breakpoint.smAndDown ? 'mb-4' : ''"
          ></v-img>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.smAndDown ? 11 : 4">
          <div class="search-box px-3 space-between">
            <div class="search-box-text full-height align-center">
              {{ searchedText }}
            </div>
            <div class="search-box-actions align-center gap-15">
              <div class="search-action-close">
                <v-icon class="cursor-pointer">mdi-close</v-icon>
              </div>
              <v-img
                :src="require('@/assets/icons/Google_mic.png')"
                width="13"
              ></v-img>
              <v-icon class="cursor-pointer">mdi-magnify</v-icon>
            </div>
          </div>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.smAndDown ? 1 : 6">
          <div class="socials justify-end gap-20">
            <v-tooltip
              v-if="!$vuetify.breakpoint.smAndDown"
              bottom
              color="#f0f0f0"
            >
              <template #activator="{ on, attrs }">
                <v-icon class="cursor-pointer" v-bind="attrs" v-on="on">
                  mdi-phone
                </v-icon>
              </template>
              <span class="black--text">Contact</span>
            </v-tooltip>
            <v-tooltip
              v-if="!$vuetify.breakpoint.smAndDown"
              bottom
              color="#f0f0f0"
            >
              <template #activator="{ on, attrs }">
                <v-icon class="cursor-pointer" v-bind="attrs" v-on="on">
                  mdi-electron-framework
                </v-icon>
              </template>
              <span class="black--text">Download CV</span>
            </v-tooltip>
            <v-menu
              v-model="menu"
              open-on-hover
              :close-on-content-click="false"
              :nudge-width="200"
              bottom
            >
              <template #activator="{ on, attrs }">
                <v-avatar
                  color="#2aa9e0"
                  :size="$vuetify.breakpoint.smAndDown ? 30 : 40"
                  class="cursor-pointer"
                  v-bind="attrs"
                  v-on="on"
                >
                  <span
                    class="white--text"
                    :class="
                      $vuetify.breakpoint.smAndDown ? 'caption' : 'text-h6'
                    "
                  >
                    GK
                  </span>
                </v-avatar>
              </template>

              <v-card>
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar>
                      <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                      />
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Gaurav Kadam</v-list-item-title>
                      <v-list-item-subtitle>
                        Frontend Developer
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                  <v-list-item v-for="(social, index) in socials" :key="index">
                    <v-list-item-icon>
                      <v-icon>{{ social.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-subtitle
                        :class="social.link ? 'cursor-pointer' : ''"
                        @click="link(social)"
                      >
                        {{ social.info }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text small @click="menu = false"> Cancel </v-btn>
                  <v-btn small color="primary" text @click="menu = false">
                    Download CV
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </div>
        </v-col>
      </v-row>
      <NavBar />
      <Profile />
    </div>
  </div>
</template>

<script>
import Loader from './Loader.vue'
import NavBar from './NavBar.vue'
import Profile from './Profile.vue'
export default {
  name: 'BannerComponent',
  components: { Loader, NavBar, Profile },
  data() {
    return {
      loading: true,
      searchStrings: ['https://frontend-development.com'],
      searchedText: 'Gaurav Kadam',
      socials: [
        {
          icon: 'mdi-gmail',
          info: 'kadamgaurav177@gmail.com',
        },
        {
          icon: 'mdi-github',
          info: 'GK1312',
          link: true,
          href: 'https://github.com/GK1312',
        },
      ],
      myInfo: false,
      menu: false,
      hints: true,
    }
  },
  methods: {
    typeComplete() {
      this.loading = false
    },
    link(data) {
      window.open(data.href, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
.banner-component {
  background-color: #ffffff;
  height: 100vh;
  .top-view {
    height: 60px;
    background-color: #fff;
    .menu-icons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      .close,
      .medium,
      .hide {
        border-radius: 50%;
        width: 15px;
        height: 15px;
      }
      .close {
        background-color: #f78b7e;
      }
      .medium {
        background-color: #f9d38e;
      }
      .hide {
        background-color: #59d985;
      }
    }
    .navigation {
      .backward {
        border-top: 2px solid #f0f0f0;
        border-bottom: 2px solid #f0f0f0;
        border-left: 2px solid #f0f0f0;
        border-radius: 10px 0 0 10px;
      }

      .forward {
        border: 2px solid #f0f0f0;
        border-radius: 0 10px 10px 0;
      }
    }
    .search-bar {
      border: 2px solid #f0f0f0;
      border-radius: 10px;
      .search-icon {
        border-right: 2px solid #f0f0f0;
      }
      .search-text {
        font-size: 22px;
        color: #9bc4ea;
      }
    }
  }
  .middle-view {
    animation: swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      both;
    @-webkit-keyframes swing-in-top-fwd {
      0% {
        -webkit-transform: rotateX(-100deg);
        transform: rotateX(-100deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 1;
      }
    }
    @keyframes swing-in-top-fwd {
      0% {
        -webkit-transform: rotateX(-100deg);
        transform: rotateX(-100deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateX(0deg);
        transform: rotateX(0deg);
        -webkit-transform-origin: top;
        transform-origin: top;
        opacity: 1;
      }
    }

    .search-box {
      transition: box-shadow 0.3s;
      margin: 0 20px;
      border-radius: 30px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      height: 40px;
      @media only screen and (max-width: 600px) {
        margin: 0 20px 0 0 !important;
      }
      .search-box-text {
        width: 100%;
        cursor: text;
      }
      .search-action-close {
        padding: 0 10px;
        border-right: 1px solid #b5b5b5;
      }
    }
    .search-box:hover {
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    }

    .socials {
      .my-info {
        font-size: 1rem;
      }
    }
  }
}
</style>
