<template>
  <div id="app">
    <div v-if="username">用户名: {{username}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'App',
  created() {
    this.axios.get('/status').then(res => {
      if(res.data.isLogin) {
        this.setLoginStatus(true)
        this.setUsername(res.data.username)
        if(this.$route.name === 'login') {
          this.$router.push('/')
        }
      }
    }).catch(err => {
      this.$router.push('/login')
    })
  },
  computed: {
    ...mapState('user', ['isLogin', 'username'])
  },
  mounted() {

  },
  methods: {
    ...mapMutations('user', ['setLoginStatus', 'setUsername'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
