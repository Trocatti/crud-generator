<template>
  <div>
    <PreLoader v-show="showPreLoader" />

    <div id="app" class="fixed-layout skin-blue-dark">
      <Header />
      <Sidebar v-if="showSideBar" />

      <main class="page-wrapper">
        <section class="container-fluid">
          <Breadcrumb />
          <slot />
          <br />
        </section>
      </main>

      <Footer />
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/scss/app.scss"></style>

<script src="./app.js"></script>
