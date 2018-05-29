<template>
  <div class="con-login" id="wrapper">
    <follow/>
    <div class="con-img">
      <img src="/static/img/logo-zeit.png" alt="">
    </div>
    <div class="con-register-login">
      <Login @register-click="register=true"  v-if="!register"/>
      <Register @volver-click="register=false"  v-else/>
    </div>
    <div class="con-footer" id="footer">
      <footer>
        <div  class="con-copyright"> <p>Copyright &copy; 2018 Lusax Web</p> </div> 
        <div class="con-version" >  <p >V.0.0.1 </p> </div> 
      </footer>
    </div>

    </div>
</template>

<script>
  import Register from './_register.vue'
  import Login from './_login.vue'
  import follow from './follow.vue'
  export default {
    name: 'landing-page',
    components: {
      Register,
      Login,
      follow
    },
    data () {
      return {
        register: false
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  h1 {
    text-align: center;
    font-size: 50px;
  }
  .con-img {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
  }
  .con-img img {
    width: 150px;
  }
  .con-login {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .con-register-login {
    display: flex;
    align-items: center;
    justify-content: center;
    /*padding-left: 50px;*/
    border-left: 1px solid rgba(0, 0, 0, 0.050)
  }

  .con-footer {
    /*clear:both*/
    position: absolute;
    bottom:20px;
    width:95%;
    
  }

  .con-copyright {
    float: left;
    font-family: verdana;
    font-size: 10px;
  }
  .con-version {
    left:  50%;
    float: right;
    font-family: verdana;
    font-size: 10px;
  }

 
  
</style>
