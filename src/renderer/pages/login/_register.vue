<template lang="html">
  <div class="con-register">
    <h2>Register</h2>
    <div class="con-inputs">


        <div class="con-span">
          <span v-if="!datos.usuario">
            Requerido*
          </span>
        </div>
        <input
          placeholder="Usuario"
          type="text"
          v-model="datos.usuario"
        >


        <div class="con-span">
          <span v-if="!datos.pass">
            Requerido*
          </span>
        </div>

        <input
          placeholder="Pass"
          type="password"
          v-model="datos.pass"
        >

        <div class="con-span">
          <span v-if="!datos.repitePass">
            Requerido*
          </span>
        </div>

        <input
          placeholder="Repita la Contraseña"
          type="password"
          v-model="datos.repitePass"
        >


        <div class="con-span">
          <span v-if="!datos.correo">
            Requerido*
          </span>
        </div>

        <input
          placeholder="Correo"
          type="text" value=""
          v-model="datos.correo"
        >


        <div class="con-span">
          <span v-if="!datos.codArea">
            Requerido*
          </span>
        </div>

        <input
          placeholder="Cod de area"
          type="text"
          v-model="datos.codArea"
        >


        <div class="con-span">
          <span v-if="!datos.telefono">
            Requerido*
          </span>
        </div>


        <input
          placeholder="Telefono"
          type="text" value=""
          v-model="datos.telefono"
        >

        <button
          class="btn-guardar"
          type="button"
          @click="registrar">Guardar
        </button>

        <button
          name="button"
          type="button"
          @click="$emit('volver-click')">Volver
        </button>



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
      firebase.database().ref('registroDeUsuario').push(
        {
          'usuario': this.datos.usuario,
          'pass': this.datos.pass,
          'repita': this.datos.repitePass,
          'correo': this.datos.correo,
          'codArea': this.datos.codArea,
          'telefono': this.datos.telefono
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
  margin: 8px;
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
