<template>
  <div class="image">
    <a href="#"
      ><img v-show="show" id="image" src="../assets/img/toTop.png" class="img"
    /></a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // display: "none",
      show: true,
    };
  },
  methods: {
    toTop() {},
  },
  mounted() {
    window.onscroll = function () {
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      // console.log("scrollTop：" + scrollTop);
      // if (scrollTop > 200) {
      //   this.show = true;
      //   console.log(111);
      // } else {
      //   this.show = false;
      // }
    };
  },
};
</script>
<style scoped>
.image {
  /* margin-top: 1000px; */
  /* width: 24px;
  height: 24px;
  border: 1px solid #000; */
}
.img {
  position: fixed;
  bottom: 50px;
  right: 10px;
  transition: all 0.5s;
}
/* .hide {
  display: none;
  border: 1px solid #000;
} */
</style>