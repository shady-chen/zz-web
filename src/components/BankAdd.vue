<template>
  <div>
    <div class="modifypassword_title" style="display:block;">
      <a href="/#/BankList">
        <i class="icon"></i>
      </a>
      <span>银行卡添加</span>
    </div>
    <div>
      <ul class="tabs_list">
        <li class="item-list2">
          <div class="my-divs">
            <span class="my-span">账户姓名：</span>

            <input type="text" name="remark" class="my-input"
                   v-model="real_name" placeholder="张三、李四"/>

          </div>
          <div class="my-divs">
            <span class="my-span">数字账号：</span>
            <input type="text" name="remark" class="my-input" v-model="bank_num"
                   placeholder="6228481789/ 123345@qq.com / 13800080000"/>

          </div>
          <div class="my-divs">
            <span class="my-span">账户类型：</span>

            <input type="text" name="remark" class="my-input" v-model="bank_which" placeholder="支付宝/建设银行"/>


          </div>
          <div class="my-divs">
            <span class="my-span">有开户行： </span>
            <input type="text" name="remark" class="my-input" v-model="bank_where"
                   placeholder="支付宝可不用填写此栏，银行卡请写 如上海第三分行"/>

          </div>

          <div class="my-divs">
            <button type="submit"
                    style="background: #0197ff;color: #fff;margin:0 auto;display: block; width: 50%;height: 1rem;font-size: 0.5rem;"
                    class="mt-btn" @click="add">添加
            </button>
          </div>
        </li>
      </ul>

    </div>


  </div>
</template>

<script>
  export default {
    name: 'BankAdd',
    data () {
      return {
        bankData: {},
        real_name: '',
        bank_where: '',
        bank_which: '',
        bank_num: '',
      }
    },

    methods:
      {
        add () {

          this.$http.post(this.$store.state.basePath + '/user/bank/addAppBanks',
            {
              real_name: this.real_name,
              bank_where: this.bank_where,
              bank_which: this.bank_which,
              bank_num: this.bank_num,
              real_name: this.real_name,
              bank_where: this.bank_where,
              bank_which: this.bank_which,
              bank_num: this.bank_num,
            }).then
          (
            (res) => {

              if (res.body.status == 0) {

                this.mui.alert(res.body.msg, '提示', '确认')
              }
              if (res.body.status == 200) {
                window.location.href = '/#/BankList'
                if (res.body.status == 200) {
                  window.location.href = '/#/BankList'

                }
              }
            })
        },

      }
  }

</script>

<style scoped>
  @import '../../static/css/personalCenter.css';

  .item-list2 {
    width: 96%;
    margin: 0 auto;
    border: 1px solid #d7d7d7;
    padding: 0.2rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    text-align: left !important;
    font-size: 0.3rem;
    background: #f6f6f6;
    margin-top: 15px;
  }

  .my-input {
    width: 260px;
    height: 0.7rem;
    margin-top: 3px;
    text-align: left !important;
    text-indent: 5px;
    font-size: 0.3rem;
    border: 1px solid #afafaf;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .my-span {
    font-size: 0.3rem;
    color: #000;

  }

  .my-divs {
    text-align: left !important;
    margin-bottom: 25px;
    color: #000;
  }
</style>
