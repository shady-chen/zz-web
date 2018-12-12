<template>
  <div>
    <header class="mui-bar mui-bar-nav">
		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		<h1 class="mui-title">首页</h1>
	</header>
    <div class="mui-card">
      <!--页眉，放置标题-->
      <div class="mui-card-header">
        <span class="mui-icon iconfont icon-wode">还有</span>
        <span class="mui-icon iconfont icon-wode mui-badge mui-badge-danger">{{count}}</span>
        <span class="mui-icon iconfont icon-wode">个红包</span>
      </div>
      <!--内容区-->
      <div class="mui-card-content">
        <img src="../assets/1.jpg" style="width:100%" @click="rob"/>
      </div>
      <!--页脚，放置补充信息或支持的操作-->
      <div class="mui-card-footer">
        <span class="mui-icon iconfont icon-wode">期数:</span>
        <span class="mui-icon iconfont icon-wode mui-badge mui-badge-danger">{{expect}}</span>
      </div>
    </div>
    
  </div>
</template>
<script>
  export default {
    name:'appIndex',
    data() {
      return {
        count:0,
        expect:0,
      }
    },
    methods: {
       rob(){
           this.$http.post(this.$store.state.basePath+'/index/index/robPacket',{
               expect:this.expect
           }).then((res)=>{
               if(res.body.status == 200){
                   console.log(res.body)
                   this.mui.alert(res.body.msg);
                   this.$set(this,"count",res.body.amount);
                   
                   
               }else{
                   console.log(res.body)
                   this.mui.alert(res.body.msg)
               }
            //    console.log(res.body)
            });
       }
    },
    created(){
         
           
            this.$http.get(this.$store.state.basePath+'/index/index/isExistPacket',{}).then((res)=>{
                if(res.body.status == 0){
                    this.count  = 0;
                     this.expect = 0;
                }else{
                    
                     this.$set(this,"count",res.body.data.amount);
                     this.$set(this,"expect",res.body.data.expect);
                  
                }
            });
            let ws = new WebSocket('ws://www.zz.com:2345');
            ws.onopen = ()=>{
                console.log('connect success');
                ws.send('i am big head');
            }
            var that = this;
            ws.onmessage = function(res){
              let data = res.data;
              data = JSON.parse(data)
              that.$set(that,"count",data.amount);
              that.$set(that,"expect",data.expect);
            }
    },
  }
</script>
