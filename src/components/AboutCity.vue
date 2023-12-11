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
                    <div class="row-item">Краткая история</div>
                    <div class="row-item">Город Молодечно имеет богатую историю, 
                        которая насчитывает более 600 лет. В XIV веке он был крупным 
                        торговым центром, а в XVI веке - местом проведения международных 
                        ярмарок. В XVII веке город был разрушен во время русско-польской 
                        войны. В XVIII веке он был восстановлен и стал важным культурным 
                        центром. В XIX веке в городе были построены многие каменные 
                        здания, в том числе костёл Святого Михаила, православный собор 
                        и синагога.</div>
                    <div class="row-item">Расположение</div>
                    <div class="row-item">Молодечно расположен в 73 километрах к 
                        северо-западу от Минска. Город находится на пересечении 
                        важных автомобильных и железнодорожных путей.</div>
                </div>
            <div class="row-item"><img src="../assets/AboutCity.svg"></div>
            
            </div>
        </div>
    </div> 
    </div>
     
</template>
    
<script>
export default {
    
}
</script>
    
<style lang="scss">
* {
    
    color: #313131;
    font-family: Inter;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px; /* 116.667% */
}
h2{
    margin-left: 10%;
    margin-bottom: 5%;
}
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0;
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
            display: flex;
            font-size: 14px;
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
    