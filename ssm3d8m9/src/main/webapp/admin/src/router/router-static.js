import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import gongyingshangxinxi from '@/views/modules/gongyingshangxinxi/list'
    import yuangongxinchou from '@/views/modules/yuangongxinchou/list'
    import yuangong from '@/views/modules/yuangong/list'
    import zhipiaoxinxi from '@/views/modules/zhipiaoxinxi/list'
    import yuangongbaoxiao from '@/views/modules/yuangongbaoxiao/list'
    import shangpinkucun from '@/views/modules/shangpinkucun/list'
    import jizhangpingzheng from '@/views/modules/jizhangpingzheng/list'
    import yuangongjiaokuan from '@/views/modules/yuangongjiaokuan/list'
    import rijizhang from '@/views/modules/rijizhang/list'
    import shangpinruku from '@/views/modules/shangpinruku/list'
    import yuangongguanli from '@/views/modules/yuangongguanli/list'
    import kehuxinxi from '@/views/modules/kehuxinxi/list'
    import bumenfenlei from '@/views/modules/bumenfenlei/list'
    import shangpinchuku from '@/views/modules/shangpinchuku/list'
    import fapiaoxinxi from '@/views/modules/fapiaoxinxi/list'
    import chengbenjieyu from '@/views/modules/chengbenjieyu/list'
    import shangpinleixing from '@/views/modules/shangpinleixing/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/gongyingshangxinxi',
        name: '供应商信息',
        component: gongyingshangxinxi
      }
      ,{
	path: '/yuangongxinchou',
        name: '员工薪酬',
        component: yuangongxinchou
      }
      ,{
	path: '/yuangong',
        name: '员工',
        component: yuangong
      }
      ,{
	path: '/zhipiaoxinxi',
        name: '支票信息',
        component: zhipiaoxinxi
      }
      ,{
	path: '/yuangongbaoxiao',
        name: '员工报销',
        component: yuangongbaoxiao
      }
      ,{
	path: '/shangpinkucun',
        name: '商品库存',
        component: shangpinkucun
      }
      ,{
	path: '/jizhangpingzheng',
        name: '记账凭证',
        component: jizhangpingzheng
      }
      ,{
	path: '/yuangongjiaokuan',
        name: '员工缴款',
        component: yuangongjiaokuan
      }
      ,{
	path: '/rijizhang',
        name: '日记账',
        component: rijizhang
      }
      ,{
	path: '/shangpinruku',
        name: '商品入库',
        component: shangpinruku
      }
      ,{
	path: '/yuangongguanli',
        name: '员工管理',
        component: yuangongguanli
      }
      ,{
	path: '/kehuxinxi',
        name: '客户信息',
        component: kehuxinxi
      }
      ,{
	path: '/bumenfenlei',
        name: '部门分类',
        component: bumenfenlei
      }
      ,{
	path: '/shangpinchuku',
        name: '商品出库',
        component: shangpinchuku
      }
      ,{
	path: '/fapiaoxinxi',
        name: '发票信息',
        component: fapiaoxinxi
      }
      ,{
	path: '/chengbenjieyu',
        name: '成本结余',
        component: chengbenjieyu
      }
      ,{
	path: '/shangpinleixing',
        name: '商品类型',
        component: shangpinleixing
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
