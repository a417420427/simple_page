<template>
    <div class="page-login">
        <el-input type="text" v-model="username" placeholder="请输入用户名"/>
        <el-input type="password" v-model="password" placeholder="请输入密码" />
        <el-button @click="onLogin" type="primary">登录</el-button>
    </div>
</template>
<script>
export default {
    name: 'home',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        onLogin() {
            console.log(this.username, this.password)
            if(!this.username || !this.password) {
                this.$messge('用户名和密码不能为空')
                return 
            }

             this.axios({
                url: '/login',
                method: 'post',
                data: {
                    username: this.username,
                    password: this.password
                }
            }).then(res => {
                if(res.data.status === 200 ) {
                    this.$message({
                        type: 'success',
                        message: '登录成功'
                    })
                    this.$store.commit('user/setUsername', res.data.username)
                    this.$router.push('/')
                } else {
                    this.$message({
                        type: 'warning',
                        message: '登录失败'
                    })
                }
                
            }).catch(err => {
                console.log(err, '--')
                this.$message({
                    type: 'warning',
                    message: '登录失败'
                })
            })
        }
    }
}
</script>
