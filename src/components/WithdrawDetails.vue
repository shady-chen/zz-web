<template>
  <div>
    <div class="modifypassword_title" style="display:block;">
      <a href="/#/WithdrawList">
        <i class="icon"></i>
      </a>
      <span>提现详情</span>
    </div>
    <div>
      <p style="font-size: 0.3rem;color: #000;margin-bottom: 15px;margin-top: 15px;">提现信息：</p>
      <ul class="tabs_list">
        <li class="list_item"  style="width: 96%;margin: 0 auto;border: 1px solid #d7d7d7;padding: 0.2rem;
-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;text-align: left!important;font-size: 0.3rem;
 background: #f6f6f6" >
          <p style="text-align: left!important;margin-bottom: 15px;color: #000;">
            <span style="font-size: 0.3rem;color: #000;">总金额：<b style="color: red;font-size: 0.4rem;">{{withdrawData.money}}</b></span>
            <span style="float: right;margin-right:10px;font-size: 0.3rem;color: #000;">{{withdrawData.create_time}}</span>
          </p>
          <p style="text-align: left!important;margin-bottom: 15px;">

            <span style="font-size: 0.3rem;color: #000;">订单号：{{withdrawData.id}}</span>
            <span style="float: right;margin-right:10px;font-size: 0.3rem;color: #000;">状态：<b style="color: green;">{{byStatusReturnStr(withdrawData.states)}}</b></span>
          </p>
          <p style="text-align: left!important;margin-bottom: 5px;overflow: hidden">
              <span style="font-size: 0.3rem;color: #000;margin-top: 8px;display: block;float:left;">备注：
               {{withdrawData.remarks}}
              </span>
          </p>
        </li>
      </ul>
      <p style="font-size: 0.3rem;color: #000;margin-bottom: 15px;margin-top: 15px;">我的银行卡：</p>
      <ul class="tabs_list">
        <li class="list_item"  style="width: 96%;margin: 0 auto;border: 1px solid #d7d7d7;padding: 0.2rem;
-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;text-align: left!important;font-size: 0.3rem;
 background: #f6f6f6" >
          <p style="text-align: left!important;margin-bottom: 15px;color: #000;">
            <span style="font-size: 0.3rem;color: #000;">姓名：<b style="color: red;font-size: 0.4rem;">{{withdrawData.real_name}}</b></span>
            <span style="float: right;margin-right:10px;font-size: 0.3rem;color: #000;">开户行：{{withdrawData.bank_where}}</span>
          </p>
          <p style="text-align: left!important;margin-bottom: 15px;">

            <span style="font-size: 0.3rem;color: #000;">银行卡类型：{{withdrawData.bank_which}}</span>
            <!--<span style="float: right;margin-right:10px;font-size: 0.3rem;color: #000;">期数：{{orderData.packet_expect}}</span>-->
          </p>
          <p style="text-align: left!important;margin-bottom: 5px;overflow: hidden">
              <span style="font-size: 0.3rem;color: #000;margin-top: 8px;display: block;float:left;">银行卡账号：
               <b style="color: green;">{{withdrawData.bank_num}}</b>
              </span>
          </p>


        </li>
      </ul>

    </div>


  </div>
</template>

<script>
  export default {
    name: 'WithdrawDetails',
    data(){
      return {
        withdrawData:{},
        picture: {},
        result: '',
        remark:'',
      }
    },
    methods:{
      getOne(){
        let self = this
        // console.log(self.$route.params.id)
        this.$http.post(this.$store.state.basePath + '/user/withdraw/getWithdrawById',
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
              this.withdrawData = res.body.data;
            }
          })
      },
      byStatusReturnStr(status){
        let str = '未知'
        switch (status) {
          case 1:
            str = '审核中'
            break;
          case 2:
            str = '审核通过'
            break;
          case 3:
            str = '审核未通过'
            break;
          default:
            str = '未知状态'
            break;
        }
        return str;
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
