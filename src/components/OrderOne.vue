<template>
  <div>
    <div class="modifypassword_title" style="display:block;">
      <a href="/#/OrderList">
        <i class="icon"></i>
      </a>
      <span>订单详情</span>
    </div>
    <div>
      <p style="font-size: 0.3rem;color: #000;margin-bottom: 15px;margin-top: 15px;">订单信息</p>
      <ul class="tabs_list">
        <li class="list_item" style="width: 96%;margin: 0 auto;border: 1px solid #d7d7d7;padding: 0.2rem;
-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;text-align: left!important;font-size: 0.3rem;
 background: rgb(230, 230, 230)">
          <p style="text-align: left!important;margin-bottom: 15px;color: #000;">
            <span style="font-size: 0.3rem;color: #000;">总金额：<b style="color: red;font-size: 0.4rem;">{{orderData.money}}</b></span>
            <span style="float: right;margin-right:10px;font-size: 0.3rem;color: #000;">{{orderData.create_time}}</span>
          </p>
          <p style="text-align: left!important;margin-bottom: 15px;">
            <span style="font-size: 0.3rem;color: #000;">订单号：{{orderData.id}}</span>
            <span
              style="float: right;margin-right:10px;font-size: 0.3rem;color: #000;">期数：{{orderData.packet_expect}}</span>
          </p>
          <p style="text-align: left!important;margin-bottom: 5px;overflow: hidden">
              <span style="font-size: 0.3rem;color: #000;margin-top: 8px;display: block;float:left;">现状态：<b
                style="color: green;">{{byStatusReturnStr(orderData.status)}}</b>
              </span>
          </p>

        </li>
      </ul>
      <p style="font-size: 0.3rem;color: #000;margin-bottom: 15px;margin-top: 15px;">系统银行卡</p>
      <ul class="tabs_list">
        <li class="list_item" style="width: 96%;margin: 0 auto;border: 1px solid #d7d7d7;padding: 0.2rem;
-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;text-align: left!important;font-size: 0.3rem;
 background: rgb(230, 230, 230)">
          <p style="text-align: left!important;margin-bottom: 15px;color: #000;">
            <span style="font-size: 0.3rem;color: #000;">户主姓名：<b style="color: red;font-size: 0.4rem;">{{orderData.sys_name}}</b></span>

          </p>

          <p style="text-align: left!important;margin-bottom: 15px;color: #000;">
            <span style="margin-right:10px;font-size: 0.3rem;color: #000;">开户银行：{{orderData.sys_bank_where}}</span>
          </p>
          <p style="text-align: left!important;margin-bottom: 15px;">

            <span style="font-size: 0.3rem;color: #000;">银行类型：{{orderData.sys_bank_which}}</span>
            <!--<span style="float: right;margin-right:10px;font-size: 0.3rem;color: #000;">期数：{{orderData.packet_expect}}</span>-->
          </p>
          <p style="text-align: left!important;margin-bottom: 5px;overflow: hidden">
              <span style="font-size: 0.3rem;color: #000;margin-top: 8px;display: block;float:left;">银行账号：<b
                style="color: green;">{{orderData.sys_bank_num}}</b>
             </span>
          </p>

        </li>
      </ul>

      <p style="text-align: left!important;margin-bottom: 5px;margin-left: 10px;margin-top: 15px;overflow: hidden">
        <span style="font-size: 0.3rem;color: #000;margin-top: 8px;display: block;float:left;">备注：</span>

        <textarea name="remark" placeholder="请输入你此订单的备注信息" v-model="remark" id="" cols="20" rows="10"
                  style="width: 80%;height: 40px;"></textarea>
      </p>
      <form @submit.prevent="upload" method="post" enctype="multipart/form-data"
            style="font-size: 0.3rem;color: #000;margin-bottom: 15px;margin-top: 15px;">
        <div class="img-wrap" :class="{ord:flag}" style="">
          {{str}}
        </div>
        <input type="file" name="img_file" v-on:change="onChange($event)"
               style="position:relative;z-index: 22;top: -41px;opacity: 0">
        <input type="hidden" name="order_id" value="orderData.id">

        <button v-show="flag" type="submit" style="background: #0197ff;color: #fff; display: block;margin:15px auto;" class="mt-btn">
          上传凭证
        </button>
      </form>

    </div>


  </div>
</template>
<style>
  .img-wrap {
    position: relative;
    border: 1px solid #00acff;
    width: 80%;
    margin-left: 10%!important;
    padding: 13px 0!important;
    background: #00acff;
    color: #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    z-index: 1;
  }
  .ord{
    background: #ff2d27;
    border: 1px solid #ff2d27;
  }
</style>
<script>
  export default {
    name: 'OrderOne',
    data () {
      return {
        orderData: {},
        picture: {},
        result: '',
        remark: '',
        str: '请上传您的转账凭证',
        flag: false,
      }
    },
    methods: {
      getOne () {
        let self = this
        // console.log(self.$route.params.id)
        this.$http.post(this.$store.state.basePath + '/user/date/oneOrder',
          {
            order_id: self.$route.params.id
          },
        ).then(
          (res) => {
            console.log(res)
            if (res.body.status == 0) {
              console.log(res)
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if (res.body.status == 200) {
              this.orderData = res.body.data
            }
          })
      },
      byStatusReturnStr (status) {
        let str = '未知'
        switch (status) {
          case 0:
            str = '已过期'
            break
          case 1:
            str = '未付款'
            break
          case 2:
            str = '审核中'
            break
          case 3:
            str = '审核通过'
            break
          case 4:
            str = '审核未通过'
            break
          default:
            str = '未知状态'
            break
        }
        return str
      },
      onChange: function (event) {
        this.picture = event.target.files[0] // get input file object
        console.log(this.picture)
        this.str = '你已上传，请提交审核'
        this.flag = true
      },
      upload: function () {
        var that = this
        var formData = new FormData()
        formData.append('img_file', this.picture)
        formData.append('order_id', this.orderData.id)
        formData.append('remark', this.remark)

        // specify Content-Type, with formData as well
        this.$http.post(this.$store.state.basePath + '/user/date/changeOrderState', formData, {
          headers: {'Content-Type': 'multipart/form-data'}
        }).then(function (res) {
          // res.json().then(function (result) {
          //   that.result = result.info;
          //   console.log(that.result);
          // });
          // }, function (res) {
          //   console.log(res.body);
          if (res.body.status == 0) {
            console.log(res)
            this.mui.alert(res.body.msg, '提示', '确认')
          }
          if (res.body.status == 200) {
            this.mui.alert(res.body.msg, '提示', '确认')
            window.location.href = '/#/OrderList'
          }
        })
      }
    },
    created () {
      this.getOne()
    }

  }
</script>

<style scoped>
  @import '../../static/css/personalCenter.css';

</style>
