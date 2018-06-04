<template lang="html">
  <div class="con-register">
    <h2>Register</h2>
    <div class="con-inputs">

      <vs-input vs-label-placeholder="Email" v-model="datos.usuario"/>

      <vs-input vs-label-placeholder="Password" v-model="datos.pass" vs-type="password"/>

      <vs-input vs-label-placeholder="Confirm Password" v-model="datos.repitePass"/>

      <vs-input vs-label-placeholder="Cod de area" v-model="datos.codArea"/>

      <vs-input vs-label-placeholder="Telefono" v-model="datos.telefono"/>

      <vs-button  class="btn-guardar" type="button" @click="registrar">Save </vs-button>

      <vs-button name="button" vs-type="primary-filled" @click="$emit('volver-click')">Back </vs-button>

    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
// TODO es: se define el store o el Json del componente para registrar los datos en firebase
export default {
  name: 'register',
  data () {
    return {
      datos: {
        usuario: '',
        pass: '',
        repitePass: '',
        correo: '',
        codArea: '',
        telefono: ''
      }
    }
  },
  methods: {
    // es: Este metodo se utiliza para registrar el Json en firebase
    registrar () {
      console.log('this.datos.usuario', this.datos.usuario)
      // this.$router.push('/home')
      firebase.auth().createUserWithEmailAndPassword(this.datos.usuario, this.datos.pass).catch(function (user) {
      }
      )
      this.clear()
    },
    clear () {
      // es: Una vez registrado se limpia el store
      for (var clave in this.datos) {
        this.datos[clave] = ''
      }
    }
  }
}
</script>

<style lang="css">
.con-register {
  background: rgb(255, 255, 255);
  width: 400px;
  padding: 15px;
  border-radius: 8px;
}
.con-register h2 {
  text-align: center;
  color: rgb(var(--primary-zeit));
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
  border-radius: 5px;
}

.con-span {
  width: 100%;
  color: rgb(248, 000, 000);
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: small;
  font-weight: lighter;
}

</style>
