<template>
  <div class="profile-component container">
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" md="8">
        <div class="profile-details">dasd</div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="profile-summery">
          <div class="profile-header pa-3 space-between">
            <div>
              <div class="headline">Gaurav Santosh Kadam</div>
              <div class="subtitle-1">Fronted Developer</div>
            </div>
            <div>
              <v-img
                :src="require('@/assets/images/profile/pofile-image.jpg')"
                :lazy-src="require('@/assets/images/profile/pofile-image.jpg')"
                alt="profile image"
                max-width="150"
              ></v-img>
            </div>
          </div>
          <v-divider />
          <div class="profile-body pa-3">
            <div class="caption mb-2">{{ aim }}</div>
            <div
              v-for="(detail, index) in profileDetails"
              :key="index"
              class="detail-list"
            >
              <div class="d-flex">
                <div class="detail-head font-weight-bold text-capitalize mb-2">
                  {{ detail.title }} :
                </div>
                <div class="detail-body ml-2">
                  <div v-if="detail.desc[0].title">
                    <div v-for="(desc, i) in detail.desc" :key="i">
                      <div class="mb-2">
                        <div>
                          <div v-if="!desc.field">
                            {{ desc.title }}
                          </div>
                          <div class="field">
                            <span
                              v-if="desc.field"
                              class="blue--text"
                            >
                              {{ desc.field }},
                            </span>
                            <span
                              v-if="desc.place"
                              class="place"
                              :class="desc.field ? 'ml-1' : ''"
                            >
                              {{ desc.place }},
                            </span>
                            <span
                              v-if="desc.year"
                              class="year"
                              :class="desc.year ? 'ml-1' : ''"
                            >
                              {{ desc.year }}
                            </span>
                          </div>
                          <div
                            v-if="desc.markes"
                            class="markes"
                          >
                            {{ desc.markes }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    {{ detail.desc }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ProfileComponent',
  data() {
    return {
      aim: 'To pursue a career in a company where my inter-personal skills can be utilized to achive objectives of the organization & which provides me an opportunity of continuous learning & development.',
    }
  },
  computed: {
    profileDetails() {
      return this.$store.state.profile.details
    },
  },
}
</script>

<style lang="scss" scoped>
.profile-component {
  .profile-details {
  }
  .profile-summery {
    border-radius: 10px;
    border: 2px solid #f0f0f0;
    .profile-body {
      font-size: 13px;
      .detail-head {
        min-width: 100px;
      }
    }
  }
}
</style>
