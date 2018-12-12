<template>
    <div class="mui-card">
	<!--页眉，放置标题-->
	<div class="mui-card-header">
    <span class="mui-icon iconfont icon-wode">还有</span>
    <span class="mui-icon iconfont icon-wode mui-badge mui-badge-danger">{{count}}</span>
    <span class="mui-icon iconfont icon-wode">个红包</span>
  </div>
	<!--内容区-->
	<div class="mui-card-content">
    <img src="../assets/1.jpg" style="width:100%"/>
  </div>
	<!--页脚，放置补充信息或支持的操作-->
	<div class="mui-card-footer">
    <span class="mui-icon iconfont icon-wode">期数:</span>
    <span class="mui-icon iconfont icon-wode mui-badge mui-badge-danger">{{expect}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'redPage',
  data () {
     return {
        count:0,
        expect:''
      }
  },
  methods: {
  },
  created(){
  }
}
</script>

