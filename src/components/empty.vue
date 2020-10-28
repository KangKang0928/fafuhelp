<template>
  <div class="none">
      <i class="fa fa-cube fa-5x" aria-hidden="true"></i>
      <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'None'
}
</script>

<style scoped>
  .none{
    width:200px;
    height:160px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;

  }
  i,p{
    color:rgb(185, 185, 185);
  }
</style>
