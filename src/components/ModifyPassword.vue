<template>
  <div>
    <div class="modifypassword_title" style="display:block;">
      <a href="javascript:history.go(-1)">
        <i class="icon"></i>
      </a>
      <span>修改登录密码</span>
    </div>
    <form class="form_modify">
      <div class="input_group">
        <span class="input_des">原登录密码</span>
        <input type="password" name="txtOldPwd" id="txtOldPwd" v-model="txtOldPwd" placeholder="输入密码"/>
      </div>
      <div class="input_group">
        <span class="input_des">新登录密码</span>
        <input type="password" name="txtNewPwd" id="txtNewPwd" v-model="txtNewPwd" placeholder="6-20位字母、数字、特殊符号组合"/>
      </div>
      <div class="input_group">
        <span class="input_des">确认新密码</span>
        <input type="password" name="txtReNewPwd" id="txtReNewPwd" v-model="txtReNewPwd" placeholder="确认新密码"/>
      </div>
    </form>
    <button class="modifypassword_btn" id="modifypassword_btn" @click="modifyPass">确认</button>
  </div>
</template>

<script>
  export default {
    name: 'ModifyPassword.vue',
    data(){
      return{
        txtOldPwd:'',
        txtNewPwd:'',
        txtReNewPwd:'',
      }
    },
    methods:{
      modifyPass(){
        let oldPass = this.txtOldPwd;
        let newPass = this.txtNewPwd;
        let reNewPass = this.txtReNewPwd;

        if(newPass != reNewPass){
          this.mui.toast('两次密码不一样!', {duration: 'short', type: 'div'})
          return false
        }

        if(newPass == "" || newPass.length < 6){
          this.mui.alert('密码是6-20位', '提示');
          return
        }

        this.$http.post(this.$store.state.basePath + '/user/user/updatePassword',
          {
            oldPass: oldPass,
            newPass: newPass,
          },
        ).then(
          (res) => {
            if (res.body.status == 0) {
              console.log(res)
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if(res.body.status == 200){
              this.mui.alert(res.body.msg, '提示', '确认',function(){
                window.location.href = '/#/UserInfo';
              })
            }
          })

      }
    }
  }


</script>

<style scoped>

</style>
