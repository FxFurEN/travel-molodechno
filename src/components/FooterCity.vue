<template>
    <div>
        <div style="background: linear-gradient(180deg, #FFF 0%, #363636 100%); height:15vh;"></div>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>О городе</h4>
                        <ul>
                            <li><a href="#">info@*.by</a></li>
                            <li><a href="#">info@*.by</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Достопримечательности</h4>
                    </div>
                    <div class="footer-col">
                        <h4>Развлечения</h4>
                    </div>
                    <div class="footer-col">
                        <h4>Контакты</h4>
                        <img src="../assets/Gerb.svg">
                    </div>
                    
                </div>
            </div>
  </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
body{
	line-height: 1.5;
	font-family: 'Poppins', sans-serif;
}
*{
	margin:0;
	padding:0;
	box-sizing: border-box;
}


ul{
	list-style: none;
}
.footer{
	background-color: #363636;
    padding: 70px 0;
    .container{
        max-width: 1170px;
        margin:auto;
        .row{
            display: flex;
            flex-wrap: wrap;
            .footer-col{
                width: 25%;
                padding: 0 15px;
                h4{
                    font-size: 18px;
                    color: #ffffff;
                    text-transform: capitalize;
                    margin-bottom: 35px;
                    font-weight: 500;
                    position: relative;
                }
                
                ul li:not(:last-child){
                    margin-bottom: 10px;
                }
                ul li a{
                    font-size: 16px;
                    text-transform: capitalize;
                    color: #ffffff;
                    text-decoration: none;
                    font-weight: 300;
                    color: #bbbbbb;
                    display: block;
                    transition: all 0.3s ease;
                }
            }
        }
    }
    
}
.footer-col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
}
.footer-col .social-links a:hover{
	color: #24262b;
	background-color: #ffffff;
}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}   
</style>