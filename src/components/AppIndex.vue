<template>

  <div style="height: 100%;">
    <header class="mui-bar mui-bar-nav">
		<h1 class="mui-title">让红包飞</h1>
	</header>
    <div class="mui-card" style="margin-top: 50px;height: 100%;">
      <!--页眉，放置标题-->
      <div  style="width: 100%;padding: 10px 2px;height: 57px;text-align: left;">
        <!--<span class="mui-icon iconfont icon-wode">期数:</span>-->
        <!--<span class="mui-icon iconfont icon-wode mui-badge mui-badge-danger">{{expect}}</span>-->

           <div style="float:left;width: 60%;padding-left: 10px;color: #000;">
              <p style="margin-bottom:5px;font-size:15px;color: #000;">
                <b>当前期数：<b style="color: #c41c00;">{{expect==0?'期数异常恢复中':expect}}</b></b>
              </p>
              <p style="font-size:15px;color: #000;">
                <b>下前期数：<b style="color: #c47784;">{{expectAddOne(expect)}}</b></b>
              </p>
           </div>

          <div style="float:left;width: 40%;">
            <span class="my-span" >{{timeStr}}</span>
          </div>
      </div>
      <!--内容区-->
      <div class="mui-card-content">
        <img src="../assets/1.jpg" style="width:100%" @click="rob"/>
      </div>
      <!--页脚，放置补充信息或支持的操作-->


      <div class="mui-card-header">
        <span class="mui-icon iconfont icon-wode " style="font-size: 0.4rem;">{{expect}}期红包数量剩余
            <b class="my-count">{{count}}</b>
        </span>
        <!--<span class="mui-icon iconfont icon-wode mui-badge mui-badge-danger"></span>-->
      </div>

      <div class="mui-card-header" style="text-align: left;">
        <span class="mui-icon iconfont icon-wode " style="font-size: 0.4rem;">当前返佣比例：
            <b class="my-count" style="width: auto;padding:1px 10px;background: #0093ff;">{{bonus_money}}</b>
        </span>
      </div>

      <div class="mui-card-header" style="text-align: left;">
        <span class="mui-icon iconfont icon-wode " style="font-size: 0.4rem;">您对当前红包的状态：
            <b class="my-count" style="width: auto;padding:1px 10px;background: #ff60de;font-size: 0.3rem">{{stateStr}}</b>
        </span>
      </div>


    </div>

    <ul class="footer">
      <li class="footer-item">
        <a  class="">
          <i class="icon icon_index active"></i>
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
          <i class="icon icon_my "></i>
          <p class="icon_title">我的</p>
        </a>
      </li>
    </ul>



  </div>
</template>
<style>
  .my-span{
    display: block;
    height: 40px;
    width: 100px;
    color: #fff;
    font-size: 24px;
    background: #36b546;
    text-align: center;
    line-height: 40px;
    margin-right: 15px;
    border-radius: 8px;
    float: right;
  }
  .my-count{
    color: #fff;
    background: red;
    display: inline-block;
    height: 0.4rem;
    width: 0.4rem;
    line-height: 0.45rem;
    border-radius: 5px
  }
</style>
<script>
  export default {
    name:'appIndex',
    data() {
      return {
        count:0,
        expect:0,
        timeStr : "00:00",
        timeId:0,
        bonus_money:0.006,
        allowRob:false,//是否可以抢包
        stateStr:'加载中...'
      }
    },
    methods: {
      /**
       * 抢红包
       */
       rob(){
           this.$http.post(this.$store.state.basePath+'/index/index/robPacket',{
               expect:this.expect
           }).then((res)=>{
               if(res.body.status == 200){
                   this.mui.alert(res.body.msg);
                   this.$set(this,"count",res.body.amount);
               }else{
                   console.log(res.body)
                   this.mui.alert(res.body.msg)
               }
            });
       },
      /**
       * 获取最新一期的红包
       */
      getLastPacket(){
        this.$http.get(this.$store.state.basePath+'/index/index/isExistPacket',{}).then((res)=>{
          if(res.body.status == 0){
            this.count  = 0;
            this.expect = 0;
          }else{

            this.$set(this,"count",res.body.data.amount);
            this.$set(this,"expect",res.body.data.expect);
          }
          this.bonus_money = res.body.setting.bunus_money;
          let setting = res.body.setting;

          let todaytime = new Date(new Date().toLocaleDateString()).getTime();
          //今天0点的时间戳
          let todayTimeStamp = todaytime/1000;
          // 今天开始的时间戳
          let startime = 60 * 60 * setting.star_time + todayTimeStamp;
          let now =  Date.parse(new Date()) / 1000;
          if(now > startime)
          {
            let sends = (now - startime)%setting.how_long;
            let howLong = setting.how_long - sends

            let that = this;

            let mins = parseInt(howLong/60);
             if(mins >= 0 && mins< 10){
                 mins = "0" + mins;
               }
               let miao = howLong%60;
              if(miao >= 0 && miao< 10){
                miao = "0" + miao;
              }
               that.timeStr = mins + ":" + miao;
          }

        });
        // let ws = new WebSocket('ws://www.ww.com:2345');
        // ws.onopen = ()=>{
        //   console.log('connect success');
        //   ws.send('i am big head');
        // }
        // let that = this;
        // ws.onmessage = function(res){
        //   let data = res.data;
        //   data = JSON.parse(data)
        //   that.$set(that,"count",data.amount);
        //   that.$set(that,"expect",data.expect);
        // }
      },
      /**
       * Expect + 1
       */
      expectAddOne(str){
        let num = Number(str);
        if(!num){
          return "正在恢复中......."
        }
        return num + 1;
      },
      /**
       * 用户是否登录
       */
       isLogin(){
        this.$http.get(this.$store.state.basePath+'/user/user/getUser').then((res)=>{
          if(!res.body){
            window.location.href = '/#/';
          }
          if(res.body.phone){
              if(res.body.state == 2){
                 this.stateStr = "禁止抢红包";
              }else{
                this.stateStr = "可以抢红包";
              }
           }
        });
      }
    },
    created(){
      this.isLogin();
      let that = this;
      this.timeId = setInterval(function(){
        that.getLastPacket();

      },1000);
    },
    destroyed(){
      clearInterval(this.timeId);
    }
  }
</script>
