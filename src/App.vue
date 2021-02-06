<template>
  <div id="app">
    <!-- active-class="active"路由也可用统一改   -->
    <router-link to="/Home" title="" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/About" title="" tag="button" replace>about</router-link>
    <router-link :to="'/user/'+userId" title="" tag="button" replace>user</router-link>
    <router-link :to="{path:'/profile',query:{name:'teddy'}}" title="">档案</router-link>
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
    <!--    排除Profile-->
    <!--代码跳转路由-->
    <button @click="homeclick">home</button>
    <button @click="aboutclick">about</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: 'teddy'
    }
  },
  methods: {
    homeclick() {
      console.log("homeclick")
      this.$router.replace('/home')
    },

    aboutclick() {
      console.log("aboutclick")
      this.$router.replace('/about')   //router    new的：const router = new VueRouter

    }
  }
}
</script>

<style>
.router-link-active {
  color: red
}

.active {
  color: tomato;
}
</style>
