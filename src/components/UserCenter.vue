<template>
    <div>
      <!--页面头部-->
      <div class="my_header">
        <div class="my_headertop">
          <a href="/#/NoticeList" class="my_iconmessage"><i ></i></a>
          <span id="user_info"></span>
          <a href="/#/UserInfo" class="my_iconsetting"><i ></i></a>
        </div>
        <div class="my_headercenter">
          <p class="account_type"></p>

          <p class="num"><span id="balance_num"></span><span id="balance_dec" class="num_deci"></span></p>
        </div>

        <div style="margin-top: 80px;">
          <img src="../assets/img/head.png" alt="" style="width: 93px;">
          <p style="margin-top: 15px;font-size: 16px;color: #fff;font-weight: 700;">{{myUserInfo.phone}}</p>
        </div>


      </div>



      <!--页面主体内容部分-->
      <div class="my_content">
        <div class="my_content_top">
          <img class="ct_bg" src="../assets/img/ct_bg.png" alt="" />
          <div class="left" id="recharge_btn">
            <i class="icon_charge"></i>
            <span class="bold">{{myUserInfo.money}}</span>
          </div>
          <div class="right withdraw_btn">
            <i class="icon_withdraw"></i>
            <span class="bold">{{myUserInfo.unclear_money}}</span>
          </div>
        </div>
        <div class="my_content_bottom">
          <ul>
            <li class="item">
              <a href="/#/OrderList">
                <div>
								<span class="icon_wrap">
									<i class="icon icon_tzjl"></i>
								</span>
                  <span class="item_detail">我的订单</span>
                  <i class="icon icon_zhankai"></i>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="/#/Moneysteam">
                <div>
								<span class="icon_wrap">
									<i class="icon_tzmx"></i>
								</span>
                  <span class="item_detail">资金明细</span>
                  <i class="icon icon_zhankai"></i>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="/#/BankList">
                <div>
								<span class="icon_wrap">
									<i class="icon_tzmx"></i>
								</span>
                  <span class="item_detail">银行卡</span>
                  <i class="icon icon_zhankai"></i>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="/#/MyTeam">
                <div>
								<span class="icon_wrap">
									<i class="icon icon_jlyh"></i>
								</span>
                  <span class="item_detail">我的团队</span>
                  <span class="couponNum"></span>
                  <i class="icon icon_zhankai"></i>
                </div>
              </a>
            </li>
            <li class="item" id="addBank">
              <a href="javascript:;" >
                <div>
								<span class="icon_wrap">
									<i class="icon icon_card"></i>
								</span>
                  <span class="item_detail">联系客服</span>
                  <i class="icon icon_zhankai"></i>
                </div>
              </a>
            </li>
            <!--<li class="item">-->
              <!--<a href="inviteF.html">-->
                <!--<div>-->
								<!--<span class="icon_wrap">-->
									<!--<i class="icon icon_ewm"></i>-->
								<!--</span>-->
                  <!--<span class="item_detail">安全退出</span>-->
                  <!--<i class="icon icon_zhankai"></i>-->
                <!--</div>-->
              <!--</a>-->
            <!--</li>-->
          </ul>
        </div>
        <div style="height: 1rem;">

        </div>
      </div>


      <!--	页面底部部分-->
      <ul class="footer">
        <li class="footer-item">
          <a  class="" href="/#/AppIndex">
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
            <i class="icon icon_invest"></i>
            <p class="icon_title">提现</p>
          </a>
        </li>
        <li class="footer-item">
          <a href="/#/UserCenter" class="">
            <i class="icon icon_my active"></i>
            <p class="icon_title ">我的</p>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'UserCenter',
    data(){
      return{
        myUserInfo:{}
      }
    },
    methods:{
      getInfo(){
        this.$http.post(this.$store.state.basePath + '/user/user/getUser',
          {},
        ).then(
          (res) => {
              this.myUserInfo = res.body;

          })
      },
    },
    created(){
      this.getInfo();
    }
  }
</script>

<style scoped>

</style>
