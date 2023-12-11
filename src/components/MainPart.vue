<template>
<div class="main-part">
  <div class="welcome-message">Открой Молодечно с новой стороны: где каждый угол — история приключений.</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.main-part {
    height: 100vh;
    width: 100%;
    display: flex;
    background-image: url(../assets/main-part.svg);
    background-size: cover;
    .welcome-message{
        padding: 50vh 30vh 0 30vh;
        color: white; 
        font-size: 52px; 
        font-family: Montserrat; 
        font-weight: 900; 
        line-height: 64px;
    }
    
}
</style>
