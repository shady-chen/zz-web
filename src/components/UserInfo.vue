<template>
    <div>
      <div class="setting_title" style="display: block;">
        <a href="/#/UserCenter">
          <i class="icon"></i>
        </a>
        <span>设置</span>
      </div>
      <div class="setting_content">

        <ul class="setting_menu">
          <li class="setting_menu_item">
            <a href="settingFaq.html">
              <div>
							<span class="icon_wrap">
								<i class="icon icon_cjwt"></i>
							</span>
                <span class="item_title">修改头像</span>
                <i class="icon_zhankai"></i>
              </div>
            </a>
          </li>
          <li class="setting_menu_item">
            <a href="/#/ModifyPassword">
              <div>
							<span class="icon_wrap">
								<i class="icon icon_aqsz"></i>
							</span>
                <span class="item_title">忘记密码</span>
                <i class="icon_zhankai"></i>
              </div>
            </a>
          </li>
          <li class="setting_menu_item">
            <a href="settingFaq.html">
              <div>
							<span class="icon_wrap">
								<i class="icon icon_cjwt"></i>
							</span>
                <span class="item_title">规则说明</span>
                <i class="icon_zhankai"></i>
              </div>
            </a>
          </li>

          <li class="setting_menu_item">
            <a href="contact_us.html">
              <div>
							<span class="icon_wrap">
								<i class="icon icon_contact"></i>
							</span>
                <span class="item_title">联系我们</span>
                <span class="work_time">法定工作日：9:00-18:00</span>
                <i class="icon_zhankai"></i>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <button class="exist-btn">安全退出</button>
    </div>
</template>

<script>
  export default {
    name: 'UserInfo'
  }
</script>

<style scoped>
  .exist-btn{
    display: block;
    width: 80%;
    margin:25px auto;
    color: #fff;
    background: #cf0000;
  }

</style>
