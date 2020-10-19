<template>
  <div
    class="preloader"
    :class="hasTitleParent ? '' : 'preloader-not-title'"
    v-if="showPreLoader"
  >
    <div class="loader">
      <div class="loader__figure"></div>
      <p class="loader__label">Carregando</p>
    </div>
  </div>
</template>

<style lang="scss" src="./preloader-color.scss"></style>
<style lang="scss" src="./preloader.scss"></style>

<script src="./preloader.js"></script>
