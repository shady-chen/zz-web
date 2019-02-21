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
        <li class="list_item " id="liste" style="
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
        >
          <p style="text-align: left!important;" class="my-p2"> 订单时间: {{orderData.create_time}}</p>
          <p style="text-align: left!important;" class="my-p2"> 订单金额: {{orderData.money}}</p>
          <p style="text-align: left!important;" class="my-p2"> 任务期数：{{orderData.packet_expect}}</p>
          <p style="text-align: left!important;" class="my-p2"> 订单序号：{{orderData.id}}</p>

          <img src="../assets/unfinish.png" width='100px' alt="" class="rjgm-status">

        </li>

      </ul>

      <p style="font-size: 0.3rem;color: #000;margin-bottom: 15px;margin-top: 15px;">系统银行卡</p>


      <ul class="tabs_list">
        <li class="list_item"
            style="
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
    background: #00477b!important;">

          <img v-if="orderData.bank_which!='支付宝'" src="../assets/bank.jpg" alt="" width="100px" class="bak-logo">
          <img v-if="orderData.bank_which=='支付宝'" src="../assets/alipay.jpg" alt="" width="100px" class="bak-logo">

          <div class="right-b">
            <p class="which-b"
               style="text-align: left!important;">{{orderData.sys_bank_which}}&nbsp;{{orderData.sys_bank_where?('('+orderData.sys_name+')'):''}}</p>
            <p class="which-b"
               style="text-align: left!important;">
              {{orderData.sys_bank_where?orderData.sys_bank_where:orderData.sys_name}}</p>
            <p class="which-b"
               style="text-align: left!important;">{{orderData.sys_bank_num}}</p>
          </div>


        </li>
      </ul>

      <button type="button"
              class="cpbtn"
              v-clipboard:copy="orderData.sys_bank_num"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError">复制银行卡号
      </button>

      <button type="button"
              class="cpbtn"
              v-clipboard:copy="orderData.sys_name"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError">复制姓名
      </button>

      <div style="text-align: left!important;width: 90%;;overflow: hidden;margin:0 auto;">
        <span style="
        font-size: 0.3rem;
        display: block;
        width: 15%;
        text-align: center;
        background:#ddd;
        height: 40px;
        line-height: 40px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        color: #6d6d6d;
        font-weight: 700;
        float:left;">备注</span>

        <textarea name="remark" placeholder="如有需要，请输入订单的备注信息" v-model="remark" id="" cols="20" rows="10"
                  style="width: 85%;height: 40px;font-size: 0.3rem;"></textarea>
      </div>
      <form @submit.prevent="upload" method="post" enctype="multipart/form-data"
            style="font-size: 0.3rem;color: #000;margin-bottom: 15px;margin-top: -15px;">
        <div class="img-wrap" v-show="!flag" :class="{ord:flag}" style="">
          {{str}}
        </div>
        <input type="file" name="img_file" id="file" v-on:change="onChange($event)"
               style="position:relative;z-index: 22;top: -41px;opacity: 0">
        <input type="hidden" name="order_id" value="orderData.id">
        <img src="" id="img" alt="" width="200px" height="100px">
        <button v-show="flag" type="submit" style="background: #0197ff;color: #fff; display: block;margin:15px auto;"
                class="mt-btn">
          上传凭证
        </button>
      </form>

    </div>


  </div>
</template>
<style>
  .cpbtn {
    padding: 5px 10px!important;
    float: left;
    margin-left: 18px!important;
    background: #015fa3;
    color: #fff;
    margin-bottom: 15px!important;
  }

  .img-wrap {
    position: relative;
    border: 1px solid #00acff;
    width: 80%;
    margin-left: 10% !important;
    padding: 13px 0 !important;
    background: #00acff;
    color: #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    z-index: 1;
  }

  .show-details-rj {
    position: absolute;
    right: 10px;
    top: 12px;
  }

  .rjgm-status {
    position: absolute;
    right: 10px;
    bottom: 12px;
    color: #0c9fff;
    font-weight: 900;
    font-size: 0.3rem;
  }

  .my-p2 {
    height: 0.4rem;
    line-height: 0.4rem;
    color: #ddd;
    font-size: 0.28rem;
    margin-top: 10px !important;
  }

  .delete-b {
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

  .right-b {
    float: left;
    text-align: left !important;
  }

  .which-b {
    font-size: 0.32rem;
    color: #fff;
    text-indent: 1em;
    font-weight: 900;
    line-height: 0.5rem;
    height: 0.5rem;
    text-align: left !important;
  }

  .tabs_list > li {
    overflow: hidden;
    position: relative;
  }

  .bak-logo {
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
    text-align: left !important;
    font-size: 0.3rem;
    line-height: 0.8rem;
    background: #fff !important;
    text-indent: 2em;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;

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
        src: '',
      }
    },
    methods: {
      onCopy: function (e) {
        this.mui.alert('复制成功！', '提示', '确认')
      },
      onError: function (e) {
        console.log(e)
        alert('Failed to copy texts')
      },
      getOne () {
        let self = this
        this.$http.post(this.$store.state.basePath + '/user/date/oneOrder',
          {
            order_id: self.$route.params.id
          },
        ).then(
          (res) => {

            if (res.body.status == 0) {
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
        //this.src = this.picture.name;
        this.str = '你已上传，请提交审核'
        this.flag = true

        let flObj = document.getElementById('file')
        let file = flObj.files[0]                 //因为每次只上传了一张图片，所以获取到flObj.files[0];    

        let fReader = new FileReader()

        fReader.readAsDataURL(file)

        fReader.onload = function (e) {
          document.getElementById('img').src = this.result
        }

      },
      upload: function () {
        var that = this
        var formData = new FormData()
        formData.append('img_file', this.picture)
        formData.append('order_id', this.orderData.id)
        formData.append('remark', this.remark)

        this.$http.post(this.$store.state.basePath + '/user/date/changeOrderState', formData, {
          headers: {'Content-Type': 'multipart/form-data'}
        }).then(function (res) {
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
