<template>
  <div>
    <div class="modifypassword_title" style="display:block;">
      <a href="/#/WithdrawList">
        <i class="icon"></i>
      </a>
      <span>提现</span>
    </div>
    <div>
      <p style="text-align: left!important;margin-bottom: 5px;margin-top: 15px;color: #000;padding-left: 20px;" >
        <span style="font-size: 0.3rem;color: #000;">提现方式：</span>
        <select style="width: 260px;height:  0.8rem;margin-top: 3px;" @change="selectVal">
          <option  v-bind:value="0">--请选择--</option>
          <option v-model="item.id" v-for="item in bankData" v-bind:value="item.id">{{item.bank_which}}</option>
        </select>
      </p>
      <ul class="tabs_list" style="margin-bottom:15px;">
        <li class="list_item"  style="width: 96%;margin: 0 auto;border: 1px solid #d7d7d7;padding: 0.2rem;
 -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;text-align: left!important;font-size: 0.3rem;
 background: #f6f6f6" >
          <p style="text-align: left!important;margin-bottom: 15px;color: #000;">
            <span style="font-size: 0.3rem;color: #000;">提现姓名：
              <b style="color: red;font-size: 0.4rem;">
              {{bankData2.real_name}}
              </b>
            </span>

          </p>
          <p style="text-align: left!important;margin-bottom: 15px;color: #000;">
            <span style="font-size: 0.3rem;color: #000;">提现户行：
              <b style="color: red;font-size: 0.4rem;">
              {{bankData2.bank_where}}
              </b>
            </span>
          </p>
          <p style="text-align: left!important;margin-bottom: 15px;">
            <span style="font-size: 0.3rem;color: #000;">提现类型：
              {{bankData2.bank_which}}
              <!--<input type="text" name="remark" style="width: 260px;height:  0.5rem;margin-top: 3px" v-model="bank_where" />-->
            </span>
          </p>

          <p style="text-align: left!important;margin-bottom: 15px;">
            <span style="font-size: 0.3rem;color: #000;">提现账号：
              {{bankData2.bank_num}}
            </span>
          </p>
        </li>
      </ul>
      <ul class="tabs_list">
        <li class="list_item"  style="width: 96%;margin: 0 auto;border: 1px solid #d7d7d7;padding: 0.2rem;
 -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;text-align: left!important;font-size: 0.3rem;
 background: #f6f6f6" >
          <div style="text-align: left!important;margin-bottom: 25px;color: #000;overflow:hidden;">
              <span style="font-size: 0.3rem;color: #000;float:left;height: 0.5rem;line-height: 0.5rem;">提现金额： </span>
              <input type="text"
                     name="remark"
                     style="float:left;width:3.48rem;height:  0.5rem;border: 1px solid #d0d7c6;font-size: 0.2rem;"
                     v-model="money"
                     placeholder="请输入您的提现金额"
              />
          </div>

          <div style="text-align: left!important;margin-bottom: 25px;color: #000;overflow:hidden;">
            <span style="font-size: 0.3rem;color: #000;float:left;height: 0.5rem;line-height: 0.5rem;">提现号码： </span>
            <input type="text"
                   name="remark"
                   style="float:left;width:3.48rem;height:  0.5rem;border: 1px solid #d0d7c6;font-size: 0.3rem;border: none;"
                   v-model="userInfo.phone"
                   placeholder="请输入您的提现金额"
                   disabled
            />
          </div>
          <div style="text-align: left!important;margin-bottom: 25px;color: #000;overflow:hidden;">
            <span style="font-size: 0.3rem;color: #000;float:left;height: 0.5rem;line-height: 0.5rem;">手机验证： </span>
            <input type="text"
                   name="remark"
                   style="float:left;width:3.48rem;height:  0.5rem;border: 1px solid #d0d7c6;font-size: 0.2rem;"
                   v-model="phoneMess"
                   placeholder="请输入短信验证码"
            />
            <button type="submit" style="background: #0197ff;color: #fff;float:left;margin-left: 5px;height: 0.5rem;" class="mt-btn"
                    @click="getPhoneMess" v-show="show">获取</button>
            <button type="submit" style="background: #ccc;color: #fff;float:left;margin-left: 5px;height: 0.5rem;" class="mt-btn"
                    v-show="!show">{{count}}秒</button>
          </div>

          <div style="text-align: left!important;margin-bottom: 25px;color: #000;overflow:hidden;">
            <span style="font-size: 0.3rem;color: #000;float:left;height: 0.5rem;line-height: 0.5rem;">提现备注： </span>
            <input type="text"
                   name="remark"
                   style="float:left;width:3.48rem;height:  0.5rem;border: 1px solid #d0d7c6;font-size: 0.2rem;"
                   v-model="remark"
                   placeholder="请输入您的提现备注"
            />
          </div>


          <button type="submit" style="background: #1b9c0c;color: #fff;
          display: block;margin:25px auto;width: 80%;
