<template>

  <div class="wrap investmentRecord_page">
    <section class="container" style="background: #fff;">
      <header class="header investment_title" style="display: block;">
        <a href="/#/UserCenter">
          <i class="icon"></i>
        </a>

        <span>提现方式列表</span>
      </header>
      <div id="mybtn-b" @click="addBank()">
        <b>+</b> &nbsp;&nbsp;
        <span>添加银行卡</span>
        <span style="float:right;margin-right: 30px;font-size: 0.4rem;"> ➜ </span>
      </div>
      <section class="tabs_wrap" id="tabs_wrap" style="height: 100%;padding-bottom:114px;margin-top: 65px;">
        <ul class="tabs_list">
          <li class="item_list2" v-for="item in BankData" style="background: #00477b;" >

            <img v-if="item.bank_which!='支付宝'" src="../assets/bank.jpg" alt="" width="100px" class="bak-logo">
            <img v-if="item.bank_which=='支付宝'" src="../assets/alipay.jpg" alt="" width="100px" class="bak-logo">

            <div class="right-b">
              <p class="which-b"
                 style="text-align: left!important;">{{item.bank_which}}&nbsp;{{item.bank_where?('('+item.real_name+')'):''}}</p>
              <p class="which-b"
                 style="text-align: left!important;">{{item.bank_where?item.bank_where:item.real_name}}</p>
              <p class="which-b"
                 style="text-align: left!important;">{{item.bank_num}}</p>
            </div>

            <div class="delete-b" @click="deleteBank(item.id)">✖</div>

          </li>
        </ul>
      </section>


    </section>
  </div>
</template>
<style>
  .delete-b{
    width: 20px;
    height: 20px;
    line-height: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    position: absolute;
    top: 0;
    right: 0;
    background: #c80000;
  }
  .right-b{
    float: left;
    text-align: left!important;
  }
  .which-b{
    font-size: 0.32rem;
    color: #fff;
    text-indent: 1em;
    font-weight: 900;
    line-height: 0.5rem;
    height: 0.5rem;
    text-align: left!important;
  }
  .tabs_list>li{
    overflow: hidden;
    position: relative;
  }
  .bak-logo{
    float: left;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  #mybtn-b {
    margin-bottom: 10px;
    margin-top: 58px;
    z-index: 100;
    width: 100%;
    height: 0.8rem;
    text-align: left!important;
    font-size: 0.3rem;
    line-height: 0.8rem;
    background: #fff!important;
    text-indent: 2em;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;

  }
</style>
<script>
  export default {
    name: 'BankList',
    data () {
      return {
        BankData: {},
      }
    },
    methods: {

      getBankList () {
        this.$http.post(this.$store.state.basePath + '/user/bank/appBanksList',
          {},
        ).then(
          (res) => {
            if (res.body.status == 0) {
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if (res.body.status == 200) {
              this.BankData = res.body.data
            }
          })
      }
      ,
      addBank () {
        let self = this
        window.location.href = '/#/BankAdd'

      }
      ,
      updateBank (id) {
        let self = this
        self.$router.push({path: `/BankUpdate/${id}`})

      },
      addBank () {
        window.location.href = '/#/BankAdd'

      }
      ,
      updateBank (id) {
        let self = this
        self.$router.push({path: `/BankUpdate/${id}`})

      }
      ,
      deleteBank (id) {
        let that = this
        this.mui.confirm('确定删除吗', '提示', ['是', '否'], function (e) {

          if (e.index == 1) return

          that.$http.post(that.$store.state.basePath + '/user/bank/deleteAppBank', {id: id},).then((res) => {
            if (res.body.status == 0) {
              that.mui.alert(res.body.msg, '提示', '确认')
            }
            if (res.body.status == 200) {
              that.mui.alert(res.body.msg, '提示', '确认', function () {
                that.getBankList()
              })
            }
          })
        })

      },

    }
    ,
    created () {
      this.getBankList()
    }
  }

</script>

<style scoped>

  @import '../../static/css/personalCenter.css';


  .item_list2 {
    width: 96%;
    margin: 0 auto;
    border: 1px solid #d7d7d7;
    padding: 0.2rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    text-align: left !important;
    font-size: 0.3rem;
    background: #f6f6f6;
    margin-bottom: 15px;
    margin-top: 3px;
  }


</style>
