<template>
  <div>
    <div class="wrap investmentRecord_page">
      <section class="container" style="background: #fff;">
        <header class="header investment_title" style="display: block;">
          <a href="/#/UserCenter">
            <i class="icon"></i>
          </a>
          <span>我的团队列表</span>

        </header>


        <section class="tabs_wrap" id="tabs_wrap" style="height: 100%;padding-bottom: 65px;">
          <ul class="tabs_list">
            <li class="list_item" v-for="item in data" style="width: 96%;margin: 10px auto;border: 1px solid #d7d7d7;padding: 0.2rem;
-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;text-align: left!important;font-size: 0.3rem;
 background: #f6f6f6;"
                @click="getOneMoneysteam(item.id)">
              <p style="text-align: left!important;font-size: 0.3rem;margin-bottom: 15px;">用户名号码：<span
                style="color: red;font-weight: 700;">{{item.phone}}</span>
              </p>

              <p style="text-align: left!important;font-size: 0.3rem;margin-bottom: 15px;">今日总金额：
                <span>{{item.today_total}}</span>
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
    name: 'showAllSons',
    data () {
      return {
        data: {},
      }
    },

    methods:
      {
        getSons ()
        {
          this.$http.get(this.$store.state.basePath + '/user/user/getSons',
            {},
          ).then(
            (res) => {
                this.data = res.body;
            })
        },

      },
    created ()
    {
      this.getSons()



    },
  }
</script>

<style scoped>

  @import '../../static/css/personalCenter.css';
</style>

