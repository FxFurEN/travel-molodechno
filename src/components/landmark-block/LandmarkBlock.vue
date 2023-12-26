<template>
  <div style="background: linear-gradient(0deg, #000 7.21%, rgba(0, 0, 0, 0.31) 68.74%, rgba(0, 0, 0, 0.00) 100%); height:15vh;"></div>
  <div class="container">
    <div>
      <h2>Достопримечательности</h2>
    </div>
    <div class="main-container">
      <div class="table-container">
        <div class="table-row heading"></div>
        <div class="table-row">
          <div class="row-sub-container">
            <div class="row-item text-row-item">В Молодечно сохранилось множество исторических и культурных достопримечательностей.</div>
            <div class="row-item text-row-item"><strong>Среди них</strong></div>
            <div class="row-item text-row-item">
              <ul>
                <li><strong>Музей истории города Молодечно</strong> - музей, рассказывающий об истории города от древнейших времен до наших дней.</li>
                <li><strong>Молодечненский историко-краеведческий музей</strong> - музей, посвященный истории и культуре Молодечненского района.</li>
                <li><strong>Парк Победы</strong> - один из крупнейших парков в Беларуси, основанный в 1945 году.</li>
                <li><strong>Центральная площадь</strong> - главная площадь города, на которой расположены многие исторические здания.</li>
                <li><strong>Гарнизон Геленово</strong> - бывший военный гарнизон, расположенный на окраине города.</li>
              </ul>
            </div>
          </div>
          <div class="card-container">
            <swiper
                :modules="modules"
                :slides-per-view="3"
                :space-between="50"
                navigation
                :pagination="{ clickable: true }"
                :scrollbar="{ draggable: true }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
              >
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                ...
              </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
//import LandmarkCard from './LandmarkCard.vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  // Import Swiper styles
  import 'swiper/css';

export default{
    components: {
      //LandmarkCard
      Swiper,
      SwiperSlide
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  data() {
    return {
      cards: [
        { name: 'Карточка 1', images: require('../../assets/test.svg') },
        { name: 'Карточка 2', images: require('../../assets/test1.svg') },
        { name: 'Карточка 3', images: require('../../assets/test.svg') },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
*{
font-family: Lato;
  font-size: 20px;
  color: #FFF;
}
h2{
  font-size: 50px;
  color: #ffff;
}
.container{
  background: linear-gradient(180deg, #000 7.21%, rgba(0, 0, 0, 0.31) 68.74%, rgba(0, 0, 0, 0.00) 100%),url(../../assets/landmark-bg.svg);
  background-size: cover;
  .main-container {
  width: 100%;
  height: 100%;
  margin-bottom: 5%;
  display: flex;

.table-container {
      display: flex;
      flex-flow: column nowrap;
      
      width: 80%;
      margin: 0 auto;
  .table-row {
      display: flex;
      flex-flow: row nowrap;
      width: 100%;
      
      .row-item {
          opacity: 0.8;
          display: flex;
          font-size: 14px;
          
      }
      .text-header-row-item{
          color: #313131;
          font-size: 31px;
          font-style: normal;
          font-weight: 900;
          line-height: 32px; /* 103.226% */
      }
      .text-row-item{
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px; /* 120% */
      }
      .row-sub-container {
        width: 40%;
          display: flex;
          flex-flow: column nowrap;
      }
      .table-row:last-child,
      .row-sub-container .row-item:last-child {
          border-bottom: 0;
      }
      .card-container {
      position: relative;
      overflow: hidden;
      }

      .cards-wrapper {
      display: flex;
      transition: transform 0.5s ease; /* Анимация смещения */
      }

      .card {
      margin-right: -210px; /* Интервал между карточками */
      }
  }
  .heading {
      background-color: #ececec;
      color: #3e3e3e;
      font-weight: bold;
  }
  ul{
      
      li{

          justify-content: space-between;
      }
  }
}
}
}

</style>