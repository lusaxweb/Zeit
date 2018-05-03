<template lang="html">
  <div class="">
    <User/>
    <router-view></router-view>
    <Menu/>
  </div>
</template>

<script>
import Menu from '@/components/menu.vue'
import User from '@/components/User.vue'
export default {
  components: {
    Menu,
    User
  }
}
</script>

<style lang="css">
</style>
