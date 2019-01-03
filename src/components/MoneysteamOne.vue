<template>

</template>

<script>
  export default {
    name: 'MoneysteamOne',
    data(){
      return{
        MoneysteamData:{},
      }
    },
    methods: {
      getMoneysteam () {
        this.$http.post(this.$store.state.basePath + '/user/moneysteam/getMoneysteamById',
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
    },
    created(){
      this.getMoneysteam();
    }
  }
</script>

<style scoped>

</style>
