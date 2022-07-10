<template>
  <div
    class="navbar-component"
    :class="$vuetify.breakpoint.smAndDown ? 'mt-4' : ''"
  >
    <v-row no-gutters align="center" justify="center" class="px-3">
      <v-col v-if="!$vuetify.breakpoint.smAndDown" cols="2"></v-col>
      <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 6">
        <div
          class="justify-start nav-bar"
          :class="$vuetify.breakpoint.smAndDown ? 'gap-5' : 'px-5 gap-20'"
        >
          <a
            v-for="(menu, index) in menues"
            :key="index"
            class="cursor-pointer px-2 py-1"
            :class="{
              center: activeIndex === index,
              'active-border': activeIndex === index,
            }"
            :href="menu.path"
            @click="navBar(index)"
          >
            <div
              :class="
                $vuetify.breakpoint.smAndDown
                  ? 'caption block-align-center'
                  : 'body-2 align-center pb-1'
              "
            >
              <div class="center">
                <v-icon
                  :small="$vuetify.breakpoint.smAndDown"
                  :class="$vuetify.breakpoint.smAndDown ? '' : 'mr-2'"
                >
                  {{ menu.icon }}
                </v-icon>
              </div>
              <div
                :class="activeIndex === index ? 'blue--text' : 'black--text'"
              >
                {{ menu.name }}
              </div>
            </div>
          </a>
        </div>
      </v-col>
      <v-col v-if="!$vuetify.breakpoint.smAndDown" cols="4"></v-col>
    </v-row>
    <v-divider />
  </div>
</template>

<script>
export default {
  name: 'NavBarComponent',
  computed: {
    menues() {
      return this.$store.state.navbar.menues
    },
    activeIndex() {
      return this.$store.state.navbar.activeIndex
    },
  },
  methods: {
    navBar(index) {
      this.$store.commit('navbar/setIndex', index)
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-component {
  .active-border {
    border-bottom: 2px solid #4285f4;
  }
}

.active-border {
  .mdi-account-outline,
  .mdi-school-outline,
  .mdi-code-tags,
  .mdi-briefcase-outline,
  .mdi-arrow-projectile-multiple,
  .mdi-phone {
    background: linear-gradient(#4285f4, #34a853, #fbbc05, #ea4335);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
