<template>
    <div>
        <div style="background: linear-gradient(180deg, #FFF 0%, #363636 100%); height:15vh;"></div>
        <div class="main-container">
            <div class="table-container">
                <div class="table-row heading">
                </div>
                <div class="table-row">
                    <div class="row-item text-header-row-item"><a @click="scrollToSection('about')">О городе</a></div>
                    <div class="row-item text-header-row-item"><a @click="scrollToSection('landmarkss')">Достопримечательности</a></div>
                    <div class="row-item text-header-row-item"><a @click="scrollToSection('entertainment')">Развлечения</a></div>
                    <div class="row-item text-header-row-item"><a @click="scrollToSection('contacts')">Контакты</a></div>
                    <div class="row-item"><img src="../assets/Gerb.svg"></div>
                </div>
                <p class="row-item text-row-item">info@*.by</p>
                <p class="row-item text-row-item">Информационно-исторический портал о Молодечно для жителей и гостей .</p>
                <hr>
                <p>2023 © Все права защищены</p>
            </div>
           
    </div> 

</div>
</template>
<script>
export default {
    methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}

</script>
<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #363636;
  p{
    color: #FFF;
    font-variant-numeric: lining-nums tabular-nums;
    font-family: Open Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .table-container{
    display: flex;
    flex-flow: column nowrap;
    width: 80%;
    margin: 0 auto;
    .table-row {
        display: flex;
        flex-flow: row nowrap;
        width: auto;
        .row-item{
            color: white;
            opacity: 0.8;
            display: flex;
            font-size: 14px;
            padding: 10vh 0 0 2vh;
            
        }
        .text-header-row-item, a{
            text-decoration: none;
            transition: 0.5s;
            color: white;
            font-size: 31px;
            font-style: normal;
            font-weight: 900;
            line-height: 32px; /* 103.226% */
            margin-bottom: 2%;
        }
        a:hover{
            color: cornsilk;
        }
        .text-row-item{
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