<template>
  <section class="login-register">
    <router-link :to="{ name: 'login' }">
      <img src="@/assets/images/dynamix_capa.png" alt="homepage" />
    </router-link>
    <b-card class="login-box">
      <b-form @submit.prevent.stop>
        <h3 class="mb-4 auth">Autenticação</h3>
        <div class="divider"></div>
        <b-form-group>
          <b-form-input type="text" placeholder="Usuário..."></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input type="password" placeholder="Senha..."></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-button class="password-loss" variant="link"
            >Esqueci minha senha</b-button
          >
        </b-form-group>
        <b-form-group>
          <router-link
            :to="{ name: 'home' }"
            class="btn btn-block btn-primary btn-rounded"
            >Entrar</router-link
          >
        </b-form-group>
      </b-form>
    </b-card>
  </section>
</template>

<style scoped lang="scss" src="./login.scss"></style>
<style scoped lang="scss" src="./login-color.scss"></style>

<script src="./login.js"></script>
