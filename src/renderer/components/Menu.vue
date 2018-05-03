<template lang="html">
  <header class="headerx">
    <ul>
      <li>
        <router-link to="/awwards">Awwards</router-link>
      </li>
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/config">Config</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          link: '/home',
          text: 'Zeit'
        }
      ]
    }
  }
}
</script>

<style lang="css">
.headerx {
  background: rgb(255, 255, 255);
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}
.headerx ul {
  display: flex;
  align-items: center;
  justify-content: center;
}
.headerx ul li a{
  padding: 15px;
  display: block;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
