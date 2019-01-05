<template>
  <div>

    <!--<form id='register-form' class="mui-input-group">-->
    <!--<div class="mui-input-row">-->
    <!--<label>用户名:</label>-->
    <!--<input class="myinput" type="text" placeholder="请输入手机号码" v-model="username" />-->
    <!--</div>-->
    <!--<div class="mui-input-row">-->
    <!--<label>密码:</label>-->
    <!--<input class="myinput" type="password" placeholder="请输入密码" v-model="userpass" />-->
    <!--</div>-->
    <!--<div class="mui-input-row">-->
    <!--<label>重复密码:</label>-->
    <!--<input class="myinput" type="password" placeholder="请再一次输入密码" v-model="userpass2" @blur="regrepassword()" />-->
    <!--</div>-->
    <!--<div class="mui-input-row">-->
    <!--<label>验证码:</label>-->
    <!--<input class="myinput" type="text" placeholder="请输入手机验证码" v-model="code" style="width:50%;float:left" />-->
    <!--&lt;!&ndash; <button class="mui-btn mui-btn-primary" @click="send" id='send' name='send' v-model="send">获取</button> &ndash;&gt;-->
    <!--<input class="mui-btn mui-btn-primary" type="button" value="获取" v-model="sendval" @click="send" style="background-color:#6969de;color:white"/>-->
    <!--</div>-->
    <!--<div class="mui-input-row">-->
    <!--<label>推荐码:</label>-->
    <!--<input class="myinput" type="text" placeholder="邀请人推荐码" v-model="invitation_code" />-->
    <!--</div>-->
    <!--</form>-->
    <!--<button class="mui-btn mui-btn-success" @click="register">注册</button>-->
    <!--<button class="mui-btn mui-btn-danger" @click="backLogin">{{backText}}</button>-->

    <div class="login_bg">
      <img src="/static/img/login_bg.png">
      <div>
        <div class="register_title" style="display:none;">
          <a >
            <i class="icon"></i>
          </a>
          <a class="login_btn" >登录</a>
        </div>
        <div class="register_content">
          <div class="register_part2">
            <div class="item">
              <input type="number" id="phonenum" placeholder="手机号码" v-model="phone"  />
            </div>
            <div class="item">
              <input type="password" id="password" placeholder="密码6-20位字母数字组合" maxlength="20" v-model="userpass" />
            </div>
            <div class="item"  >
              <input type="password" id="password2" placeholder="重复密码，区分大小写" maxlength="20" v-model="userpass2"/>
            </div>

            <div class="item">
              <input type="text" id="valicode" placeholder="短信验证码" maxlength="4" v-model="code" />
              <span class="get_code" id="get_valicode" @click="getCode">获取验证码</span>
            </div>
            <div class="item">
              <input type="text" id="init_code" placeholder="推荐人号码" maxlength="20" v-model="invitation_code" />
            </div>


            <a  @click="register" class="register_btn disabled" style="text-align: center" id="register_btn">注册</a>


            <div class="xieyi">
              <span class="xieyiname">注册账户表示您同意<a href="service_protol.html">《投呗注册协议》</a></span>
            </div>

            <div class="xieyi">
              <a href="/#/">前往登录</a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'register',
    data () {
      return {
        backText: '返回',
        userpass: '',
        userpass2: '',
        code: '',
        invitation_code: '',
        phone:null,
      }
    },
    methods: {

      getCode(){
        this.$http.post(this.$store.state.basePath + '/user/user/getCode',
          {
            phone: this.phone,
          },
        ).then(
          (res) => {
              this.mui.alert(res.body.msg, '提示', '确认')
          });
      },


      register () {
        let phone = this.phone
        let password = this.userpass
        let password2 = this.userpass2
        let code = this.code
        let invitation_code = this.invitation_code
        if (phone == '' || phone == null || phone.length != 11) {
          this.mui.toast('手机号码格式有错!', {duration: 'short', type: 'div'})
          return false
        }
        if (password == '' || password == null || password.length < 6) {
          this.mui.toast('密码号码格式有错!!', {duration: 'short', type: 'div'})
          return false
        }
        if (password != password2) {
          this.mui.toast('两次密码不一致!!', {duration: 'short', type: 'div'})
          return false
        }
        if (code == '' || code == null) {
          this.mui.toast('手机验证码不能为空!', {duration: 'short', type: 'div'})
          return false
        }
        if (invitation_code == '' || invitation_code == null || invitation_code.length != 11 ) {
          this.mui.toast('推荐人手机号有错!', {duration: 'short', type: 'div'})
          return false
        }
        this.$http.post(this.$store.state.basePath + '/user/user/register',
          {
            phone: this.phone,
            password: this.userpass,
            code: this.code,
            invitation_code: this.invitation_code
          },
        ).then(
          (res) => {
            if (res.body.status == 0) {
              console.log(res)
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if(res.body.status == 200){
              this.mui.alert(res.body.msg, '提示', '确认',function(){
                  window.location.href = '/#/';
              })
            }
          })

      }
    }
  }
</script>
