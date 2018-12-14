<template>
  <div class="mui-content">


    <!--<form id='login-form' class="mui-input-group">-->
      <!--<div class="mui-input-row">-->
        <!--<label><span class="mui-icon iconfont icon-wode">账号</span></label>-->
        <!--<input id='account' type="text" class="mui-input-clear mui-input" placeholder="手机号" v-model="username">-->
      <!--</div>-->
      <!--<div class="mui-input-row">-->
        <!--<label><span class="mui-icon mui-icon-locked">密码</span></label>-->
        <!--<input id='password' type="password" class="mui-input-clear mui-input" placeholder="密码" v-model="password">-->
      <!--</div>-->
    <!--</form>-->
    <!--<div class="mui-content-padded">-->
      <!--<button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="login">登录</button>-->

    <!--</div>-->
    <!--<div class="mui-content-padded oauth-area">-->

    <!--</div>-->
    <!--<div class="mui-content-padded">-->
      <!--<a id='forgetPassword' @click="forgetPassword">忘记密码？</a>-->
      <!--<a id='register' @click="register">注册</a>-->
    <!--</div>-->

    <div class="login_bg">
      <img src="../assets/img/login_bg.png">
      <div>
        <div class="login_title" style="display: none;">
          <a href="index.html">
            <i class="icon"></i>
          </a>
          <a href="reg.html">
            <span>注册</span>
          </a>
        </div>
        <!--登录内容部分-->
        <div class="login_content">
          <div class="username">
            <i class="icon icon_user"></i>
            <input type="text" id="user" v-model="username" placeholder="用户名/手机号"/>
          </div>
          <div class="password">
            <i class="icon icon_pwd"></i>
            <input type="password" id="pwd" v-model="password" class="mui-input-password" placeholder="密码"/>
          </div>
          <span class="btn login_btn" @click="login">登录</span>
          <p class="forget_btn">
            <a href="forgetPwd.html" class="forget-a">忘记密码?</a>
            <a href="/#/register" class="register-a">立即注册</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '',
        username: '',
        password: ''
      }
    },
    methods: {

      login () {
        //提交前的验证
        let phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if (!phoneReg.test(this.username)) {
           this.mui.alert('手机号码格式不正确', '提示');
           return
        }
        if(this.password == "" || this.password.length < 6){
          this.mui.alert('密码是6-20位', '提示');
          return
        }


        this.$http.post(this.$store.state.basePath + '/user/user/login',
          {
            phone: this.username,
            password: this.password,
          },
        ).then(
          (res) => {
            if (res.body.status == 0) {
              console.log(res)
              this.mui.alert(res.body.msg, '提示')
            } else {

              this.$router.replace('/appIndex')
              console.log(res)
            }

          })
      }
    },
    created () {

    }
  }
</script>
<style>
  /*.mui-toast-container .mui-active*/
</style>
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
