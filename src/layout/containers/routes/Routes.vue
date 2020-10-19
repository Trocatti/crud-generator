<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: "Routes"
};
</script>

<style lang="scss" src="@/assets/scss/core/reset.scss"></style>
