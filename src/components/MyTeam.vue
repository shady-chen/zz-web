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
         <div class="my-team">
          <span class="my-span0">今日我的打码：<b class="my-b">20000</b></span>

          <span class="my-span0">我的团队人数：<b class="my-b">21</b>   <a class="show-all  my-btn"> 查看详情 </a></span>

          <span class="my-span0">我的团队打码：<b class="my-b">21</b></span>

          <span class="my-span0">总的团队打码：<b class="my-b">21</b></span>

         </div>
      </section>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'MyTeam'
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
    background: #e9e9e9;
    border: 1px solid #e2e2e2;
    width: 90%;
    margin:1.28rem auto;
    padding: 0.2rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;

    font-size: 0.35rem;
  }
  .my-span0{
    display: block;
    text-align:left!important;
    margin-bottom: 15px;
  }
  .my-b{
    font-size: 0.39rem;
    color: red;

  }
  .show-all{
    float: right;
    padding: 3px;
    color: #355ae5;

  }

</style>
