<template>
  <header>
    <div class="header-top">
      <div class="header-top__wraper center">
        <ul class="header-top__items">
          <li>
            <n-link
              class="header-top__link 
                              header-top__link_padding"
              to="/about"
            >
              О проекте
            </n-link>
          </li>
        </ul>
        <ul class="header-top__items">
          <li v-if="!auth" class="sign-up">
            <n-link class="header-top__link" to="/signin">Войти</n-link>
          </li>
          <li v-if="auth" class="sign-up">
            <a href="#" class="header-top__link" @click="onLogout">Выйти</a>
          </li>
          <li v-if="!auth" class="sign-up dropdown-my">
            <a href="#" class="header-top__link">Зарегистрироваться:</a>
            <div class="my-dropdown-content">
              <ul class="dropdown-my">
                <li class="dropdown-my__item">
                  <n-link to="/signup">
                    <button class="dropdown-my__button">
                      Как компания
                    </button>
                  </n-link>
                </li>
                <li class="dropdown-my__item">
                  <n-link to="/signup">
                    <button class="dropdown-my__button">
                      Как клиент
                    </button>
                  </n-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="header-center center">
      <div id="logo">
        <n-link to="/"><img alt="BI logo" src="../assets/logo.png"/></n-link>
      </div>
      <div id="search">
        <input type="search" placeholder="Search" />
      </div>
      <div id="cart">
        <fa-icon :icon="['fas', 'heart']" />
        <fa-icon :icon="['fas', 'shopping-cart']" />
      </div>
    </div>
    <nav class="nav">
      <ul class="nav__wraper center">
        <li><n-link to="/products">Товары</n-link></li>
        <li><n-link to="/services">Услуги</n-link></li>
        <li><n-link to="/clients">Лента отзывов</n-link></li>
        <li><n-link to="/shops">Компании</n-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      auth: 'isAuthentificate'
    })
  },
  methods: {
    ...mapActions({
      onLogout: 'logout'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass" src="../assets/styles/Header/header.sass"></style>
