<template>
  <div>
    <div id="bgimg">
      <img src="../assets/img/register.jpg" alt class="img" />
    </div>
    <div id="top">
      <div class="top1">
        <router-link to="/">账号登录</router-link>
      </div>
      <div class="top2">
        <router-link to="/register">账号注册</router-link>
      </div>
      <img src="../assets/img/sanjiao.png" alt id="sanjiao" />
    </div>
    <!-- 面板选项卡开始 -->
    <!-- <div> -->
    <!-- 检验手机号 -->
    <mt-field
      type="text"
      v-model="phone"
      :state="phoneState"
      placeholder="请输入手机号"
      label="手机号"
      @blur.native.capture="checkPhone"
    ></mt-field>

    <!-- 检验密码 -->
    <mt-field
      type="password"
      v-model="upwd"
      :state="upwdState"
      placeholder="请输入密码"
      label="密码"
      @blur.native.capture="checkUpwd"
    ></mt-field>
    <!-- 验证码 -->
    <div class="yzm">
      <!-- 输入验证码 -->
      <mt-field
        type="text"
        placeholder="请输入验证码"
        v-model="code"
        id="YZM_Input"
        class="YZM_code"
        :state="codeState"
        label="验证码"
        @blur.native.capture="checkCode"
      ></mt-field>
      <!-- 验证码按钮 -->
      <mt-button
        id="codeId"
        @click.native.capture="changeImg"
        class="YZM_pic"
        title="看不清，换一张"
      ></mt-button>
    </div>
    <!-- 注册 -->
    <mt-button
      type="primary"
      size="large"
      class="btn"
      @click.native.capture="reg"
      id="bigbtn"
      >登录</mt-button
    >
    <div class="cus"><router-link to="/index"> 游客登录</router-link></div>
    <!-- 面板选项卡结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      upwd: "",
      code: "",
      phoneState: "",
      upwdState: "",
      codeState: "",
    };
  },
  methods: {
    checkPhone() {
      //电话正则验证
      let reg = /^1[3-8]\d{9}$/i;
      if (reg.test(this.phone)) {
        this.phoneState = "success";
        return true;
      } else {
        this.phoneState = "error";
        this.$toast("手机号格式错误请重新输入");
        return false;
      }
    },
    checkUpwd() {
      //设置密码为6-12位任意字符
      let reg = /^[a-zA-Z0-9_]{6,12}$/;
      if (reg.test(this.upwd)) {
        this.upwdState = "success";
        return true;
      } else {
        this.upwdState = "error";
        this.$toast("请输入6-12位任意字符");
        return false;
      }
    },
    changeImg() {
      var arrays = new Array(
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      );
      var code = "";
      //随机从数据中获取四个验证码
      for (var i = 0; i < 4; i++) {
        var r = parseInt(Math.random() * arrays.length);
        code += arrays[r];
      }
      document.getElementById("codeId").innerHTML = code;
    },
    checkCode() {
      //获取到验证码
      var codeId = document.getElementById("codeId").innerHTML;
      //验证验证码
      if (codeId.toLowerCase() == this.code.toLowerCase()) {
        // console.log("123");
        this.codeState = "success";
        return true;
      } else if (this.code == "") {
        return false;
      } else {
        this.codeState = "error";
        this.$toast("验证码错误");
        return false;
      }
    },
    reg() {
      //如果用户名密码验证码都符合
      if (this.checkPhone() && this.checkUpwd() && this.checkCode()) {
        this.axios
          .post("/login", "phone=" + this.phone + "&upwd=" + this.upwd)
          .then((res) => {
            console.log(res);
            if (res.data.code == 0) {
              this.$messagebox("登录提示", "用户登录失败");
            } else {
              // // //提交到mutation
              // this.$store.commit("logined");
              // //将用户登录的状态存储到webstorege中
              // localStorage.setItem("isLogin",true);
              //路由跳转
              this.$router.push("/index");
            }
          });
      }
    },
  },
  mounted() {
    this.changeImg();
  },
};
</script>

<style scoped>
.cus {
  padding: 8px 20px;
  float: right;
}
.cus a {
  color: #555;
  text-decoration: underline;
}
#bgimg {
  width: 100%;
  height: 300px;
}
.img {
  width: 100%;
  height: 300px;
}
/* 按钮的样式 */
#bigbtn {
  width: 90%;
  margin: 20px auto 10px auto;
  border-radius: 20px;
  letter-spacing: 20px;
}
/* 顶部选项卡的样式 */
#top {
  display: flex;
  margin-bottom: 20px;
  position: relative;
}
.top1,
.top2 {
  display: flex;
  align-items: center;
  background: black;
  justify-content: center;
  height: 40px;
  width: 50%;
  position: relative;
}
.top1 > a,
.top2 > a {
  font-size: 12px;
  color: aliceblue;
  text-decoration: none;
}
#sanjiao {
  width: 20px;
  position: absolute;
  top: 26px;
  left: 22%;
}
.mint-cell {
  width: 100%;
}
/* 底部按钮 */
.yzm {
  position: relative;
  margin-bottom: 10px;
}
.YZM_code {
  width: 70%;
  height: 35px;
  border: 0;
  border-color: transparent;
  font-size: 16px;
  border-radius: 5px;
}
.YZM_pic {
  display: block;
  width: 25%;
  height: 35px;
  background-color: #0381ff;
  color: #fff;
  position: absolute;
  top: 0px;
  left: 70%;
  border-radius: 5px;
  text-align: center;
}
</style>
