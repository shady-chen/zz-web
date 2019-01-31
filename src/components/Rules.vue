<template>
  <div>
    <div class="setting_title" style="display: block;">
      <a href="/#/UserCenter">
        <i class="icon"></i>
      </a>
      <span>游戏规则</span>
    </div>
    <div class="setting_content" style="margin-top: 15px;text-align: left;text-indent: 2em">

      <p style="letter-spacing: 3px;font-size: 0.4rem;font-weight: 700;color: #000;box-sizing: border-box;padding: 10px;line-height: 27px;'">{{str}}</p>

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
            this.str = res.body.text_rules;
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
