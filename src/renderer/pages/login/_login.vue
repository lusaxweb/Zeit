<template lang="html">
  <div class="con-component-login">
    <div class="login">
      <h2>Login</h2>
      <div class="con-inputs">
        <!-- <input placeholder="Correo" type="text" name="" value="">/ -->
        <vs-input
          vs-icon="person"
          :vs-valid.sync="validos.email"
          vs-success-text="Correo Valido"
          vs-danger-text="The email does not meet the requirements"
          vs-type="email" vs-label-placeholder="Email" v-model="value1"/>
        <vs-input
          vs-icon="lock"
          :vs-valid.sync="validos.password"
          vs-success-text="Password Valida"
          vs-danger-text="The password must have at least 8 characters, 1 number, 1 special character"
          vs-type="password"
          vs-label-placeholder="Password" v-model="value4"/>
        <!-- /<input placeholder="Password" type="password" name="" value=""> -->

        <vs-button
          @click="login"
          vs-width="80%"
          vs-padding="0"
          vs-radius="5px"
          vs-type="primary-filled">Get started
        </vs-button>
        <!-- <button @click="login"  class="btn-login" type="button" name="button">Login</button> -->
      </div>


    <!--   <div class="con-btn-registro">
        <a href="#">¿Nuevo en Zeit?</a>
        <vs-button @click="$emit('register-click')" vs-type="primary-filled">Register</vs-button>
        <button @click="$emit('register-click')"  class="btn-registro" type="button" name="button">Register</button>
      </div> -->
      <div class="_o_">
        <span class="linea1"></span>
        <span class="o">o</span>
        <span class="linea2"></span>
      </div>

      <div class="con-redes-login">
        <button class="facebook" type="button" name="button">Facebook</button>
        <button @click="loginGooglePlus" class="googlePlus" type="button" name="button">Google +</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      value1: '',
      value4: '',
      validos: {
        email: false,
        number: false,
        url: false,
        password: false,
        custom: false
      }
    }
  },
  computed: {
    // validacionDatos () {
    //   var email = this.value1
    //   var password = this.value4
    //   if (email === '' || password === '') {
    //     return false
    //   } else {
    //     return true
    //   }
    // }
  },
  methods: {
    loginGooglePlus () {
    },
    login () {
      console.log('entre')
      console.log('value1', this.value1)
      console.log('value4', this.value4)
      firebase.auth().signInWithEmailAndPassword(this.value1, this.value4).catch(function (user) {
        // this.$router.push('/home')
        console.log('>>>>>>>>>>1')
      }
      )
      console.log('>>>>>>>>>>2')
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
  font-weight: bold;
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
  color: rgb(var(--primary-zeit));
  font-size: 1em;
}

.facebook {
  background: rgb(255,255,255)
}
.googlePlus {
  background: rgb(255,255,255)
}
.facebook:hover {
  background: rgb(var(--facebook));
  color:rgb(255,255,255);
}
.googlePlus:hover {
  background: rgb(var(--google-plus));
  color:rgb(255,255,255);
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
