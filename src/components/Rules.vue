<template>

  <div>

    <div class="setting_title" style="display: block;">
      <a href="/#/UserCenter">
        <i class="icon"></i>
      </a>
      <span>游戏规则</span>
    </div>
    <div class="setting_content" style="margin-top: 10px;text-align: left;text-indent: 2em">

      <div v-html="str">{{str}}</div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Rules',
    data () {
      return {
        str: "",

      }
    },
    methods:{

      getInfo(){
        this.$http.get(this.$store.state.basePath + '/index/index/getSettingData').then(
          (res) => {
            // console.log(res.body)
            let  str = res.body.text_rules.split("。");
            for(let i = 0;i<str.length;i++){
              this.str += '<p class="my-p-rules">' + str[i] + '</p><br>';
            }
          })
      },
      beStr(str){

      }
    },
    created(){
      this.getInfo();
    },
  }
</script>

<style scoped>

</style>
