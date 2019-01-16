<template>

  <div style="height: 100%;">

    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">首页</h1>
    </header>


    <div class="mui-card" style="margin-top: 50px;height: 100%;">

      <div class="mui-card-content hongbao" style="">

        <div class="my-div">

            <div class="mytop">
              <img src="../assets/img/icon_reward1.png" alt="" style="width: 50px;position:absolute;left: 20%;top: 15px;">
              <span class="my-sop">投呗体验金</span>
            </div>

            <div class="my-time">
              距离下一个体验金任务还有{{timeStr}}
            </div>

            <div class="shengyu">任务数量: {{count}}</div>

            <div>
              <img src="../assets/img/jifen.png" alt="">
            </div>

           <div class="lingqu" @click="rob()">
              领取
           </div>

            <!--最下面的-->
            <div class="bottom-div">


                <div class="left-div">
                  <p class="my-2-title">
                    任务期数（天）
                  </p>
                  <p class="content-2" >
                    {{expect==0?'加载中...':expect}}
                    <!--20180111012-->
                  </p>
                </div>

                <div class="left-div">
                  <p class="my-2-title">
                    奖励比例（1）
                  </p>
                  <p class="content-2">
                    {{bonus_money}}
                  </p>
                </div>
                <div class="left-div">
                  <p class="my-2-title">
                    任务总量（￥）
                  </p>
                  <p class="content-2">
                    {{per_total}}
                  </p>
                </div>
              </div>
        </div>
      </div>

    </div>


    <ul class="footer">
      <li class="footer-item">
        <a class="">
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
<style scoped>
  .lingqu{
    width: 100px;
    height: 100px;
    text-align: center;
    margin:50px auto;
    color:  #fff;
    line-height: 100px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background: #d84200;
    font-size: 0.4rem;
    font-weight: 700;
  }
  .my-time{
    color: #f5f5f5;
    font-size: 0.34rem;
    font-weight: 700;
  }
  .my-sop{
    height: 80px;
    line-height: 80px;
    color: #b63700;
    font-size: 0.4rem;
    width: 100%;
    display: block;
    text-align: center;
    float: left;
    font-weight: 700;
  }
  .mytop{
    position: relative;
    height: 80px;
    width: 100%;
    overflow: hidden;
  }
  .my-2-title{
    margin-top: 20px;
    color: #c9c9c9;
    font-size: 0.3rem;
    font-weight: 700;
  }
  .content-2{
    margin-top: 20px;
    color: #E5E5E5;
    font-size: 0.3rem;
    font-weight: 700;
  }
  .bottom-div{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    /*background: #000;*/
  }
  .left-div{
    float: left;
    width: 33.333333%;
    box-sizing: border-box;
    height: 100%;
  }
  .shengyu{
    /*position: absolute;*/
    /*top: 115px;*/
    width: 50%;
    /*left: 35%;*/
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: #f64301;
    color: #fff;
    font-size: 0.4rem;
    font-weight: 700;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    margin: 15px auto;
  }
  .my-title{
    color: #fff;
    /*position: absolute;*/
    top: 75px;
    text-align: center;
    width: 100%;
    font-weight: 400;
  }
  .my-div{
    width: 100%;
    height: 100%;
    /*background: -webkit-linear-gradient(left, #fe8811, #ff6c13); !* Safari 5.1 - 6.0 *!*/
    /*background: -o-linear-gradient(right, #fe6a00, #ff5001); !* Opera 11.1 - 12.0 *!*/
    /*background: -moz-linear-gradient(right, #fe6a00, #ff5001); !* Firefox 3.6 - 15 *!*/
    /*background: linear-gradient(to right, #fea515, #e54c01); !* 标准的语法 *!*/
    background: url('../assets/img/kuanga.png');
    position: relative;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }


  .hongbao {
    position: relative;
    background-size: cover;
    height: 11rem;
    width: 100%;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    overflow: hidden;
  }

  body {
    background: #e7e7e7;
  }

  .my-span {
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

  .my-count {
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
    name: 'appIndex',
    data () {
      return {
        count: 0,
        expect: 0,
        timeStr: '00:00',
        timeId: 0,
        bonus_money: 0.006,
        per_total: 1000,
        allowRob: false,//是否可以抢包
        stateStr: '加载中...'
      }
    },
    methods: {
      /**
       * 抢红包
       */
      rob () {
        this.$http.post(this.$store.state.basePath + '/index/index/robPacket', {
          expect: this.expect
        }).then((res) => {
          if (res.body.status == 200) {
            this.mui.alert('你已成功抢到￥ ' + res.body.money)
            this.$set(this, 'count', res.body.amount)
          } else {
            console.log(res.body)
            this.mui.alert(res.body.msg)
          }
        })
      },
      /**
       * 获取最新一期的红包
       */
      getLastPacket () {
        this.$http.get(this.$store.state.basePath + '/index/index/isExistPacket', {}).then((res) => {
          if (res.body.status == 0) {
            this.count = 0
            this.expect = 0
          } else {

            this.$set(this, 'count', res.body.data.amount)
            this.$set(this, 'expect', res.body.data.expect)
          }
          this.bonus_money = res.body.setting.bunus_money
          this.per_total = res.body.setting.per_total
          let setting = res.body.setting

          let todaytime = new Date(new Date().toLocaleDateString()).getTime()
          //今天0点的时间戳
          let todayTimeStamp = todaytime / 1000
          // 今天开始的时间戳
          let startime = 60 * 60 * setting.star_time + todayTimeStamp
          let now = Date.parse(new Date()) / 1000
          if (now > startime) {
            let sends = (now - startime) % setting.how_long
            let howLong = setting.how_long - sends

            let that = this

            let mins = parseInt(howLong / 60)
            if (mins >= 0 && mins < 10) {
              mins = '0' + mins
            }
            let miao = howLong % 60
            if (miao >= 0 && miao < 10) {
              miao = '0' + miao
            }
            that.timeStr = mins + ':' + miao
          }

        })
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
      expectAddOne (str) {
        let num = Number(str)
        if (!num) {
          return '加载中...'
        }
        return num + 1
      },
      /**
       * 用户是否登录
       */
      isLogin () {
        this.$http.get(this.$store.state.basePath + '/user/user/getUser').then((res) => {
          if (!res.body) {
            window.location.href = '/#/'
          }
          if (res.body.phone) {
            if (res.body.state == 2) {
              this.stateStr = '禁止抢红包'
            } else {
              this.stateStr = '可以抢红包'
            }
          }
        })
      }
    },
    created () {
      this.isLogin()
      let that = this
      this.timeId = setInterval(function () {
        that.getLastPacket()

      }, 2000)
    },
    destroyed () {
      clearInterval(this.timeId)
    }
  }
</script>
