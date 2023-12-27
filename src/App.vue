<template>
  <div>
    <HeaderBar/>
    <MainPart class="otstyp"/>
    <AboutCity class="otstyp"/>
    <LandmarkBlock class="otstyp"/>
    <EntertainmentCity class="otstyp"/>
    <InteractiveMap class="otstyp"/>
    <FooterCity/>
  </div>
</template>
<script>

import HeaderBar from './components/HeaderBar.vue';
import MainPart from './components/MainPart.vue'
import AboutCity from './components/AboutCity.vue';
import LandmarkBlock from './components/landmark-block/LandmarkBlock.vue'
import EntertainmentCity from  './components/EntertainmentCity.vue';
import InteractiveMap from './components/InteractiveMap.vue';
import FooterCity from './components/FooterCity.vue';


export default {
  
  name: 'App',
  components: {
    HeaderBar,
    MainPart,
    LandmarkBlock,
    AboutCity,
    EntertainmentCity,
    InteractiveMap,
    FooterCity

  
  }
}
</script>

<style>

* {
    font-family: Montserrat;
    margin: 0;
    color: #313131;
    font-size: 18px;
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
  margin-bottom: 10%;
}

center-con {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
}



.round {
    position: absolute;
    border: 2px solid #fff;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    
}

#cta{
    width:100%; cursor: pointer; position: absolute;
}

#cta .arrow{left: 30%;}
.arrow {position: absolute; bottom: 0;  margin-left:0px; width: 12px; height: 12px; background-size: contain; top:15px;}
.segunda{margin-left: 8px;}
.next {
	background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==);
}

@keyframes bounceAlpha {
  0% {opacity: 1; transform: translateX(0px) scale(1);}
  25%{opacity: 0; transform:translateX(10px) scale(0.9);}
  26%{opacity: 0; transform:translateX(-10px) scale(0.9);}
  55% {opacity: 1; transform: translateX(0px) scale(1);}
}

.bounceAlpha {
    animation-name: bounceAlpha;
    animation-duration:1.4s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
}

.arrow.primera.bounceAlpha {
    animation-name: bounceAlpha;
    animation-duration:1.4s;
    animation-delay:0.2s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
}

.round:hover .arrow{
    animation-name: bounceAlpha;
    animation-duration:1.4s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
}
.round:hover .arrow.primera{
    animation-name: bounceAlpha;
    animation-duration:1.4s;
    animation-delay:0.2s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
}

</style>
