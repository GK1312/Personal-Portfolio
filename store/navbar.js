export const state = () => ({
  activeIndex: 0,
  menues: [
    {
      name: 'Home',
      path: '#home',
      icon: 'mdi-account-outline',
    },
    {
      name: 'Education',
      path: '#education',
      icon: 'mdi-school-outline',
    },
    {
      name: 'Skills',
      path: '#skills',
      icon: 'mdi-code-tags',
    },
    {
      name: 'Experience',
      path: '#experience',
      icon: 'mdi-briefcase-outline',
    },
    {
      name: 'Projects',
      path: '#projects',
      icon: 'mdi-arrow-projectile-multiple',
    },
    {
      name: 'Contact',
      path: '#contact',
      icon: 'mdi-phone',
    },
  ],
})

export const mutations = {
  setIndex(state, data) {
    state.activeIndex = data
  },
}
