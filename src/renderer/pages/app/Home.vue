<template lang="html">
  <div class="con-home">
    <div class="home">
      <!-- <h1>Home</h1> -->
      <Clock/>
    </div>
  </div>
</template>

<script>
import Clock from '@/components/Clock.vue'
export default {
  components: {
    Clock
  }
}
</script>

<style lang="css">
.con-home {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);
}
</style>
