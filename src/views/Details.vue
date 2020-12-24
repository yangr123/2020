<template>
    <!-- <div style="background-color: whitesmoke"> -->
    <div>
        <!-- 详情 -->
        <div class="title">
            <router-link to="">
            <img src="../assets/img/back3.png" @click="$router.back(-1)" />
            </router-link>
            <span> 详情</span>
        </div>
      <!-- 轮播图 -->
      <div class="coursel">
        <mt-swipe :auto="0" :showIndicators="false">
            <mt-swipe-item v-for="(item,index) of image" :key="index">
                <img :src="item.image" style="width:100%">
            </mt-swipe-item>
      </mt-swipe>
      </div>
      <!-- 轮播图結束 -->
      <div class="container">
    <!-- 顶部图片 -->
    <!-- 简介 -->
    <!-- 1======================= -->
        <div class="details">
            <div class="name">{{info.de_name}}</div>
            <!-- 标签 -->
            <div class="description">
                <p>5A</p>
                <p>{{info.de_des}}</p>
                <!-- <p>珍贵青铜马车</p> -->
                <!-- <p></p> -->
            </div>
            <!-- 简介 -->
            <div class="content">
                <p>{{info.co_det}}</p>
            </div>
            <!-- 人气榜 -->
            <div class="ranking_list">
                <p>人气榜</p>
                <p>西安景点玩乐人气榜</p>
            </div>
            <!-- 地图 -->
            <div class="place">
               {{info.de_locate}}}
            </div>  
        </div>
        <!-- details结束 -->
        <!-- 2============================= -->
         <!-- 预定票块 -->
         <div class="ticket" id="ticket">
             <div class="t_inner">
            <div class="big_price">
               <div class="big_left">
                    <p>成人票</p>
                   <p>月售6845笔</p>
               </div>
               <div class="big_right">
                    <p align="center">
                       <span>￥{{info.adultPri}}</span>
                       <span>起</span>
                    </p>
                   <p>
                   <router-link to="/orderdate">预订</router-link> </p>
               </div>
            </div>
            <div class="big_price">
                <div class="big_left">
                    <p>儿童票</p>
                   <p>月售6845笔</p>
               </div>
               <div class="big_right">
                    <p align="center">
                       <span>￥{{info.childPri}}</span>
                       <span>起</span>
                    </p>
                   <p><router-link to="/orderdateChild" >预订</router-link></p>
               </div>
            </div>
           </div>
           <!-- inner结束 -->
         </div>
         <!-- ticket 预定结束 -->
           <div class="introduce">
               <div class="t_inner">
                    <p>介绍</p>
                    <p style="line-height: 22px;">{{info.co_intr}}</p>
               </div>
           </div>
           <div class="time">
                <div class="t_inner">
                    <p>开放时间</p>
                    <p>全年01月01日-12月31日</p>
                    <div>
                        <p>开放时间</p>
                        <p>(周一至周日)09:00-16:00</p>
                    </div>      
                    <div>
                        <p>最晚入园</p>
                        <p>16:00</p>
                    </div> 
               </div>
           </div>
           <!-- time结束 -->
           <!-- 优待政策 -->
           <div class="rules">
               <div class="t_inner">
                <p>优待政策</p>
                <!-- 1 -->
                <div>
                    <p>儿童</p>
                    <p>1.2米以下儿童免费参观</p>
                </div>
                <!-- 2 -->
                <div>
                    <p>老年人</p>
                    <p>年满65岁以上(含65岁)的老年人，凭本人居民身份证可购买优惠门票，年满70岁以上(含70岁)的老年人，凭本人居民身份证可免费参观</p>
                </div> 
                <!-- 3 -->
                <div>
                    <p>大中小学生</p>
                    <p>在校学生凭本人学生证可购买优惠券</p>
                </div>
                <!-- 4 -->
                <div>
                    <p>现役军人</p>
                    <p>现役军人(含武警)凭本人军官证,士兵证购买优惠门票</p>
                </div>  
                      
               </div>
           </div>
           <!-- rules结束 -->
            <!-- bus开始 -->
            <div class="bus">
               
              <div class="t_inner">
                <p>其他信息</p>
                <!-- 1 -->
                <div>
                   <p>建议游玩时间</p>
                   <p>1小时
                   </p>
                </div>
               <!-- 2 -->
               <div>
                <p>交通</p>
                <p>
                    <ul>
                        <li>
                            <p>公交站-标缝集团(公交站)</p>
                            <p>532m</p>
                        </li>  
                        <li>
                            <p>公交站-秦始皇陵(公交站)</p>
                            <p>1.1km</p>
                        </li>  
                        <li>
                            <p>公交站-招呼站(公交站)</p>
                            <p>1.3km</p>
                        </li>  
                        <li>
                            <p>公交站-骊山大水沟(公交站)</p>
                            <p>1.4km</p>
                        </li>  
                        <li>
                            <p>公交站-杨家桥(公交站)</p>
                            <p>1.4km</p>
                        </li>  
                    </ul>
                </p>
            </div>
            <!-- 3 -->
            <div>
                <p>电话</p>
                <p>029-81399127</p>
            </div>
            <!-- 4 -->
            <div>
                <p>官网</p>
                <p>www.bmy.com.cn </p>
            </div>
            <!-- 5 -->
            <div>
                <p>景区等级</p>
                <p>AAAA</p>
            </div>

          </div>
           <!-- inner结束 -->
          </div>
          <!-- bus结束 -->
      </div>
      <!-- container结束 -->
      <!-- 底部 -->
    <mt-tabbar fixed class="bottom">
          <mt-tab-item>
            <!-- <img src="../assets/img/time.png"> -->
            <p><a href="">签到</a></p>
          </mt-tab-item>

          <mt-tab-item>
            <!-- <img src="../assets/img/talk.png"> -->
            <p><a href="">写点评</a></p>
          </mt-tab-item>

        <mt-tab-item class="search_ticket">
        <div> <a href="#ticket">查看门票</a>  </div>
        
        </mt-tab-item>
      
    </mt-tabbar>
      <!-- 底部结束 -->
      
    </div>
