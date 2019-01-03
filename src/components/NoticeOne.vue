<template>

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

</style>
