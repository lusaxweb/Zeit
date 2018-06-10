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
        <div>
          <button v-bind:class="{ active: focus }">Login</button>
        </div>
        <div>
          <button v-bind:class="{ active: focus }">Sing in</button>
        </div>
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
    position: relative;
    display: flex;
    flex-flow: nowrap column;
    height: 100vh;
    width: 25%;
    background-color: #b800e6;
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
  display: flex;
  flex-flow: nowrap column;
  align-items: flex-end;
  justify-content: center;
  top: 45vh;
  right: 0px;
  /*width: 30%;*/
  /*background: black;*/
}

.con-button div{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  /*background-color:blue;*/
}

.con-button button {
  width: 100%;
  height: 10vh;
  margin: 0px;
  background: inherit;
  font-size: 16px;
  color: white;
  border-radius:0px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

/*.con-button button::before{
  content: "";
  height: 5vh;
  width: 10%;
  margin: 0px;
  top: -30px;
  right: 0px;
  border-radius: 25%;
  background-color: red;
  position: absolute;
  z-index: 1;
}*/

.con-button button:focus {
  transition-duration: 0.5s;
  background-color: rgb(255,255,255);
  color: rgb(var(--primary-zeit));
  border-top-left-radius: 15px;
  border-top-rigth-radius: none;
  border-bottom-left-radius: 15px;
}



</style>

