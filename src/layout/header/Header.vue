<template>
  <header class="topbar">
    <nav class="navbar top-navbar navbar-expand-md navbar-dark">
      <div class="navbar-header">
        <a class="navbar-brand" :href="portal">
          <img
            src="@/assets/images/logo-grande.png"
            alt="homepage"
            class="logo-md"
          />
          <img
            src="@/assets/images/logo-pequeno.png"
            alt="homepage"
            class="logo-xs"
          />
        </a>
      </div>
      <div class="navbar-collapse">
        <ul class="navbar-nav ml-3 mr-auto">
          <li @click="miniSidebar" class="nav-item" v-if="showSidebar">
            <a v-ripple class="nav-link nav-toggler" href="javascript:void(0)">
              <v-icon name="bars" scale="1.3"></v-icon>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown mr-3">
            <a
              v-ripple
              class="nav-link dropdown-toggle profile-pic"
              @click.prevent.stop="actionProfile"
            >
              <img :src="profile.img" class="img-circle" />
              <span class="hidden-md-down">
                {{ profile.user }} &nbsp;
                <v-icon name="angle-down"></v-icon>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right animated flipInY">
              <template v-for="p in profile.itens">
                <router-link
                  class="dropdown-item"
                  :key="p.name"
                  :to="{ name: p.link }"
                >
                  <v-icon :name="p.icon" scale="0.85"></v-icon>
                  {{ p.name }}
                </router-link>
              </template>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss" src="./header-color.scss"></style>
<style scoped lang="scss" src="./header.scss"></style>
<style scoped lang="scss" src="./header-responsive.scss"></style>
<style scoped lang="scss" src="@/assets/scss/core/animation.scss"></style>

<script src="./header.js"></script>
