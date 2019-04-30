<template>
    <div class="page-login">
        <el-input v-model="username" type="text" placeholder="请输入用户名"/>
        <el-input v-model="password" type="password" placeholder="请输入密码" />
        <el-input v-model="rePass" type="password" placeholder="请再次输入" />
        <el-button @click="onSignUp" type="primary">注册</el-button>
    </div>
</template>
<script>
export default {
    name: 'signup',
    data() {
        return {
            username: '',
            password: '',
            rePass: ''
        }
    },
    methods: {
        onSignUp() {
            if(!this.username || !this.password) {
                this.$message('用户名密码为空')
                return 
            }
            if(this.rePass !== this.password) {
                this.$message('两次密码不同')
                return
            }

            this.axios({
                url: '/signup',
                method: 'post',
                data: {
                    username: this.username,
                    password: this.password
                }
            }).then(res => {
                if(!res.data.error) {
                    this.$message({
                        type: 'success',
                        message: '注册成功'
                    })
                } else {
                    this.$message({
                        type: 'warning',
                        message: res.data.message
                    })
                }
                
            }).catch(err => {
                this.$message({
                    type: 'warning',
                    message: '注册失败'
                })
            })

        }
    }
}
</script>

