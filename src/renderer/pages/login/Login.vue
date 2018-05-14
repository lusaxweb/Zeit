<template>
  <div class="con-login" id="wrapper">
    <div class="con-img">
      <img src="/static/img/logo-zeit.png" alt="">
    </div>
    <div class="con-register-login">
      <Login @register-click="register=true"  v-if="!register"/>
      <Register @volver-click="register=false"  v-else/>
    </div>
  </div>
</template>

<script>
  import Register from './_register.vue'
  import Login from './_login.vue'

  export default {
    name: 'landing-page',
    components: {
      Register,
      Login
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
</style>
