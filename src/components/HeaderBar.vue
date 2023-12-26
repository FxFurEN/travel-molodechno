<template>
    <nav :class="{ 'scrolled': isScrolled }">
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
  data() {
    return {
      isScrolled: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const block = document.getElementById("MainPart");
      const blockTop = block.offsetTop;
      const blockHeight = block.clientHeight;

      // Прокрутка, чтобы цвет начал меняться после половины компонента AboutCity
      this.isScrolled = window.scrollY >= blockTop + blockHeight / 2;
    }
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="scss">
    nav{
        z-index: 999;
        position: fixed;
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: center;
        background: linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 98%);
        background-color: transparent; /* Исходный цвет (прозрачный) */
        transition: background-color 0.5s ease, height 0.5s ease; /* Добавлено свойство height */
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
        &.scrolled {
            background-image: none;
            background-color: #1E1E1E;
            height: 10%;

        .nav-links {
        li {
            a {
            color: #f2f2f2; /* Цвет текста при прокрутке */
            }
        }
        }
    }
    }
</style>