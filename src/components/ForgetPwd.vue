<template>
  <div>

    <div class="login_bg">
      <img src="../assets/img/login_bg.png">
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
              <input type="text" id="valicode" placeholder="短信验证码" maxlength="4" v-model="code" />
              <span class="get_code" id="get_valicode" v-show="sendMess" @click="getCode">获取验证码</span>
              <span class="get_code" id="get_valicode2" v-show="!sendMess" style="background: #ccc">{{count}}秒</span>
            </div>

            <div class="item">
              <input type="password" id="password" placeholder="密码6-20位字母数字组合" maxlength="20" v-model="userpass" />
            </div>
            <div class="item"  >
              <input type="password" id="password2" placeholder="重复密码，区分大小写" maxlength="20" v-model="userpass2"/>
            </div>

            <a  @click="register" class="register_btn disabled" style="text-align: center" id="register_btn">重置</a>

            <a  href="/#/" class="register_btn disabled" style="text-align: center;background: #c1c1c1;" >返回登录</a>





          </div>

        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'ForgetPwd',
    data () {
      return {
        backText: '返回',
        userpass: '',
        userpass2: '',
        code: '',
        invitation_code: '',
        phone:null,
        sendMess:true,
        count:''
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
              this.mui.alert(res.body.msg, '提示', '确认');
            const TIME_COUNT = 60;
            if (!this.timer) {
              this.count = TIME_COUNT;
              this.sendMess = false;
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                  this.count--;
                } else {
                  this.sendMess = true;
                  clearInterval(this.timer);
                  this.timer = null;
                }
              }, 1000)
            }

          });
      },


      register () {
        let phone = this.phone
        let password = this.userpass
        let password2 = this.userpass2
        let code = this.code

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

        this.$http.post(this.$store.state.basePath + '/user/user/updatePassword2',
          {
            phone: this.phone,
            newPass: this.userpass,
            code: this.code,
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
