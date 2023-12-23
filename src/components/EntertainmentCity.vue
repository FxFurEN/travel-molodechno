<template>
    <div>
      <div>
        <h2>Развлечения</h2>
      </div>
      <div v-for="(section, index) in cityData" :key="index">
        <div class="main-container">
          <div class="table-container">
            <div class="table-row heading">
            </div>
            <div class="table-row">
              <div class="row-sub-container">
                <div class="row-item text-header-row-item">{{ section.title }}</div>
                <div class="row-item text-row-item">{{ section.text }}</div>
              </div>
              <div v-if="index % 2 === 0" class="row-item image-right"><img :src="section.image" alt="City Image"></div>
              <div v-else class="row-item"><img :src="section.image" alt="City Image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      cityData: [
        {
          title: 'Театры',
          text: 'В Молодечно работают два театра: Молодечненский городской драматический театр и Молодечненский государственный театр кукол. Молодечненский городской драматический театр был основан в 1944 году. В репертуаре театра представлены пьесы белорусских, русских и зарубежных авторов. Молодечненский государственный театр кукол был основан в 1972 году. В репертуаре театра представлены спектакли для детей и взрослых.',
          image: require('../assets/AboutCity.svg')
        },
        {
          title: 'Концертные залы',
          text: 'В Молодечно есть несколько концертных залов, в которых проходят концерты, спектакли и другие мероприятия. Среди них:Дворец культуры - крупнейший концертный зал в городе. В нем проходят концерты, спектакли, фестивали и другие мероприятия.Кинотеатр "Салют" - в кинотеатре проходят киносеансы, концерты и другие мероприятия.Клуб "Молодечно" - в клубе проходят концерты, спектакли, дискотеки и другие мероприятия.',
          image: require('../assets/AboutCity.svg')
        },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
* {
    
    color: #313131;
}
h2{
    opacity: 0.8;
    color: #313131;
}
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
            margin-bottom: 2%;
        }
        .text-row-item{
            color: #313131;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 120% */
            margin-bottom: 10%;
        }
        .row-sub-container {
            display: flex;
            flex-flow: column nowrap;
        }
        .table-row:last-child,
        .row-sub-container .row-item:last-child {
            border-bottom: 0;
        }
    }
    .heading {
        background-color: #ececec;
        color: #3e3e3e;
        font-weight: bold;
    }

}
}

</style>