import Vue from 'vue'
import _ from 'lodash'

Vue.filter('type', function (input) {
  if (input === 'LAY') {
    return 'KHAI'
  } else if (input === 'BACK') {
    return 'LAGAI'
  } else if (input === 'L') {
    return 'K'
  } else {
    return 'L'
  }
})
