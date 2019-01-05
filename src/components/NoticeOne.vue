<template>
  <div>
    <div class="wrap investmentRecord_page">
      <section class="container" style="background: #fff;">
        <header class="header investment_title" style="display: block;">
          <a href="/#/UserCenter">
            <i class="icon"></i>
          </a>
          <span>{{noticeData.title}}</span>

        </header>


        <section class="tabs_wrap" id="tabs_wrap" style="height: 100%;padding-bottom: 65px;">
          <ul class="tabs_list">
            <li class="list_item"   style="width: 96%;margin: 10px auto;border: 1px solid #d7d7d7;padding: 0.2rem;
-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;text-align: left!important;font-size: 0.3rem;
 background: #f6f6f6;">

              <p style="text-align: left!important;font-size: 0.3rem;margin-bottom: 15px;">标题：<span
                style="color: red;font-weight: 700;">{{noticeData.title}}</span>
              </p>
              <p style="text-align: left!important;font-size: 0.3rem;margin-bottom: 15px;">时间：<span
                style="color: #0f0000;font-weight: 700;">{{noticeData.create_time}}</span>
              </p>
              <p style="text-align: left!important;font-size: 0.3rem;margin-bottom: 15px;">
                内容：<span
                style="color: #0f0000;font-weight: 700;">{{noticeData.content}}</span>

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
    name: 'NoticeOne',
    data(){
      return{
        noticeData:{}
      }

    },
    methods:{
      getOne(){
        let self = this
        // console.log(self.$route.params.id)
        this.$http.post(this.$store.state.basePath + '/user/notice/getNoticeById',
          {
            id:self.$route.params.id
          },
        ).then(
          (res) => {
            console.log(res)
            if (res.body.status == 0) {
              console.log(res)
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if(res.body.status == 200){
              this.noticeData = res.body.data;
            }
          })
      }
    },
    created(){
      this.getOne();
    }

  }
</script>

<style scoped>
  @import '../../static/css/personalCenter.css';

</style>
