<template>
    <div style="background: linear-gradient(0deg, #000 7.21%, rgba(0, 0, 0, 0.31) 68.74%, rgba(0, 0, 0, 0.00) 100%); height:15vh;"></div>
   <div class="container">
        <div>
           <h2>Достопримечательности</h2> 
        </div>
        <div class="main-container">
        <div class="table-container">
            <div class="table-row heading">
            </div>
            <div class="table-row">
                <div class="row-sub-container">
                    <div class="row-item text-row-item">В Молодечно сохранилось множество исторических и культурных достопримечательностей.</div>
                    <div class="row-item text-row-item"><strong>Среди них</strong></div>
                    <div class="row-item text-row-item">
                        <ul>
                            <li><strong>Музей истории города Молодечно</strong> - музей, рассказывающий об истории города от древнейших времен до наших дней.</li>
                            <li><strong>Молодечненский историко-краеведческий музей</strong> - музей, посвященный истории и культуре Молодечненского района.</li>
                            <li><strong>Парк Победы</strong>  - один из крупнейших парков в Беларуси, основанный в 1945 году.</li>
                            <li><strong>Центральная площадь</strong> - главная площадь города, на которой расположены многие исторические здания.</li>
                            <li><strong>Гарнизон Геленово</strong> - бывший военный гарнизон, расположенный на окраине города.</li>
                        </ul>
                    </div>
                </div>
                <div class="card-container">
                    <div class="cards-wrapper">
                        <div 
                        v-for="(card, index) in visibleCards" 
                        :key="index" 
                        class="card">
                        <LandmarkCard 
                        :name="card.name" 
                        :images="card.images" />
                        </div>
                    </div>
                    <button @click="prevCard">Назад</button>
                    <button @click="nextCard">Вперед</button>
                </div>

            </div>
        </div>
    </div> 
    </div>
</template>
<script>
import LandmarkCard from './LandmarkCard.vue';
export default {
    components: {
    LandmarkCard,

  
  },
  data() {
    return {
      cards: [
        { name: 'Карточка 1', images: require('../../assets/test.svg') },
        { name: 'Карточка 2', images: require('../../assets/test1.svg') },
      ],
      currentCardIndex: 0,
      cardsPerPage: 1, 
    };
  },
  computed: {
    visibleCards() {
      const startIndex = this.currentCardIndex;
      const endIndex = startIndex + this.cardsPerPage;
      return this.cards.slice(startIndex, endIndex);
    },
  },
  methods: {
    nextCard() {
      this.currentCardIndex += this.cardsPerPage;
      if (this.currentCardIndex >= this.cards.length) {
        this.currentCardIndex = 0;
      }
    },
    prevCard() {
      this.currentCardIndex -= this.cardsPerPage;
      if (this.currentCardIndex < 0) {
        this.currentCardIndex = Math.max(0, this.cards.length - this.cardsPerPage);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
*{
    
    font-size: 20px;
    color: #FFF;
}
h2{
    font-size: 50px;
    color: #ffff;
}
.container{
    background: linear-gradient(180deg, #000 7.21%, rgba(0, 0, 0, 0.31) 68.74%, rgba(0, 0, 0, 0.00) 100%),
                url(../../assets/landmark-bg.svg);
    background-size: cover;
    .main-container {
   
    width: 100%;
    height: 100%;
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
        margin-right: 10px; /* Интервал между карточками */
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