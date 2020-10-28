import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'userLoginIn',
    component: ()=>import('../views/userLoginIn.vue')
  },
  {
    path: '/userMsg',
    name: 'userMsg',
    component: () => import('../views/userMsg.vue')
  },
  {
    path:'/userLoginIn',
    name:'userLoginIn',
    component:()=>import('../views/userLoginIn.vue')
  },
  {
    path:'/servicerMsg',
    name:'servicerMsg',
    component:()=>import('../views/servicerMsg.vue')
  },
  {
    path:'/userOrder',
    name:'userOrder',
    component:()=>import('../views/userOrder.vue')
  },
  {
    path:'/servicerOrder',
    name:'servicerOrder',
    component:()=>import('../views/servicerOrder.vue')
  },
  {
    path:'/my',
    name:'my',
    component:()=>import('../views/my.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 进度条配置项这样写
NProgress.configure({
  showSpinner: false
});

// 路由跳转前钩子函数中 - 执行进度条开始加载
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

// 路由跳转后钩子函数中 - 执行进度条加载结束
router.afterEach(() => {
	NProgress.done();
});


export default router
