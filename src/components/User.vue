<template>
  <div>
    <h1>用户界面</h1>
    <h2>{{ userId }}</h2>
    <!--  route:routers里面当前活跃的route-->
  </div>
</template>

<script>
export default {
  name: "User",
  computed:{
    userId(){
      return this.$route.params.userId         //userId:          path: '/user/:userId',
    }
  }
}
</script>

<style scoped>

</style>