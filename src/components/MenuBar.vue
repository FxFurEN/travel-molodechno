<template>
    <nav>
  <div class="wrapper">
    <ul class="nav-links">
      <li><a href="#">О городе</a></li>
      <li><a href="#">Достопримечательности</a></li>
      <li><a href="#">Развлечения</a></li>
      <li><a href="#">Контакты</a></li>
    </ul>
  </div>
</nav>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    nav{
        position: fixed;
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: center;
        background: linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 98%);
        .wrapper{
            position: relative;
            padding: 0px 30px;
            height: 70px;
            line-height: 70px;
            justify-content: space-between;
            .nav-links{
                display: inline-flex;
                li{
                    list-style: none;
                    a{
                        color: #1E1E1E;
                        text-decoration: none;
                        font-size: 18px;
                        font-weight: 500;
                        padding: 9px 15px;
                        border-radius: 5px;
                        transition: all 0.3s ease;
                    }
                    a:hover{
                        color: #f2f2f2;
                        background: #3A3B3C;
                        
                    }
                }
            }
        }
    }
</style>