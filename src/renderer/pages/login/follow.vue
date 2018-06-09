<template lang="html">
  	<div class="contenedor-lv-1">
      
  		<div class="con-link">
        <div class="con-follow"><h3>Follow</h3></div>
  		  <div class="github"><a href="https://github.com/lusaxweb/Zeit" target="_blank">Github</a></div> 
  		  <div class="con-twitter"><a href="https://twitter.com/LusaxWeb" target="_blank">Twitter</a></div> 
  		  <div class="con-behance"><a href="https://www.behance.net/ManuelRovira" target="_blank">Behance</a></div> 
  		  <div class="con-dribbble"><a href="https://dribbble.com/ManuelRovira" target="_blank">Dribbble</a></div> 
  		</div>
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
	  width:300px ;
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
    left:30px;
    position: absolute;
  }

  .con-follow h3 {
    color: white ;
  }

  .con-link a {
	  color:white;
  }

  .github{
    top: 60px;
    left:0px;
    width:100px;
    height:30px;
  }

  .github a{
    position: relative;
    left:50px;
    top:7.5px;
  }
  .con-twitter{
	  position: relative;
	  top: 80px;
    left:50px;
  }

  .con-behance{
	  position: relative;
	  top: 100px;
    left:50px;
  }

  .con-dribbble{
	  position: relative;
	  top: 120px;
    left:50px;
  }

  .con-button{
  	position: relative;
  	flex-direction: column;
    height:20%;
    width:30%;
  	top: 40%;
  	left: 72%;
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

  .github {
    -webkit-transform: perspective(1px) translateZ(0);
    position: relative;
    -webkit-transition-duration: 0.3s;
 }

  .github:before {
    content: "";
    position: absolute;
    height: 30px;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 30px; 
    -webkit-transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    -webkit-transition-duration: 0.3s;
    background: linear-gradient(to right, rgba(221,83,189,1) 0%,rgba(241,173,232,0) 100%); 
}

  .github:hover:before {
    -webkit-transform: scaleX(1);
}



</style>

