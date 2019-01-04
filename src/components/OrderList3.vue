<template>

  <div class="wrap investmentRecord_page">
    <section class="container" style="background: #fff;">
      <header class="header investment_title" style="display: block;">
        <a href="/#/UserCenter">
          <i class="icon"></i>
        </a>
        <span>订单记录</span>

      </header>
      <section class="tabs">
        <ul class="tabs_nav clearFix" id="tabs_nav" style="text-align: center">
          <li class="list_item" style="text-align: center"><a href="/#/OrderList">待付款<span ></span></a></li>
          <li class="list_item"><a href="/#/OrderList2">审核中<span></span></a></li>
          <li class="active list_item"><a href="/#/OrderList3">已审核<span></span></a></li>
        </ul>

      </section>
      <section class="tabs_wrap" id="tabs_wrap">
        <ul class="tabs_list">
          <li class="list_item" v-for="item in orderData" style="width: 96%;margin:15px auto;border: 1px solid #d7d7d7;padding: 0.2rem;
-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;text-align: left!important;font-size: 0.3rem;
 background: #f6f6f6">
            <p style="text-align: left!important;margin-bottom: 15px;color: #000;">
              <span style="font-size: 0.3rem;color: #000;">总金额：<b style="color: red;font-size: 0.4rem;">{{item.money}}</b></span>
              <span style="float: right;margin-right:10px;font-size: 0.3rem;color: #000;">{{item.create_time}}</span>
            </p>
            <p style="text-align: left!important;margin-bottom: 15px;">

              <span style="font-size: 0.3rem;color: #000;">订单号：{{item.id}}</span>
              <span style="float: right;margin-right:10px;font-size: 0.3rem;color: #000;">期数：{{item.packet_expect}}</span>
            </p>
            <p style="text-align: left!important;margin-bottom: 5px;overflow: hidden">
              <span style="font-size: 0.3rem;color: #000;margin-top: 8px;display: block;float:left;">现状态：
               <b style="color: green;">{{byStatusReturnStr(item.status)}}</b>
              </span>
              <!--<button style="float: right;margin-right:10px;background: #0197ff;" class="mt-btn">付款</button>-->
            </p>


          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'OrderList3',
    data(){
      return{
        orderData:{}
      }
    },
    methods:{
      getOrderList(){
        this.$http.post(this.$store.state.basePath + '/user/date/getOrder',
          {
            state:4,
            status:3
          },
        ).then(
          (res) => {
            console.log(res)
            if (res.body.status == 0) {
              console.log(res)
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if(res.body.status == 200){
              this.orderData = res.body.data;
            }
          })
      },

      getOneOrder(id){
        let self = this;
        console.log(id+'0000000000000000000000000000')
        self.$router.push({path:`/OrderOne/${id}`});
        // window.location.href = '/#/OrderOne';

      },
      byStatusReturnStr(status){
        let str = '未知'
        switch (status) {
          case 0:
            str = '已过期'
            break;
          case 1:
            str = '未付款'
            break;
          case 2:
            str = '审核中'
            break;
          case 3:
            str = '审核通过'
            break;
          case 4:
            str = '审核未通过'
            break;
          default:
            str = '未知状态'
            break;
        }
        return str;
      }
    },
    created(){
      this.getOrderList();

    },
  }

</script>

<style scoped>

  @import '../../static/css/personalCenter.css';
</style>
