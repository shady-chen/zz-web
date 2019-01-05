<template>
  <div>
    <div class="wrap investmentRecord_page">
      <section class="container" style="background: #fff;">
        <header class="header investment_title" style="display: block;">
          <a href="/#/UserCenter">
            <i class="icon"></i>
          </a>
          <span>资金明细</span>

        </header>


          <section class="tabs_wrap" id="tabs_wrap" style="height: 100%;padding-bottom: 65px;">
          <ul class="tabs_list">
            <li class="list_item" v-for="item in MoneysteamData" style="width: 96%;margin: 10px auto;border: 1px solid #d7d7d7;padding: 0.2rem;
-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;text-align: left!important;font-size: 0.3rem;
 background: #f6f6f6;"
                @click="getOneMoneysteam(item.id)">
              <p style="text-align: left!important;font-size: 0.3rem;margin-bottom: 15px;">金额：<span
                style="color: red;font-weight: 700;">{{item.money}}</span>
              </p>


              <p style="text-align: left!important;font-size: 0.3rem;margin-bottom: 15px;">备注：
                <span>{{item.remark}}</span>
              </p>
              <p style="text-align: left!important;font-size: 0.3rem;margin-bottom: 15px;">之前：
                <span>{{item.user_money_now}}</span>
              </p>
              <p style="text-align: left!important;font-size: 0.3rem;margin-bottom: 15px;">之后：
                <span>{{item.user_money_later}}</span>
              </p>
              <p style="text-align: left!important;font-size: 0.3rem;margin-bottom: 15px;">时间：
                <span style="color: #000;">{{item.create_time}}</span>
              </p>
            </li>

          </ul>
        </section>
      </section>
    </div>
  </div>



</template>

<script>
  export default
  {
    name: 'Moneysteam',
    data () {
      return {
        MoneysteamData: {},
      }
    },

    methods:
    {
        getMoneysteamList ()
        {
          this.$http.post(this.$store.state.basePath + '/user/moneysteam/getMoneysteamByUid',
            {},
          ).then(
            (res) => {
              console.log(res)
              if (res.body.status == 0) {
                console.log(res)
                this.mui.alert(res.body.msg, '提示', '确认')
              }
              if (res.body.status == 200) {
                this.MoneysteamData = res.body.data
                this.MoneysteamData = res.body.data
              }
            })
        },
        getOneMoneysteam (id) {
          let self = this
          console.log(id + '0000000000000000000000000000')
          self.$router.push({path: `/MoneysteamOne/${id}`})
        },
    },
    created ()
    {
        this.getMoneysteamList()
        let self = this


    },


  }

</script>

<style scoped>

  @import '../../static/css/personalCenter.css';
</style>
