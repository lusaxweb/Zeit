<template lang="html">
  <div class="con-component-login">
    <div class="login">
      <h2>Login</h2>
      <div class="con-inputs">
        <input placeholder="Correo" type="text" name="" value="">
        <input placeholder="Password" type="password" name="" value="">
        <button @click="login"  class="btn-login" type="button" name="button">Login</button>
      </div>

      <div class="con-btn-registro">
        <a href="#">¿Nuevo en Zeit?</a>
        <button @click="$emit('register-click')"  class="btn-registro" type="button" name="button">Register</button>
      </div>

      <!-- <div class="_o_">
        <span class="linea1"></span>
        <span class="o">o</span>
        <span class="linea2"></span>
      </div>

      <div class="con-redes-login">
        <button @click="loginGooglePlus" class="googlePlus" type="button" name="button">Google +</button>
        <button class="facebook" type="button" name="button">Facebook</button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loginGooglePlus () {
    },
    login () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="css" scoped>
.con-component-login {
  display: flex;
  align-items: center;
  justify-content: center;

}
.login {
  background: rgb(255, 255, 255);
  padding: 15px;
  width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.080);
}
.login h2 {
  color: rgb(var(--primary-zeit));
  text-align: center;
  font-weight: lighter;
}
.con-inputs {
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.con-inputs input {
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 8px;
  border-radius: 5px;
}
.btn-login {
  width: 100%;
  padding: 8px;
  border: 0px;
  background: rgb(var(--primary-zeit));
  border-radius: 5px;
  color: rgb(255, 255, 255);
  cursor: pointer;
}

._o_ {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
._o_ .linea1 {
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.09);
}
._o_ .linea2 {
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.09);
}
._o_ .o {
  color: rgba(0, 0, 0, 0.5);
  padding-left: 10px;
  padding-right: 10px;
  text-transform: uppercase;
}


.con-redes-login {
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
.con-redes-login button {
  width: 100%;
  padding: 9px;
  margin: 3px;
  border: 0px;
  border-radius: 7px;
  color: rgb(255, 255, 255);
}
.facebook {
  background: rgb(var(--facebook))
}
.googlePlus {
  background: rgb(var(--google-plus))
}


.con-btn-registro {
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  margin-top: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.con-btn-registro .btn-registro{
  width: 100%;
  margin-top: 10px;
  padding: 8px;
  background: rgb(var(--primary-zeit));
  color: rgb(255, 255, 255);

}
</style>
