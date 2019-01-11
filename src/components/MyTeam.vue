<template>
  <div>
    <div class="wrap investmentRecord_page">
      <section class="container" style="background: #fff;">
        <header class="header investment_title" style="display: block;">
          <a href="/#/UserCenter">
            <i class="icon"></i>
          </a>
          <span>我的团队</span>
        </header>
         <div class="my-team" style="">
          <span class="my-span0">累计今天金额：<b class="my-b">{{data.self_steam}}</b></span>

          <span class="my-span0">我的团队人数：<b class="my-b">{{data.self_sons}}</b>   <a href="/#/showAllSons" class="show-all  my-btn"> 查看详情 </a></span>

          <span class="my-span0">我的团队金额：<b class="my-b">{{data.team_total}}</b></span>

          <span class="my-span0">总的团队金额：<b class="my-b">{{Number(data.team_total) +Number(data.self_steam) }}</b></span>

         </div>
      </section>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'MyTeam',
    data(){
      return {
        data:{},
      }
    },
    methods:{
      getMyteam(){
        this.$http.get(this.$store.state.basePath + '/user/user/getUserByInvitationCode').then(
          (res) => {

            this.data = res.body;

          })
      }
    },
    created(){
      this.getMyteam();
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
  .my-team{
    background:url('../assets/team5.jpg') 100% 100%;
    background-size: cover;
    border: 1px solid #e2e2e2;
    width: 90%;
    margin:1.28rem auto;
    padding: 0.8rem 0.33rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;

    font-size: 0.35rem;
  }
  .my-span0{
    display: block;
    text-align:left!important;
    margin-bottom: 15px;
    color: #1833ff;
    font-weight: 700;
  }
  .my-b{
    font-size: 0.39rem;
    color: red;

  }
  .show-all{
    float: right;
    padding: 3px;
    color: #3300e5;

  }

</style>
