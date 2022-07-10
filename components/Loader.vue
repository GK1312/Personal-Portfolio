<template>
  <div class="loader-component center">
    <div class="google-loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoaderComponent',
}
</script>

<style lang="scss" scoped>
.loader-component {
  height: calc(100vh - 60px);
}
$font: 'Montserrat', sans-serif;
$blue: #4285f4;
$red: #db4437;
$yellow: #f4b400;
$green: #0f9d58;
$colors-list: $blue $red $yellow $green;

.google-loader {
  display: block;
  span {
    display: inline-block;
    margin-top: 10px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
  @each $current-color in $colors-list {
    $i: index($colors-list, $current-color);
    $t: $i * -0.25;
    span:nth-child(#{$i}) {
      background: $current-color;
      animation: move 1s ease-in-out (#{$t}s) infinite alternate;
    }
  }
}

@keyframes move {
  from {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(5px);
  }
}
</style>
