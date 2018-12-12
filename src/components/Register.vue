<template>
  <div>
     <header class="mui-bar mui-bar-nav">
				<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
				<h1 class="mui-title">注册</h1>
		</header>
    <form id='register-form' class="mui-input-group">
        <div class="mui-input-row">
          <label>用户名:</label>
          <input class="myinput" type="text" placeholder="请输入手机号码" v-model="username" />
        </div>
        <div class="mui-input-row">
          <label>密码:</label>
          <input class="myinput" type="password" placeholder="请输入密码" v-model="userpass" />
        </div>
        <div class="mui-input-row">
          <label>重复密码:</label>
          <input class="myinput" type="password" placeholder="请再一次输入密码" v-model="userpass2" @blur="regrepassword()" />
        </div>
        <div class="mui-input-row">
          <label>验证码:</label>
          <input class="myinput" type="text" placeholder="请输入手机验证码" v-model="code" style="width:50%;float:left" />
          <!-- <button class="mui-btn mui-btn-primary" @click="send" id='send' name='send' v-model="send">获取</button> -->
          <input class="mui-btn mui-btn-primary" type="button" value="获取" v-model="sendval" @click="send" style="background-color:#6969de;color:white"/>
        </div>
        <div class="mui-input-row">
          <label>推荐码:</label>
          <input class="myinput" type="text" placeholder="邀请人推荐码" v-model="invitation_code" />
        </div>
    </form>
    <button class="mui-btn mui-btn-success" @click="register">注册</button>
    <button class="mui-btn mui-btn-danger" @click="backLogin">{{backText}}</button>
  </div>
</template>
<script>
  export default {
    name:'register',
    data() {
      return {
        backText: '返回',
        username: '',
        userpass: '',
        userpass2: '',
        code: '',
        invitation_code: '',
        sendval:'获取'
      }
    },
    methods: {
        send(){
          // this.$('#send').attr("disabled", "disabled");
          var wait = 10;
           var interval = setInterval(function () {
           // obj.css('backgroundColor', '#999B9C');
            // obj.val(wait + '秒再次发送');
            this.sendval = wait+"Mio"
            wait--;
            if (wait < 0) {
                clearInterval(interval);
                this.sendval = "获取"
                // obj.val('获取验证码');
			    	this.$('#send').removeAttr("disabled");
               // obj.css('backgroundColor', '#ed4040');
            }
            ;
        }, 1000);
        },

       regrepassword(){
        var password = this.userpass;
        var repassword = this.userpass2;
        var mbTest_password=/^[a-zA-Z0-9_]{5,15}$/;
        // if(repassword==""||repassword==null){
        //   this.mui.toast('请输入确认密码',{ duration:'short', type:'div' })
        //   // alert('请输入确认密码1','提示','确认');
        //   // layer.tips(,'#repassword',{tips:3});
        //   return false;
        // }else{
        //   if(!mbTest_password.test(repassword)){
        //     this.mui.toast('登录密码格式错误 (6~16个字符)',{ duration:'short', type:'div' })

        //     // this.mui.alert('请输入确认密码2','提示','确认');
        //     return false;
        //   }else{
        //     if(password!=repassword){
        //       this.mui.toast('两次密码输入不同',{ duration:'short', type:'div' })
        //       // mui.alert('请输入确认密码3','提示','确认');
        //       return false;
        //     }else{
        //       return true;
        //     }
        //   }
        // }
      },

      backLogin() {
        this.$router.replace('/')
        
      },

      register() {
        var phone = this.username;
        var password = this.userpass;
        var code = this.code;
        var invitation_code = this.invitation_code;
        if(phone == "" || phone == null){
          this.mui.toast('手机号码不能为空!',{ duration:'short', type:'div' })
          return false;
        }
        if(password == "" || password == null){
          this.mui.toast('密码不能为空!',{ duration:'short', type:'div' })
          return false;
        }
        if(code == "" || code == null){
          this.mui.toast('手机验证码不能为空!',{ duration:'short', type:'div' })
          return false;
        }
        if(invitation_code == "" || invitation_code == null){
          this.mui.toast('邀请码不能为空!',{ duration:'short', type:'div' })
          return false;
        }

        this.$http.post(this.$store.state.basePath+'/user/user/register',
          {
            phone:this.username,
            password:this.userpass,
            code:this.code,
            invitation_code:this.invitation_code

          },
        ).then(
          (res)=>{
            if(res.body.status == 0){
              console.log(res);
              this.mui.alert(res.body.msg,"提示","确认")
              // this.mui.toast(res.body.msg,{ duration:'short', type:'div' })
            }else{
              
              this.$router.replace('/')
              console.log(res);
            }
            
        });


      }
    }
  }
</script>
