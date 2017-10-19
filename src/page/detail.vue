<template>
  <div class="Detail">
    <h1>{{ $route.params.id + 1 }}</h1>
    <div>{{ $route.params.text}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    data () {
      return {
        content:''
      }
    },
    mounted: function () {
      this.$nextTick(function(){

      })
    },
    methods: {
    }
  }
</script>

<style>
  h1 {
    background: rgba(113,144,110,1);
    width: 30px;
    height: 30px;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
    margin: 0 auto;
  }
  .Detail {
    font-size: 16px;
    height: 300px;
    background: #fff;
    margin: 0 15px;
    padding: 15px;
    text-align: left;
    margin-top: 30px;
    box-shadow: 0 0 2px 2px rgba(0  , 0, 0, .1);
  }
</style>
