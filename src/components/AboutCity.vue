<template>
    <div>
        <div>
           <h2>О городе</h2> 
        </div>
        <div class="main-container">
        <div class="table-container">
            <div class="table-row heading">
            </div>
            <div class="table-row">
                <div class="row-sub-container">
                    <div class="row-item text-header-row-item">Краткая история</div>
                    <div class="row-item text-row-item">Город Молодечно имеет богатую историю, 
                        которая насчитывает более 600 лет. В XIV веке он был крупным 
                        торговым центром, а в XVI веке - местом проведения международных 
                        ярмарок. В XVII веке город был разрушен во время русско-польской 
                        войны. В XVIII веке он был восстановлен и стал важным культурным 
                        центром. В XIX веке в городе были построены многие каменные 
                        здания, в том числе костёл Святого Михаила, православный собор 
                        и синагога.</div>
                    <div class="row-item text-header-row-item">Расположение</div>
                    <div class="row-item text-row-item">Молодечно расположен в 73 километрах к 
                        северо-западу от Минска. Город находится на пересечении 
                        важных автомобильных и железнодорожных путей.</div>
                </div>
            <div class="row-item "><img src="../assets/AboutCity.svg"></div>
            
            </div>
        </div>
    </div> 
    </div>
     
</template>
    
<script>
export default {
    
}
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
    