height: 1rem;" class="mt-btn" @click="add">提现</button>

        </li>
      </ul>

    </div>


  </div>
</template>

<script>
  export default {
    name: 'BankAdd',
    data(){
      return {
        bankData:{},
        bankData2:{},
        selected:'',
        userInfo:{},
        money:'',
        phoneMess:'',
        remark:'',
        show:true,
        count:'',
      }
    },
    methods:{
      getPhoneMess(){
        this.$http.post(this.$store.state.basePath + '/index/smsbao/getCode',
          {
            phone:this.userInfo.phone
          },
        ).then(
          (res) => {

            if (res.body.status == 0) {
              console.log(res)
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if(res.body.status == 200){
              this.mui.alert(res.body.msg, '提示', '确认');
              const TIME_COUNT = 60;
              if (!this.timer) {
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(() => {
                  if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                  } else {
                    this.show = true;
                    clearInterval(this.timer);
                    this.timer = null;
                  }
                }, 1000)
              }
            }
          })
      },
      selectVal: function(ele) {
        this.selected = ele.target.value;
        if(this.selected == 0){
          return
        }else{
          this.$http.post(this.$store.state.basePath + '/user/bank/getAppBankById',
            {
              id:this.selected
            },
          ).then(
            (res) => {
              console.log(res)
              if (res.body.status == 0) {
                console.log(res)
                this.mui.alert(res.body.msg, '提示', '确认')
              }
              if(res.body.status == 200){
                this.bankData2 = res.body.data;
              }
            })
        }
      },
      add(){
        if(!this.selected)
        {
          this.mui.alert("请选择提现方式", '提示', '确认');
          return
        }
        if(!this.money){
          this.mui.alert("请输入提现金额", '提示', '确认');
          return
        }
        if(!this.phoneMess){
          // this.mui.alert("请输入短信验证码", '提示', '确认');
          // return
        }

        this.$http.post(this.$store.state.basePath + '/user/withdraw/withdraw', {
            bank_id:this.selected,
            money:this.money,
            phoneMess:this.phoneMess,
            remarks:this.remark
        }).then((res) => {
            console.log(res)
            if (res.body.status == 0) {
              console.log(res)
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if (res.body.status == 1) {
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if(res.body.status == 200){
              window.location.href = '/#/WithdrawList';

            }
          })
      },
      getUserInfo(){
        this.$http.post(this.$store.state.basePath + '/user/user/getSessionUser',
          {},
        ).then(
          (res) => {
            this.userInfo = res.body;

          })
      },
      getBankList(){
        this.$http.post(this.$store.state.basePath + '/user/bank/appBanksList',
          {
          },
        ).then(
          (res) => {
            console.log(res)
            if (res.body.status == 0) {
              console.log(res)
              this.mui.alert(res.body.msg, '提示', '确认')
            }
            if(res.body.status == 200){
              if(res.body.data.length == 0)
              {
                this.mui.alert("请先添加您的提现卡", '提示', '确认',function () {
                  window.location.href = '/#/BankAdd';
                })
                return;
              }

              this.bankData = res.body.data;
            }
          })
      }
    },
    created(){
        this.getBankList();
        this.getUserInfo();
        // this.bankData2 = this.bankData[0];
    }

  }
</script>

<style scoped>
  @import '../../static/css/personalCenter.css';

</style>
