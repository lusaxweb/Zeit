<template lang="html">
  	<div class="padre">
  		<div class="con-link">
  		  <div class="con-github"><a href="https://github.com/lusaxweb/Zeit" target="_blank">Github</a></div> 
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


.padre{
	display: flex;
	
	height:100%;
	width:300px ;
  	background-color: #b800e6;  
  	
  	
	
}
.con-link{
	
	position: absolute;
	top: 60px;
	left: 50px;
	text-align: left;
	
	

}

.con-link a {
	color:white;
	

}

.con-twitter{
	position: relative;
	top: 20px;
}

.con-behance{
	position: relative;
	top: 40px;
}

.con-dribbble{
	position: relative;
	top: 60px;
}


.con-button{
  	position: relative;
  	flex-direction: column;
  
  	top: 40%;
  	left: 72%;
  	flex-direction: column;
  }



  .ogin button {
  	
  	font-family: verdana;
    font-size: 20px;
  	background: white;
  	width:80px;
  	height: 60px;
  	border-radius: 5px 0px 0px 5px;
  	color: blue;

  }

  .sing-in{
  	
  	
  	
  	  
  }
</style>

