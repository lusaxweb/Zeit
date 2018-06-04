<template lang="html">
  <div class="con-link">
    <div class="con-github"><a href="https://github.com/lusaxweb/Zeit" target="_blank">Github</a></div> 
    <div class="con-twitter"><a href="https://twitter.com/LusaxWeb" target="_blank">Twitter</a></div> 
    <div class="con-behance"><a href="https://www.behance.net/ManuelRovira" target="_blank">Behance</a></div> 
    <div class="con-dribbble"><a href="https://dribbble.com/ManuelRovira" target="_blank">Dribbble</a></div> 
  </div>
</template>

<script>
export default {
  name: 'follow'
}
</script>

<style lang="css">

.con-link{
	display: flex;
	position: relative;
	height:100%;
	width:200px ;
  background-color: #b800e6;  
  text-align: center;
	right: 0px;
  flex-direction:column; 
}

.con-link a {
	color:white;

}

.con-github{
	color:white;
}





</style>

