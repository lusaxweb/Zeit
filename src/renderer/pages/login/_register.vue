<template lang="html">
  <div class="con-register">
    <h2>Register</h2>
    <button @click="$emit('volver-click')"  type="button" name="button">Volver</button>
  </div>
</template>

<script>
export default {
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
</style>
