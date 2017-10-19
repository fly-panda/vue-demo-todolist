<template>
  <div class="header">
    <router-link :to="{name: 'Index'}" class="back">
      <
    </router-link>
    <div v-text="title"></div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        title: '事项列表'
      }
    },
    methods: {
      // goback: function() {
      //   console.log(1111)
      // }
    }
  }
</script>

<style scoped>
  .header {
    background: #71906e;
    color: #fff;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 16px;
    width: 100%;
    position: relative;
    text-align: center;
  }
  .back {
    position: absolute;
    font-size: 25px;
    font-weight: normal;
    left: 15px;
    top: 0;
    color: #fff;
  }
</style>
