<template>
  <div>
    <div class="modifypassword_title" style="display:block;">
      <a href="/#/WithdrawList">
        <i class="icon"></i>
      </a>
      <span>提现详情</span>
    </div>
    <div>
      <p style="font-size: 0.3rem;color: #000;margin-bottom: 15px;margin-top: 15px;">提现信息</p>
      <ul class="tabs_list">
        <li class="list_item " id="liste"  style="
    width: 90%!important;
    margin: 10px auto!important;
    border: 1px solid #d7d7d7!important;
    padding: 0.2rem!important;
    -webkit-border-radius: 5px!important;
    -moz-border-radius: 5px!important;
    border-radius: 5px!important;
    text-align: left !important;
    font-size: 0.3rem!important;
    position: relative;
    background: #008481!important;">
          <p style="text-align: left!important;" class="my-p2"> 提现时间:{{withdrawData.create_time}}</p>
          <p style="text-align: left!important;" class="my-p2"> 提现金额:{{withdrawData.money}}</p>
          <p style="text-align: left!important;" class="my-p2"> 提现单号：{{withdrawData.id}}</p>
          <p style="text-align: left!important;" class="my-p2"> 提现备注：{{withdrawData.remarks}}</p>

          <img src="../assets/pass2.png" v-if="byStatusReturnStr(withdrawData.states) == '已通过'"
               width='100px' alt="" class="rjgm-status">
          <img src="../assets/unpass.png" v-if="byStatusReturnStr(withdrawData.states) == '已驳回'"
               width='100px' alt="" class="rjgm-status">
        </li>

      </ul>


      <p style="font-size: 0.3rem;color: #000;margin-bottom: 15px;margin-top: 15px;">我的银行卡</p>


      <ul class="tabs_list">
        <li class="item_list2"     style="
    width: 90%!important;
    margin: 10px auto!important;
    border: 1px solid #d7d7d7!important;
    padding: 0.2rem!important;
    -webkit-border-radius: 5px!important;
    -moz-border-radius: 5px!important;
    border-radius: 5px!important;
    text-align: left !important;
    font-size: 0.3rem!important;
    position: relative;
    background: #00477b!important;">

          <img v-if="withdrawData.bank_which!='支付宝'" src="../assets/bank.jpg" alt="" width="100px" class="bak-logo">
          <img v-if="withdrawData.bank_which=='支付宝'" src="../assets/alipay.jpg" alt="" width="100px" class="bak-logo">

          <div class="right-b">
            <p class="which-b"
               style="text-align: left!important;">{{withdrawData.bank_which}}&nbsp;{{withdrawData.bank_where?('('+withdrawData.real_name+')'):''}}</p>
            <p class="which-b"
               style="text-align: left!important;">{{withdrawData.bank_where?withdrawData.bank_where:withdrawData.real_name}}</p>
            <p class="which-b"
               style="text-align: left!important;">{{withdrawData.bank_num}}</p>
          </div>

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

      byStatusReturnStr (status) {
        let str = '未知'
        switch (status) {
          case 1:
            str = '审核中'
            break
          case 2:
            str = '已通过'
            break
          case 3:
            str = '已驳回'
            break
          default:
            str = '未知状态'
            break
        }
        return str
      }
    },
    created(){
      this.getOne();
    }

  }
</script>

<style scoped>
  @import '../../static/css/personalCenter.css';

</style>
