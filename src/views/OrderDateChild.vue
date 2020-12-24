<template>
  <div class="orderDate">
    <div class="title">
      <router-link to>
        <img src="../assets/img/back3.png" @click="$router.back(-1)" />
      </router-link>
      <span>日期选择</span>
    </div>
    <!-- <mt-cell class="date" isLink to="/">日期选择</mt-cell> -->
    <div class="classify">
      <h3 class="ticket">门票种类</h3>
      <router-link to="/orderdate">
        <mt-button class="adult">成人票</mt-button>
      </router-link>
      <mt-button type="danger">儿童票</mt-button>
      <!-- 切换成人票和儿童票，①日历上不同天数对应的价格发生变化②使用日期下的月份发生变化 -->
    </div>
    <div class="warning">
      <p>服务</p>
      <div>
        <p class="use_warning">
          <img
            class="use_warning_img"
            src="../assets/img/order/tishi.png"
          />使用提示
        </p>
        <p>16:30前可订今日票 平均一分钟出票 出票后可立即使</p>
        <p>用 (营业时间内)</p>
      </div>
    </div>
    <div class="time">
      <p class="use_date">使用日期：2020-09-28</p>
      <!-- 日历表上点击某一天后，使用日期动态变化，默认无 -->
      <div class="calendar">
        <div class="date_header">
          <div class="month">9月</div>
        </div>
        <div class="date_content">
          <div class="week_header">
            <!-- 星期数组必须使用单引号 -->
            <div
              v-for="(item, index) of [
                '日',
                '一',
                '二',
                '三',
                '四',
                '五',
                '六',
              ]"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
          <div class="week_day">
            <div class="everyday"></div>
            <div class="everyday"></div>
            <div
              class="everyday active"
              v-for="(item, index) of 30"
              :key="index"
            >
              {{ item }}
              <div class="everyday_price">¥30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="order_buy">
      <div class="buy_action_count">
        <p class="num_tit">购买数量</p>
        <div class="kc">
          <span>库存200件</span>
          <button class="sub" @click="minus">-</button>
          <span class="order_num">{{ n }}</span>
          <button class="add" @click="add">+</button>
        </div>
      </div>
    </div>
    <div class="zf">
      <!-- 日历表上点击某一天，价格动态变化，默认价格区间 -->
      <p class="price">¥30</p>
      <router-link to="/orderwritechild">
        <button class="buy_action">立即购买</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: 0,
    };
  },
  methods: {
    minus() {
      if (this.n > 0) {
        this.n--;
      }
    },
    add() {
      this.n++;
    },
  },
};
</script>
<style>
@import url("../assets/css/OrderDate.css");
</style>