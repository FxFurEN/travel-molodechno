<template>
  <MenuBar/>
  <MainPart class="otstyp"/>
  <AboutCity class="otstyp"/>
  
</template>

<script>
import MenuBar from './components/MenuBar.vue';
import MainPart from './components/MainPart.vue'
import AboutCity from './components/AboutCity.vue';

export default {
  name: 'App',
  components: {
    MenuBar,
    MainPart,
    AboutCity

  
  }
}
</script>

<style>
*{
    margin: 0 ;
    font-family: Lato;
}

.otstyp{
  margin-bottom: 5%;
}
</style>
