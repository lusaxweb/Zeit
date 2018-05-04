<template>
  <div class="container" id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'zeit',
    mounted () {
      console.log('Maluma Baby 2!')
      firebase.database().ref('/hello').on('value', function (snapshot) {
        console.log(snapshot.val())
      })
    }
  }
</script>

<style>
  /* CSS */
  /*TODO es: Variables de toda la aplicación */
  :root {
    --primary-zeit: 106, 111, 199;

    /* TODO es: colores de redes sociales */
    --facebook: 59, 89, 152;
    --google-plus: 221, 75, 57;
  }

  /*TODO es: los estilos globales de la aplicación */
  * {
    padding: 0px;
    margin: 0px;
    list-style: none;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
    font-family: arial;
  }
  button {
    padding: 8px;
    border: 0px;
    border-radius: 6px;
    cursor: pointer;
  }
  a {
    color: rgb(var(--primary-zeit))
  }
  .container {
    background: rgb(255, 255, 255);
    height: 100vh;
    width: 100%;
  }
</style>
