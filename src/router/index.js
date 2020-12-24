import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

// 引入Index
import Index from "../views/Index.vue";
import Tabbar from "../views/Tabbar.vue";
import Me from "../views/Me.vue";
import Search from "../views/Search.vue";
import OrderDetail from "../views/OrderDetail.vue";
import OrderDate from "../views/OrderDate.vue";
import OrderWrite from "../views/OrderWrite.vue";
import OrderList from "../views/OrderList.vue";
import Details from "../views/Details.vue";
import Login from "../views/Login.vue";
import Reg from "../views/Register.vue";

import OrderDateChild from "../views/OrderDateChild.vue";
import OrderWriteChild from "../views/OrderWriteChild.vue";

import List from "../components/mint/list.vue";
import ListFirst from "../components/mint/list_first.vue";
import ListSecond from "../components/mint/list_second.vue";
import ListThird from "../components/mint/list_third.vue";
import ListFourth from "../components/mint/list_fourth.vue";
import ListFifth from "../components/mint/list_fifth.vue";

import toTop from "../views/toTop.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/totop", component: toTop },
  { path: "/orderwritechild", component: OrderWriteChild },
  { path: "/orderdatechild", component: OrderDateChild },
  {
    path: "/list",
    component: List,
    children: [
      {
        path: "/",
        redirect: "1",
      },
      {
        path: "1",
        component: ListFirst,
      },
      {
        path: "2",
        component: ListSecond,
      },
      {
        path: "3",
        component: ListThird,
      },
      {
        path: "4",
        component: ListFourth,
      },
      {
        path: "5",
        component: ListFifth,
      },
    ],
  },
  { path: "/", component: Login },
  { path: "/register", component: Reg },

  { path: "/details/:id", component: Details },

  { path: "/orderlist", component: OrderList },
  { path: "/orderdate", component: OrderDate },
  { path: "/orderwrite", component: OrderWrite },

  { path: "/orderdetail", component: OrderDetail },
  { path: "/search", component: Search },
  { path: "/me", component: Me },
  { path: "/tabbar", component: Tabbar },
  {
    path: "/index",
    // name: "Home",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
