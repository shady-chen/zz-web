<template>
  <div class="wrap investmentRecord_page">
    <section class="container" style="background: #fff;">
      <header class="header investment_title" style="display: block;">
        <a href="/#/UserCenter">
          <i class="icon"></i>
        </a>
        <span>资金明细</span>

      </header>

      <!--<section class="tabs">-->
        <!--<ul class="tabs_sub_nav clearFix" >-->
          <!--<li class="list_item"><a href="javascript:;"></a></li>-->
          <!--<li class="list_item"><a href="javascript:;">标题</a></li>-->
          <!--<li class="list_item"><a href="javascript:;"></a></li>-->
        <!--</ul>-->
        <!--&lt;!&ndash;<div class="top_bar"></div>&ndash;&gt;-->
      <!--</section>-->

      <section class="tabs_wrap" id="tabs_wrap">
        <ul class="tabs_list">
          <li class="list_item" v-for="item in MoneysteamData" style="font-size: 20px;text-align: left" @click="getOneMoneysteam(item.id)">{{item.remark}}</li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Moneysteam',
    data(){
      return{
        MoneysteamData:{},
      }
    },
    methods:{
      getMoneysteamList () {
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
              this.MoneysteamData = res.body.data;
            }
          })
      },
      getOneMoneysteam (id) {
        let self = this;
        console.log(id + '0000000000000000000000000000')
        self.$router.push({path: `/MoneysteamOne/${id}`});
      },
    },
    created () {
      this.getMoneysteamList();
    }
  }
</script>

<style scoped>

</style>
