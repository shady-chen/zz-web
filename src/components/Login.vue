<template>
  <div class="mui-content">

    <header class="mui-bar mui-bar-nav">
				<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
				<h1 class="mui-title">登录</h1>
			</header>


             <form id='login-form' class="mui-input-group">
                 <div class="mui-input-row">
                     <label><span class="mui-icon iconfont icon-wode">账号</span></label>
                     <input id='account' type="text" class="mui-input-clear mui-input" placeholder="手机号" v-model="username">
                 </div>
                 <div class="mui-input-row">
                     <label><span class="mui-icon mui-icon-locked">密码</span></label>
                    <input id='password' type="password" class="mui-input-clear mui-input" placeholder="密码" v-model="password">
                 </div>
             </form>
             <div class="mui-content-padded">
                 <button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="login">登录</button>
                 
             </div>
             <div class="mui-content-padded oauth-area">
 
             </div>
             <div class="mui-content-padded">
                   <a id='forgetPassword' @click="forgetPassword">忘记密码？</a>
                   <a id='register' @click="register">注册</a>
            </div>
             
         </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:'',
      password:''
    }
  },
  methods: {
    register(){
      this.$router.replace('/register')
    },
    forgetPassword(){
      this.$router.replace('/forgetPassword')
    },
    login(){
      this.$http.post(this.$store.state.basePath+'/user/user/login',
          {
            phone:this.username,
            password:this.password,
          },
        ).then(
          (res)=>{
            if(res.body.status == 0){
              console.log(res);
              this.mui.toast(res.body.msg,{ duration:'short', type:'div' })
            }else{
              
              this.$router.replace('/appIndex')
              console.log(res);
            }
            
        });
    }
  },
  created(){
    // this.mui.alert('1');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>-->
