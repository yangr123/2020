<template>
  <div class="order_page">
    <!-- <button class="page_link">
   <router-link to="/orderdate">
    <img src="../assets/img/order/left.png" />
   </router-link>
   <p></p>
    </button>-->
    <div class="title">
      <router-link to>
        <img src="../assets/img/back3.png" @click="$router.back(-1)" />
      </router-link>
      <span>填写订单</span>
    </div>
    <div class="order_write">
      <table></table>
      <div class="order_msg">
        <p>[翠华山国家地质公园-大门票]陕西西安旅游翠华山森林公园门票</p>
        <ul class="order_msg_list">
          <li>收费项目</li>
          <li>入园日期</li>
          <li>有效期</li>
        </ul>
        <ul class="order_msg_name">
          <li>大门票</li>
          <!-- 入园日期根据日期选择页面中 购买数量 动态变化-->
          <li>2020-09-18</li>
          <li>指定入园日期当日可用</li>
        </ul>
        <div class="adult_buy">
          <span class="adult_ticket">成人票</span>
          <button class="adult_sub" @click="minus">-</button>
          <!-- 数量①根据日期选择页面中购买数量②-+符号 动态变化-->
          <span class="adult_order_num">{{ n }}</span>
          <button class="adult_add" @click="add">+</button>
          <div>
            <p>预定须知</p>
            <img src="../assets/img/order/right.png" />
          </div>
          <div class="price_">
            单价：
            <span>¥{{ price1 }}.00</span>
          </div>
        </div>
        <div class="adult_buy child_buy">
          <span class="adult_ticket">儿童票</span>
          <button class="adult_sub" @click="minus1">-</button>
          <!-- 数量①根据日期选择页面中购买数量②-+符号 动态变化-->
          <span class="adult_order_num">{{ m }}</span>
          <button class="adult_add" @click="add1">+</button>
          <div class="price_1">
            单价：
            <span>¥{{ price2 }}.00</span>
          </div>
        </div>
      </div>
      <div class="customer_msg">
        <span>买家留言</span>
        <input type="text" placeholder="选填,请先和商家协商一致" />
      </div>
      <div class="get_ticket">
        <p>
          <span class="get_ticket_msg">取票信息</span>
          <span class="get_warning">仅需添加1位取票人用于接收取票信息</span>
        </p>
        <div>
          <span class="get_human">取票人</span>
          <input type="text" />
          <button class="choose_human">选择取票人</button>
        </div>
        <div>
          <span class="get_human_name">姓名</span>
          <input
            class="real_name"
            type="text"
            placeholder="请输入证件上的实际姓名"
          />
        </div>
        <div>
          <span class="get_human_phone">手机号码</span>
          <input
            class="real_phone"
            type="text"
            placeholder="请输入手机号,用于接收信息"
          />
        </div>
      </div>
      <div class="explain_msg">
        <p>-更多服务 为您保障-</p>
        <p>闪电出票 无需换票 不用可退</p>
      </div>
    </div>
    <div class="go_pay">
      <!-- 价格根据①根据日期选择页面中购买数量②上面button增减框动态变化-->
      <span class="pay_price">¥{{ total }}.00</span>
      <!-- <span class="pay_msg">明细</span> -->
      <button style="color: #fff">
        <!-- <router-link to="/orderdetail">去付款</router-link> -->
        <span @click="goPay">去付款</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 1,
      m: 0,
      price1: "55",
      price2: "30",
    };
  },
  methods: {
    goPay() {
      // console.log(111);
      this.$messagebox({
        title: "提示",
        message: "确认支付？",
        showCancelButton: true,
        confirmButtonText: "支付",
        cancelButtonText: "取消",
      }).then((action) => {
        if (action == "confirm") {
          let instance = this.$toast("支付中,请稍后...");
          setTimeout(() => {
            instance.close();
            this.$router.push("/orderdetail");
          }, 2000);
        } else {
        }
      });
      return false;
    },
    minus() {
      if (this.n > 1) {
        this.n--;
      }
    },
    add() {
      this.n++;
      // this.totalprice=this.n*;
    },
    minus1() {
      if (this.m > 0) {
        this.m--;
      }
    },
    add1() {
      this.m++;
    },
  },
  computed: {
    total() {
      var totalprice1 = 0;
      totalprice1 = Number(this.price1) * this.n + Number(this.price2) * this.m;
      return totalprice1;
    },
  },
  mounted() {
    // this.goPay();
  },
};
</script>

<style>
@import url("../assets/css/OrderWrite.css");
</style>