</template>

<style scoped>
.title {
  color: #333;
  text-align: center;
  padding: 0px 10px 10px 10px;
  /* border: 1px solid #000; */
}
.title span {
  display: block;
  font-size: 22px;
  margin-top: 14px;
}
.close {
  color: #888;
  position: absolute;
  font-size: 18px;
  left: 40px;
  top: 12px;
}
.title img {
  display: flex;
  position: absolute;
  top: 14px;
}

.font {
  font-size: 16px;
  color: #333;
}

a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

/* 图片下面整体 */

.container {
  position: absolute;
  width: 100%;
  margin: -10px 0;
  padding: 0 10px;
  background-color: whitesmoke;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

/* details里面的div上下距离 */

.details > div {
  padding-top: 10px;
}

/* 秦始皇字体 */

.details > .name {
  font-size: 25px;
  font-weight: 600;
}

/* 标签字体 */

.details > .description > p {
  font-size: 14px;
  color: #f86442;
  background-color: rgba(0, 0, 0, 0.076);
  padding: 3px;
}

.details > .description > p:first-child {
  color: green;
  padding: 3px;
  background-color: rgba(0, 0, 0, 0.076);
}

/* 标签 ,人气榜 弹性 */

.description,
.ranking_list {
  display: flex;
}

.description p,
.ranking_list > p {
  margin-right: 10px;
}

.ranking_list p:first-child {
  font-size: 14px;
  color: #fff;
  background-color: #ff5741;
  border-radius: 10px;
  padding: 2px;
}

/* ticket */

.ticket {
  margin-top: 10px;
  background-color: #fff;
  border-radius: 15px;
}

.t_inner {
  /* border:1px solid red; */
  padding: 10px;
  width: 100%;
}

/* 成人票儿童上下总距离 */

.ticket .big_price {
  margin-top: 20px;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 15px;
}

/* 成人票左右 */

.ticket > .t_inner > .big_price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 按钮 预订 */

.ticket .big_right > p:last-child {
  background-color: #ff5741;
  text-align: center;
  border-radius: 15px;
  padding: 6px;
  width: 72px;
  margin-top: 5px;
}

.big_price > .big_right a {
  color: #fff;
  font-size: 14px;
}

.ticket .big_right span {
  color: #ff5741;
}

/* 起 */

.ticket .big_right span:last-child {
  font-size: 13px;
  color: #333;
}

.big_price > .big_left > p:last-child {
  color: #a3a3ac;
  font-size: 14px;
  margin-top: 5px;
}

/* 底部 固定导航栏*/

.bottom {
  width: 100%;
  display: flex;
  align-items: center;
}

.search_ticket div > a {
  color: #fff;
  font-size: 15px;
}

/* 查看门票按钮 */

.search_ticket div {
  text-align: center;
  background-color: #ff5741;
  border-radius: 20px;
  padding: 5px;
}

/* 介绍字体 */

.introduce p:first-child,
.time .t_inner > p:first-child,
.rules > .t_inner > p,
.bus > .t_inner > p {
  font-size: 25px;
  margin-bottom: 10px;
}

/* 灰色第二部分小字 */

.introduce p:last-child,
.time .t_inner > div > p:last-child,
.rules .t_inner div > p:nth-child(2),
.bus > .t_inner div > p:nth-child(2) {
  color: #686868;
}

/* 块与块之间距离 */

.introduce,
.time,
.rules,
.bus {
  margin-top: 15px;
  background-color: #fff;
  border-radius: 15px;
}

/* 解决外边距溢出 */

.introduce,
.time,
.rules,
.bus::before {
  content: "";
  display: table;
}

/* 开放时间 */

.time {
  width: 100%;
}

/* 给后面的宽度，解决前面字竖着 */

.rules > .t_inner > div > p:nth-child(2) {
  width: 69%;
}

.bus > .t_inner > div:nth-child(5) > p:nth-child(2) {
  /* 官网 */
  /* background-color: bisque; */
  color: #0091e5;
  /* width:80%; */
}

.bus > .t_inner > div:nth-child(4) > p:nth-child(2) {
  /* background-color: #f86442; */
  color: #0091e5;
}

.rules > .t_inner > div,
.bus > .t_inner > div {
  display: flex;
  justify-content: space-between;
}

.time .t_inner > div {
  display: flex;
}

.time .t_inner div > p:nth-child(2) {
  /* margin-left: 40px; */
}

.time p,
.rules p,
.bus div p {
  margin: 10px 0;
}

.time .t_inner > div,
.rules .t_inner div,
.bus > .t_inner > div {
  border-bottom: 1px solid #e8e8e8;
}

/*bus=========  */

.bus ul {
  list-style: none;
}

.bus li {
  display: flex;
  justify-content: space-between;
}

/* 最后的块与底部固定卡之间的距离，否则挡住 */

.bus {
  margin-bottom: 100px;
}

.coursel {
  width: 100%;
  overflow: hidden;
  height: 237px;
}

.mint-swipe,
.mint-swipe-items-wrap {
  /* height: 260px !important; */
  /* z-index: -1; */
}
</style>
<script>
export default {
  data() {
    return {
      info: {}, //存放文章内容
      picList: [],
      did: 0,
      image: [],
    };
  },
  methods: {
    close() {
      this.$router.push("/index");
    },
  },
  mounted() {
    //获取动态URL片段信息 用params-- 当前文章的id
    let id = this.$route.params.id;
    //   console.log(id);
    //向服务器发送请求,以获取文章信息
    this.axios.get("/details?id=" + id).then((res) => {
      // //存放图片
      // let data=res.data.result;
      // data.avatar=require('../assets/avatar/'+data.avatar);
      this.info = res.data.result; //接收(结果全部)
      const { de_id } = { ...res.data.result };
      this.did = de_id;
      // console.log(this.did, '<<<<<< this.did');
      // console.log(this.info);
      this.axios.get("/img?id=" + this.did).then((res) => {
        // console.log(res, '<<<< res');
        let data = res.data;
        // console.log(data);
        // this.image=data;
        data.forEach((img) => {
          this.image.push({
            image: require("../assets/img/images/" + img.image),
          });
        });
        // console.log(this.image);
        //   this.picList=res.data
      });
    });
    //   console.log(this.info.de_id);
  },
};
</script>
