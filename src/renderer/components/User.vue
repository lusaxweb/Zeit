<template lang="html">
  <div class="con-user">
    <!-- <router-link to="/">Sign Out</router-link> -->
    <vs-button @click = "SignOut" vs-type="success-gradient">Success</vs-button>
  </div>
</template>

<script>
export default {
  methods: {
    SignOut () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
  .con-user {
    position: absolute;
    right: 0px;
    padding: 10px;
    border-radius: 15px;
    margin: 10px;
  }
</style>
