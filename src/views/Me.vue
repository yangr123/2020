<template>
  <div>
    <!-- 顶部导航开始 -->

    <!-- 顶部导航结束 -->
    <!-- 头像区域开始 -->
    <div class="avatar">
      <img src="../assets/img/moren.jpg" alt />
    </div>
    <!-- 头像区域结束 -->
    <!-- 设置区域开始 -->
    <div>
      <mt-cell title="我的订单" isLink to="/orderlist">
        <img src="../assets/img/dingdan.png" slot="icon" />
      </mt-cell>
      <mt-cell title="个人设置" isLink>
        <img src="../assets/img/shezhi.png" slot="icon" />
      </mt-cell>
      <mt-cell title="关于我们" isLink>
        <img src="../assets/img/wode.png" slot="icon" />
      </mt-cell>
      <div @click="logout">
        <mt-cell title="退出" isLink>
          <img src="../assets/img/tuichu.png" slot="icon" />
        </mt-cell>
      </div>
    </div>
    <!-- 设置区域结束 -->
    <!-- 底部选项卡区域开始 -->
    <tabbar :select="select"></tabbar>
    <!-- 底部选项卡区域结束 -->
  </div>
</template>
<script>
import tabbar from "../views/Tabbar";
export default {
  components: { tabbar },
  data() {
    return {
      select: "me",
    };
  },
  methods: {
    logout() {
      console.log(111);
      this.$messagebox({
        title: "提示",
        message: "确认退出？",
        showCancelButton: true,
        confirmButtonText: "退出",
        cancelButtonText: "取消",
      }).then((action) => {
        if (action == "confirm") {
          this.$router.push("/");
        } else {
          // console.log("取消");
        }
      });
      return false;
    },
  },
};
</script>
<style scoped>
.avatar {
  margin: 15px 0;
  width: 130px;
  height: 130px;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.avatar img {
  width: 80%;
  border-radius: 100%;
}
/* .mt-cell {
 min-height: 44px !important;
} */
</style>
