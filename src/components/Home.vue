<template>
  <div>
    <h2>我是首页</h2>
    <p>我是内容，哈哈哈哈哈</p>
    <router-link to="/home/news" title="">新闻</router-link>
    <router-link to="/home/message" title="">信息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: '/home/news'
    }
  },

  activated() {                                              //只有该组件使用了keep-alive才有效
    this.$router.push(this.path)
  },

  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path)
    this.path = this.$route.path
    next()
  }
  // created() {
  // document.title = "Home"
  // }
}
</script>

<style scoped>

</style>