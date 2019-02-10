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
          <li class="active list_item"><a href="/#/OrderList2">审核中<span></span></a></li>
          <li class="list_item"><a href="/#/OrderList3">已审核<span></span></a></li>
        </ul>

      </section>
      <section class="tabs_wrap" id="tabs_wrap">
        <ul class="tabs_list">
          <li class="list_item " id="liste" v-for="item in orderData" style="
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
    background: #015fa3!important;"
              @click="getOneOrder(item.id)"
          >
            <p style="text-align: left!important;" class="my-p2"> 订单时间: {{item.create_time}}</p>
            <p style="text-align: left!important;" class="my-p2"> 订单金额: {{item.money}}</p>
            <p style="text-align: left!important;" class="my-p2"> 任务期数：{{item.packet_expect}}</p>
            <p style="text-align: left!important;" class="my-p2"> 订单序号：{{item.id}}</p>


            <img src="../assets/passing.png" width='100px' alt="" class="rjgm-status">



          </li>

        </ul>
      </section>


      <div style="position:fixed;bottom: 0.95rem;
                  left: 0;
                  width: 100%;
                  /*background:#000;*/
                  height: 0.8rem;
                  font-size: 0.3rem;
                  font-weight: 700;
                  line-height: 0.8rem;
                  padding: 0 20px;">
        累计条数：{{count}}
        &nbsp;&nbsp;&nbsp;&nbsp;
        累计金额：<b style="color: red;">￥{{total_money}}</b>
        <span></span>
      </div>

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
    name: 'OrderList2',
    data(){
      return{
        orderData:{},
        count:0,
        total_money:0,
      }
    },
    methods:{
      getOrderList(){
        this.$http.post(this.$store.state.basePath + '/user/date/getOrder',
          {
            status:2
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
              this.count = this.orderData.length;
              for(let i = 0; i<this.count;i++){
                this.total_money += Number(this.orderData[i].money);
              }
            }
          })
      },

      getOneOrder(id){
        let self = this;
          self.$router.push({path:`/OrderOne/${id}`});
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
