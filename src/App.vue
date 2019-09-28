<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab></tab>
  </div>
</template>
<script>
import Tab from '@/components/tab'
export default {
  components: {
    Tab
  }
}
</script>
<style lang="scss">
*{ margin : 0; padding : 0;}
ul,li{ list-style: none;}
html,body{ height:100%; background-color: #f1f1f1;font-size: px2rem(24)}
</style>
