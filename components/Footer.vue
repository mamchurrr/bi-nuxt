<template>
  <footer>
    <div id="f-top">
      <div id="f-wrap">
        <div v-for="(item, index) in menu" :key="index">
          <h4>{{ item.name }}</h4>
          <ul v-for="(subItem, index) in item.items" :key="index">
            <li>
              <a href="#"> {{ subItem.name }} </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="f-top">
      <div id="f-wrap">
        <div v-for="(item, index) in menu" :key="index">
          <h4>{{ item.name }}</h4>
          <ul v-for="(subItem, index) in item.items" :key="index">
            <li>
              <a href="#"> {{ subItem.name }} </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="f-bottom">
      <p>
        Develop by Mamchur Sergey 2019
      </p>
    </div>
  </footer>
</template>

<script>
// @ is an alias to /src
import Menu from '../assets/data/menu'

export default {
  name: 'Footer',
  data() {
    return {
      menu: Menu
    }
  }
}
</script>

<style lang="sass" src="../assets/styles/Footer/footer.sass"></style>
