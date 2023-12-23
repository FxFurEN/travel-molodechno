<template>
  <MenuBar/>
  <MainPart class="otstyp"/>
  <AboutCity class="otstyp"/>
  <LandmarkBlock class="otstyp"/>
  <EntertainmentCity />
  <InteractiveMap/>
</template>

<script>
import MenuBar from './components/MenuBar.vue';
import MainPart from './components/MainPart.vue'
import AboutCity from './components/AboutCity.vue';
import LandmarkBlock from './components/landmark-block/LandmarkBlock.vue'
import EntertainmentCity from  './components/EntertainmentCity.vue';
import InteractiveMap from './components/InteractiveMap.vue';

export default {
  name: 'App',
  components: {
    MenuBar,
    MainPart,
    LandmarkBlock,
    AboutCity,
    EntertainmentCity,
    InteractiveMap

  
  }
}
</script>

<style>
* {
    font-family: Montserrat;
    margin: 0;
    color: #313131;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
}
h2{
    font-size: 50px;
    margin-left: 10%;
    margin-bottom: 5%;
}

.otstyp{
  margin-bottom: 5%;
}

button {
  background-color: #1E1E1E;
  border-radius: .5rem;
  color: #111827;
  padding: .75rem 1rem;
  text-align: center;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}

button:hover {
  background-color: #f9fafb;
  color: #111827;
}

</style>
