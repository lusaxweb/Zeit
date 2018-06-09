<template lang="html">
  	<div class="contenedor-lv-1">
      <div class="con-follow">
        <h3>Follow</h3>
      </div>
        <nav class="con-link">
          <ul class="con-nav">
        		<li>
              <a href="https://con-github.com/lusaxweb/Zeit" target="_blank" class="con-github">Github</a>
            </li>
        		<li>
              <a href="https://twitter.com/LusaxWeb" target="_blank" class="con-twitter">Twitter</a>
            </li>
        		<li>
              <a href="https://www.behance.net/ManuelRovira" target="_blank" class="con-behance">Behance</a>
            </li>
        		<li>
              <a href="https://dribbble.com/ManuelRovira" target="_blank" class="con-dribbble">Dribbble</a>
            </li>
          </ul>
    		</nav>


  		<div class="con-button" >
    		<div class="ogin"> <button>Login</button> </div>
    		<div class="sing-in" > <button>Sing in</button> </div>
      </div>
  	</div>
</template>

<script>
export default {
  name: 'follow'
}
</script>

<style lang="css">


  .contenedor-lv-1{
	  display: flex;
	  height:100%;
	  width:400px ;
    background-color: #b800e6;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .con-link{
	  position: absolute;
	  top: 20px;
	  left: 0px;
	  text-align: left;
	  height:200px;
    width:120px;
  }

  .con-follow {
    display:flex;
    left:20px;
    top: 30px;
    position: absolute;
  }

  .con-follow h3 {
    color: white ;
  }

  .con-link a {
	  color:white;
  }

  .con-nav{
    position: relative;
    top: 60px;
  }

  .con-nav li{
    width: 25%;
    padding: 15px 0px 15px 0px;
  }

  .con-nav li a{
    position: relative;
    left: 50px;
  }

  .con-nav li:hover{
    background: linear-gradient(to right, rgba(234,50,216,1), rgba(255,0,0,0));
    width: 110%;
    transition: width 1s;
  }

  .con-github::before{
    position: absolute;
    content: '';
    background: url('https://png.icons8.com/ios-glyphs/50/ffffff/github.png');
    background-size: cover;
    bottom: -3px;
    right: 120%;
    height: 25px;
    width: 25px;
}

  .con-twitter::before{
    position: absolute;
    content: '';
    background: url('https://png.icons8.com/metro/50/ffffff/twitter.png');
    background-size: cover;
    bottom: -3px;
    right: 120%;
    height: 25px;
    width: 25px;
}

.con-behance::before{
  position: absolute;
  content: '';
  background: url('https://png.icons8.com/windows/50/ffffff/behance.png');
  background-size: cover;
  bottom: -3px;
  right: 120%;
  height: 25px;
  width: 25px;
}

.con-dribbble::before{
  position: absolute;
  content: '';
  background: url('https://png.icons8.com/windows/50/ffffff/dribbble.png');
  background-size: cover;
  bottom: -3px;
  right: 120%;
  height: 25px;
  width: 25px;
}



  .con-button{
  	position: relative;
  	flex-direction: column;
    height:20%;
    width:30%;
  	top: 40%;
  	left: 78%;
  	flex-direction: column;
  }

   .ogin {
    height:60px;
  }

  .ogin button {
  	font-family: verdana;
    font-size: 15px;
  	background: white;
  	width:80px;
  	height: 60px;
  	border-radius: 10px 0px 0px 10px;
  	color: blue;
  }

  .sing-in button{
  	position: relative;
    top:0px;
    font-family: verdana;
    font-size: 15px;
    background: white;
    width:80px;
    height: 60px;
    border-radius: 10px 0px 0px 10px;
    color: blue;
  }



</style>

