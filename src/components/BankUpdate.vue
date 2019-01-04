<template>
  <div>
    <div class="modifypassword_title" style="display:block;">
      <a href="/#/BankList">
        <i class="icon"></i>
      </a>
      <span>银行卡修改</span>
    </div>
    <div>
      <ul class="tabs_list">
        <li class="list_item"  style="width: 96%;margin: 0 auto;border: 1px solid #d7d7d7;padding: 0.2rem;
-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;text-align: left!important;font-size: 0.3rem;
 background: #f6f6f6" >
          <p style="text-align: left!important;margin-bottom: 15px;color: #000;">
            <span style="font-size: 0.3rem;color: #000;">姓名：
              <!--<b style="color: red;font-size: 0.4rem;">-->
              <!--{{bankData.real_name}}-->
              <!--</b>-->
             <input type="text" name="remark" style="width: 260px;height:  0.5rem;margin-top: 3px;" v-model="real_name" />

            </span>
            <!--<span style="float: right;margin-right:10px;font-size: 0.3rem;color: #000;">开户行：{{bankData.bank_where}}</span>-->
          </p>
          <p style="text-align: left!important;margin-bottom: 15px;">
            <span style="font-size: 0.3rem;color: #000;">银行卡类型：
              <!--{{bankData.bank_which}}-->
              <input type="text" name="remark" style="width: 260px;height:  0.5rem;margin-top: 3px" v-model="bank_where" />

            </span>
          </p>
          <p style="text-align: left!important;margin-bottom: 15px;">
            <span style="font-size: 0.3rem;color: #000;">开户行：
              <!--{{bankData.bank_which}}-->
              <input type="text" name="remark" style="width: 280px;height:  0.5rem;margin-top: 3px" v-model="bank_which" />

            </span>
          </p>
          <p style="text-align: left!important;margin-bottom: 15px;">
            <span style="font-size: 0.3rem;color: #000;">银行卡账号：
              <!--{{bankData.bank_which}}-->
              <input type="text" name="remark" style="width: 260px;height:  0.5rem;margin-top: 3px" v-model="bank_num" />

            </span>
          </p>
          <p style="text-align: left!important;margin-bottom: 15px;">
            <button type="submit" style="background: #0197ff;color: #fff;" class="mt-btn" @click="update">修改</button>
          </p>
        </li>
      </ul>

    </div>


  </div>
</template>

<script>
  export default {
    name: 'BankUpdate',
    data(){
      return {
        bankData:{},
        real_name:'',
        bank_where:'',
        bank_which:'',
        bank_num:'',
      }
    },
    methods:{
      getOne(){
        let self = this
        // console.log(self.$route.params.id)
        this.$http.post(this.$store.state.basePath + '/user/bank/getAppBankById',
          {
            id:self.$route.params.id
          },
        ).then(
          (res) => {
            console.log(res)
            if (res.body.status == 0) {
              console.log(res)
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if(res.body.status == 200){
              this.bankData = res.body.data;
              this.real_name = this.bankData.real_name;
              this.bank_where = this.bankData.bank_where;
              this.bank_which = this.bankData.bank_which;
              this.bank_num = this.bankData.bank_num;

            }
          })
      },
      update(){
        let self = this
        // console.log(self.$route.params.id)
        this.$http.post(this.$store.state.basePath + '/user/bank/updateAppBank',
          {
            real_name:this.real_name,
            bank_where:this.bank_where,
            bank_which:this.bank_which,
            bank_num:this.bank_num,
            id:self.$route.params.id
          },
        ).then(
          (res) => {
            console.log(res)
            if (res.body.status == 0) {
              console.log(res)
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if(res.body.status == 200){
              window.location.href = '/#/BankList';

            }
          })
      },
    },
    created(){
      this.getOne();
    }

  }
</script>

<style scoped>
  @import '../../static/css/personalCenter.css';

</style>
