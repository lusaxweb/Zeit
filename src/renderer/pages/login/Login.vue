<template>
  <div class="con-login" id="wrapper">
    <follow/>
    <div class="con-registroLogin">   
      
      <div class="con-img">
        <img src="/static/img/logo-zeit.png" alt="">
      </div>

      <div class="con-register-login">
        <Login @register-click="register=true"  v-if="!register"/>
        <Register @volver-click="register=false"  v-else/>
      </div>
      
      
    
    </div>
    
    
    <div class="con-footer" id="footer">
      <footer >
        <div class="con-copyright"> <a href="http://www.lusaxweb.com.ve/" target="_blank">Copyright &copy; 2018 Lusax Web</a> </div>
        <div class="con-version" >  <p >V {{version}} </p> </div> 
      </footer>      
    </div>
  </div>

</template>

<script>
  import Register from './_register.vue'
  import Login from './_login.vue'
  import follow from './follow.vue'
  import version from '../../../../package.json'
  export default {
    name: 'landing-page',
    components: {
      Register,
      Login,
      follow
    },
    data () {
      return {
        register: false,
        version: version.version
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
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: absolute;
    width: 100%;
  }

  .con-register-login {
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid rgba(0, 0, 0, 0.050)
  }

  .con-footer {
    bottom:0px;
    width:100%;
    padding: 20px;
    position: absolute;
  }

  .con-footer footer {
    display: flex;
    justify-content: space-between;
    width:100%;
}
  .con-copyright {
    font-family: verdana;
    font-size: 10px;

  }
  .con-version {
    font-family: verdana;
    font-size: 10px;
  }

 .con-footer:before {
     width: 8px;     
     background:white;
     content:'';
     position: absolute;
     left: 0px;
     top: 29%;
     height: 45%;
     border-radius: 5px 5px 5px 0px;
}

  .con-copyright a {
    color:white;
}
  
  .con-registroLogin{
    width: calc(100% - 300px);
    display:flex;
    flex-direction: column;
  }

  
</style>
