<template>
  <div class="wrap investmentRecord_page">
    <section class="container" style="background: #fff;">
      <header class="header investment_title" style="display: block;">
        <a href="/#/UserCenter">
          <i class="icon"></i>
        </a>
        <span>通知记录</span>

      </header>

      <section class="tabs">
        <ul class="tabs_sub_nav clearFix" >
        <li class="list_item"><a href="javascript:;"></a></li>
        <li class="list_item"><a href="javascript:;">标题</a></li>
        <li class="list_item"><a href="javascript:;"></a></li>
        </ul>
        <!--<div class="top_bar"></div>-->
      </section>

      <section class="tabs_wrap" id="tabs_wrap">
        <ul class="tabs_list">
          <li class="list_item" v-for="item in NoticeData" style="font-size: 20px;text-align: left" @click="getOneNotice(item.id)">{{item.title}}</li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'NoticeList',
    data(){
      return{
        NoticeData:{}
      }
    },
    methods: {
      getNoticeList () {
        this.$http.post(this.$store.state.basePath + '/user/notice/getNoticeByUid',
          {},
        ).then(
          (res) => {
            console.log(res)
            if (res.body.status == 0) {
              console.log(res)
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if (res.body.status == 200) {
              this.NoticeData = res.body.data;
            }
          })
      },

      getOneNotice (id) {
        let self = this;
        // console.log(id + '0000000000000000000000000000')
        self.$router.push({path: `/NoticeOne/${id}`});
        // window.location.href = '/#/OrderOne';

      }
    },
    created(){
      this.getNoticeList();

    },
  }
</script>

<style scoped>
  @import '../../static/css/personalCenter.css';

</style>
