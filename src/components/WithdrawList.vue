<template>

  <div class="wrap investmentRecord_page">
    <section class="container" style="background: #fff;">
      <header class="header investment_title" style="display: block;">
        <a href="/#/UserCenter">
          <i class="icon"></i>
        </a>
        <span>提现记录</span>
      </header>

      <button style="background: #0197ff;margin-top: 60px!important;" class="mt-btn" @click="addWithdraw()">提现</button>
      <section class="tabs_wrap" id="tabs_wrap" style="height: auto;margin-bottom: 69px;top:1.88rem;">
        <ul class="tabs_list">
          <li class="list_item " id="liste" v-for="item in WithdrawData" style="width: 90%!important;
    margin: 10px auto!important;
    border: 1px solid #d7d7d7!important;
    padding: 0.2rem!important;
    -webkit-border-radius: 5px!important;
    -moz-border-radius: 5px!important;
    border-radius: 5px!important;
    text-align: left !important;
    font-size: 0.3rem!important;
    background: #f6f6f6!important;">
            <p style="text-align: left!important;margin-bottom: 15px;color: #000;">
              <span style="font-size: 0.3rem;color: #000;">总金额：<b
                style="color: red;font-size: 0.4rem;">{{item.money}}</b></span>
              <span style="float: right;margin-right:10px;font-size: 0.3rem;color: #000;">{{item.create_time}}</span>
            </p>
            <p style="text-align: left!important;margin-bottom: 15px;">

              <span style="font-size: 0.3rem;color: #000;">订单号：{{item.id}}</span>
              <span style="float: right;margin-right:10px;font-size: 0.3rem;color: #000;">状态：<b style="color: green;">{{byStatusReturnStr(item.states)}}</b></span>
            </p>
            <p style="text-align: left!important;margin-bottom: 5px;overflow: hidden">
              <button style="float: right;margin-right:10px;background: #0197ff;" class="mt-btn"
                      @click="getOneWithdraw(item.id)">提现详情
              </button>
            </p>


          </li>
        </ul>
      </section>
      <ul class="footer">
        <li class="footer-item">
          <a  class="">
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
            str = '审核通过'
            break
          case 3:
            str = '审核未通过'
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
