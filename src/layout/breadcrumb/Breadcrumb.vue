<template>
  <b-row class="page-titles">
    <b-col md="5" class="align-self-center">
      <h4 class="text-themecolor">{{ self | upperCase }}</h4>
    </b-col>
    <b-col md="7" class="align-self-center text-right">
      <div class="d-flex justify-content-end align-items-center">
        <ol class="breadcrumb">
          <li
            v-for="(breadcrumb, idx) in crumbs"
            class="breadcrumb-item"
            :key="idx"
            @click="routeTo(idx)"
          >
            <router-link :to="{ name: breadcrumb.path }">{{
              breadcrumb.name
            }}</router-link>
          </li>
        </ol>
      </div>
    </b-col>
  </b-row>
</template>

<style scoped lang="scss" src="./breadcrumb.scss"></style>
<style scoped lang="scss" src="./breadcrumb-color.scss"></style>

<script src="./breadcrumb.js"></script>
