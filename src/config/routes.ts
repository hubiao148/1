/*
 * @Author: hcy
 * @Date: 2022-10-04 17:08:52
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-18 17:41:12
 * @FilePath: \src\config\routes.ts
 * @Description: 路由
 *
 */

export default [
  // 路由表
  {
    //登录注册页面
    path: '/beforeLogin',
    component: '@/pages/BeforeLogin',
    routes: [
      {
        path: '/beforeLogin/login',
        component: '@/pages/BeforeLogin/components/Login',
      },
      {
        path: '/beforeLogin/register',
        component: '@/pages/BeforeLogin/components/Register',
      },
    ],
  },

  {
    //主要页面
    path: '/',
    component: '@/layouts',
    routes: [
      { path: '/', redirect: '/home' },
      {
        path: '/home',
        component: '@/pages/Home',
      },
      { path: '/case', component: '@/pages/Case' },
      { path: '/task', component: '@/pages/Task' },
      {
        path: 'myshare', component: '@/pages/myShare',
        routes: [
          { path:'/myshare/latest',component:'@/pages/myShare/components/Latest'},
          { path:'/myshare/reply',component:'@/pages/myShare/components/Reply'},
          { path:'/myshare/mouth',component:'@/pages/myShare/components/Mouth'},
          { path:'/myshare/week',component:'@/pages/myShare/components/Week'},
        ]
      },
      {
        path: '/user',
        component: '@/pages/User',
        routes: [
          {
            path: '/user/usermsgs',
            component: '@/pages/User/components/UserMsgs',
          },
          {
            path: '/user/mycases',
            component: '@/pages/User/components/MyCases',
          },
          {
            path: '/user/myquestions',
            component: '@/pages/User/components/MyQuestions',
          },
          { path: '/user/myasks', component: '@/pages/User/components/MyAsks' },
          {
            path: '/user/myshares',
            component: '@/pages/User/components/MyShares',
          },
        ],
      },
      { component: '@/pages/404' },
    ],
  },

  { component: '@/pages/404' },
];
