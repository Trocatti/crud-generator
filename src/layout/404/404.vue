<template>
  <section id="wrapper" class="error-page">
    <div class="error-box">
      <div class="error-body">
        <h1 class="m-5">Ops...</h1>
        <h3 class="text-uppercase">Página não encontrada !</h3>
        <router-link
          :to="{ name: 'home' }"
          class="btn btn-info btn-rounded m-b-40"
          >Voltar ao inicio</router-link
        >
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss" src="./404.scss"></style>
<style scoped lang="scss" src="./404-colors.scss"></style>

<script src="./404.js"></script>
