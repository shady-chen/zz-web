<template>

  <div class="wrap investmentRecord_page">
    <section class="container" style="background: #fff;">
      <header class="header investment_title" style="display: block;">
        <a href="/#/UserCenter">
          <i class="icon"></i>
        </a>

        <span>提现方式列表</span>
      </header>
      <button style="margin-bottom:10px;background: #0197ff;margin-top: 66px;z-index: 100;" class="mt-btn"
              @click="addBank()">添加银行卡
      </button>
      <section class="tabs_wrap" id="tabs_wrap" style="height: 100%;padding-bottom:114px;margin-top: 65px;">
        <ul class="tabs_list">
          <li class="item_list2" v-for="item in BankData" style="">
            <p style="text-align: left!important;margin-bottom: 15px;color: #000;">
              <span style="font-size: 0.3rem;color: #000;">账号姓名：<b style="color: red;font-size: 0.4rem;">{{item.real_name}}</b></span>

            </p>
            <p style="text-align: left!important;margin-bottom: 15px;color: #000;">
              <span style="margin-right:10px;font-size: 0.3rem;color: #000;">有开户行：{{item.bank_where}}</span>
            </p>

            <p style="text-align: left!important;margin-bottom: 15px;">
              <span style="font-size: 0.3rem;color: #000;">账号类型：{{item.bank_which}}</span>
            </p>
            <p style="text-align: left!important;margin-bottom: 5px;overflow: hidden">

              <span style="font-size: 0.3rem;color: #000;">数字账号：{{item.bank_num}}</span>
            </p>

            <div style="text-align: left!important;margin-bottom: 5px;overflow: hidden;margin-top: 15px;">
              <button style="float: left;margin-left:10px;background: #13ad57;" class="mt-btn"
                      @click="updateBank(item.id)">修改
              </button>
              <button style="float: right;margin-right:10px;background: #b52000;" class="mt-btn"
                      @click="deleteBank(item.id)">删除
              </button>
            </div>
          </li>
        </ul>
      </section>






    </section>
  </div>
</template>

<script>
  export default {
    name: 'BankList',
    data () {
      return {
        BankData: {},
      }
    },
    methods: {

      getBankList () {
        this.$http.post(this.$store.state.basePath + '/user/bank/appBanksList',
          {},
        ).then(
          (res) => {
            if (res.body.status == 0) {
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if (res.body.status == 200) {
              this.BankData = res.body.data
            }
          })
      }
      ,
      addBank () {
        let self = this
        window.location.href = '/#/BankAdd'

      }
      ,
      updateBank (id) {
        let self = this
        self.$router.push({path: `/BankUpdate/${id}`})

      }
      ,
      deleteBank (id) {
        this.$http.post(this.$store.state.basePath + '/user/bank/deleteAppBank',
          {
            id: id
          }).then((res)=>{
          if (res.body.status == 200)
          {
            this.BankData = res.body.data
          }
        })
      }
      ,
      addBank () {
        window.location.href = '/#/BankAdd'

      }
      ,
      updateBank (id) {
        let self = this
        self.$router.push({path: `/BankUpdate/${id}`})

      }
      ,
      deleteBank (id) {
        this.$http.post(this.$store.state.basePath + '/user/bank/deleteAppBank',
          {
            id: id
          },
        ).then((res) => {
          if (res.body.status == 0) {
            this.mui.alert(res.body.msg, '提示', '确认')
          }
          if (res.body.status == 200) {
            this.mui.alert(res.body.msg, '提示', '确认')
            window.location.reload()
            if (res.body.status == 200) {
              this.mui.alert(res.body.msg, '提示', '确认')
              window.location.reload()
            }
          }
        })
      },

    }
    ,
    created () {
      this.getBankList()
    }
  }

</script>

<style scoped>

  @import '../../static/css/personalCenter.css';


  .item_list2 {
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
    margin-bottom: 15px;
    margin-top: 3px;
  }


</style>
