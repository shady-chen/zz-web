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
            <li class="list_item"  v-for="item in NoticeData" style="width: 96%;margin: 10px auto;border: 1px solid #d7d7d7;padding: 0.2rem;
-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;text-align: left!important;font-size: 0.3rem;
 background: #f6f6f6;"
                @click="getOneNotice(item.id)">
              <p style="text-align: left!important;font-size: 0.3rem;margin-bottom: 15px;">标题：<span
                style="color: red;font-weight: 700;">{{item.title}}</span>
              </p>
              <p style="text-align: left!important;font-size: 0.3rem;margin-bottom: 15px;">时间：<span
                style="color: #0f0000;font-weight: 700;">{{item.create_time}}</span>
              </p>



            </li>

          </ul>
        </section>
      </section>
    </div>
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

            if (res.body.status == 0) {

              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if (res.body.status == 200) {
              this.NoticeData = res.body.data;
            }
          })
      },

      getOneNotice (id) {
        let self = this;

        self.$router.push({path: `/NoticeOne/${id}`});


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
