<template>

  <div class="wrap investmentRecord_page">
    <section class="container" style="background: #fff;">
      <header class="header investment_title" style="display: block;">
        <a href="/#/UserCenter">
          <i class="icon"></i>
        </a>
        <span>提现记录</span>
      </header>

      <div id="mybtn-b" @click="addWithdraw()">
        <b>+</b> &nbsp;&nbsp;
        <span>提现</span>
        <span style="float:right;margin-right: 30px;font-size: 0.4rem;"> ➜ </span>
      </div>
      <section class="tabs_wrap" id="tabs_wrap" style="height: auto;margin-bottom: 69px;top:1.88rem;">
        <ul class="tabs_list">
          <li class="list_item " id="liste" v-for="item in WithdrawData" style="
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
            <p style="text-align: left!important;" class="my-p2"> 提现时间:{{item.create_time}}</p>
            <p style="text-align: left!important;" class="my-p2"> 提现金额:{{item.money}}</p>
            <p style="text-align: left!important;" class="my-p2"> 提现单号：{{item.id}}</p>


            <img src="../assets/pass2.png" v-if="byStatusReturnStr(item.states) == '已通过'"
                 width='100px' alt="" class="rjgm-status">
            <img src="../assets/unpass.png" v-if="byStatusReturnStr(item.states) == '已驳回'"
                 width='100px' alt="" class="rjgm-status">

            <div class="show-details-rj" @click="getOneWithdraw(item.id)">
              <img src="../assets/novicefaqa.png" alt="">
            </div>

          </li>

        </ul>
      </section>
      <ul class="footer">
        <li class="footer-item">
          <a  href="/#/appIndex">
            <i class="icon icon_index "></i>
            <p class="icon_title">首页</p>
          </a>
        </li>

        <li class="footer-item">
          <a href="/#/OrderList" class="">
            <i class="icon icon_activity"></i>
            <p class="icon_title">订单</p>
          </a>
        </li>
        <li class="footer-item">
          <a href="/#/WithdrawList" class="">
            <i class="icon icon_invest active"></i>
            <p class="icon_title">提现</p>
          </a>
        </li>
        <li class="footer-item">
          <a href="/#/UserCenter" class="">
            <i class="icon icon_my "></i>
            <p class="icon_title">我的</p>
          </a>
        </li>
      </ul>

    </section>
  </div>
</template>
<style>
  .show-details-rj
  {
    position: absolute;
    right: 10px;
    top: 12px;
  }
  .rjgm-status{
    position: absolute;
    right: 10px;
    bottom: 12px;
    color: #0c9fff;
    font-weight: 900;
    font-size: 0.3rem;
  }
  .my-p2{
    height: 0.4rem;
    line-height: 0.4rem;
    color: #ddd;
    font-size: 0.28rem;
    margin-top: 10px!important;
  }
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
    name: 'WithdrawList',
    data () {
      return {
        WithdrawData: {},
      }
    },
    methods: {
      getWithdrawList () {
        this.$http.post(this.$store.state.basePath + '/user/withdraw/withdrawList',
          {},
        ).then(
          (res) => {
            console.log(res)
            if (res.body.status == 0) {
              console.log(res)
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if (res.body.status == 200) {
              this.WithdrawData = res.body.data
            }
          })
      },

      addWithdraw () {
        let self = this
        // self.$router.push({path:`/WithdrawDetails/${id}`});
        window.location.href = '/#/WithdrawAdd'

      },

      getOneWithdraw (id) {
        let self = this
        self.$router.push({path: `/WithdrawDetails/${id}`})
        // window.location.href = '/#/OrderOne';

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
    created () {
      this.getWithdrawList()

    },
  }

</script>

<style scoped>

  @import '../../static/css/personalCenter.css';
</style>
