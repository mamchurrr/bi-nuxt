<template>
  <div id="app" class="center">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.$store.dispatch('tryAutoLogin')
  }
}
</script>

<style lang="sass">
@import ./assets/styles/normalize

#app
  text-align: center
  color: #333

.center
  margin: auto
  padding: 0 10px
  max-width: 1200px
  width: 100%
</style>
