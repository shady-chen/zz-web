<template>

  <div class="wrap investmentRecord_page">
    <section class="container" style="background: #fff;">
      <header class="header investment_title" style="display: block;">
        <a href="/#/UserCenter">
          <i class="icon"></i>
        </a>
        <span>银行卡列表</span>

      </header>
      <!--<section class="tabs">-->
        <!--<ul class="tabs_nav clearFix" id="tabs_nav" style="text-align: center">-->
          <!--<li class="active list_item" style="text-align: center"><a href="/#/OrderList">待付款<span id="count"></span></a></li>-->
          <!--<li class=" list_item"><a href="/#/OrderList2">审核中<span></span></a></li>-->
          <!--<li class="list_item"><a href="/#/OrderList3">已审核<span></span></a></li>-->
        <!--</ul>-->
        <!--<ul class="tabs_sub_nav clearFix">-->
        <!--<li class="list_item"><a href="javascript:;">期数</a></li>-->
        <!--<li class="list_item"><a href="javascript:;">金额</a></li>-->
        <!--<li class="list_item"><a href="javascript:;">状态</a></li>-->
        <!--</ul>-->
        <!--<div class="top_bar"></div>-->
      <!--</section>-->
      <section class="tabs_wrap" id="tabs_wrap">
        <ul class="tabs_list">
          <li class="list_item" v-for="item in BankData"  style="width: 96%;margin: 0 auto;border: 1px solid #d7d7d7;padding: 0.2rem;
-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;text-align: left!important;font-size: 0.3rem;
 background: #f6f6f6" >
            <p style="text-align: left!important;margin-bottom: 15px;color: #000;">
              <span style="font-size: 0.3rem;color: #000;">姓名：<b style="color: red;font-size: 0.4rem;">{{item.real_name}}</b></span>
              <span style="float: right;margin-right:10px;font-size: 0.3rem;color: #000;">开户行：{{item.bank_where}}</span>
            </p>
            <p style="text-align: left!important;margin-bottom: 15px;">

              <span style="font-size: 0.3rem;color: #000;">银行卡类型：{{item.bank_which}}</span>
              <!--<span style="float: right;margin-right:10px;font-size: 0.3rem;color: #000;">期数：{{orderData.packet_expect}}</span>-->
            </p>
            <p style="text-align: left!important;margin-bottom: 5px;overflow: hidden">
              <span style="font-size: 0.3rem;color: #000;margin-top: 8px;display: block;float:left;">银行卡账号：
               <b style="color: green;">{{item.bank_num}}</b>
              </span>
            </p>

            <p style="text-align: left!important;margin-bottom: 5px;overflow: hidden">
              <button style="float: left;margin-left:10px;background: #0197ff;"  class="mt-btn" @click="updateBank(item.id)">修改</button>
              <button style="float: right;margin-right:10px;background: #0197ff;"   class="mt-btn" @click="deleteBank(item.id)">删除</button>
            </p>
          </li>
        </ul>
      </section>
      <section class="footer">
        <button style="float: bottom;margin-bottom:10px;background: #0197ff;"   class="mt-btn" @click="addBank()">添加银行卡</button>
      </section>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'BankList',
    data(){
      return{
        BankData:{},
      }
    },
    methods:{
      getBankList(){
        this.$http.post(this.$store.state.basePath + '/user/bank/appBanksList',
          {
          },
        ).then(
          (res) => {
            console.log(res)
            if (res.body.status == 0) {
              console.log(res)
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if(res.body.status == 200){
              this.BankData = res.body.data;
            }
          })
      },
      addBank(){
        let self = this;
        // self.$router.push({path:`/BankUpdate/${id}`});
        window.location.href = '/#/BankAdd';

      },
      updateBank(id){
        let self = this;
        self.$router.push({path:`/BankUpdate/${id}`});
        // window.location.href = '/#/OrderOne';

      },
      deleteBank(id){
        this.$http.post(this.$store.state.basePath + '/user/bank/deleteAppBank',
          {
            id:id
          },
        ).then(
          (res) => {
            console.log(res)
            if (res.body.status == 0) {
              console.log(res)
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if(res.body.status == 200){
              this.mui.alert(res.body.msg, '提示', '确认')
              window.location.reload();
              // window.location.href = '/#/BankList';
            }
          })
      },

    },
    created(){
      this.getBankList();

    },
  }

</script>

<style scoped>

  @import '../../static/css/personalCenter.css';
</style>
