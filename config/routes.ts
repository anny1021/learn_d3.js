export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'home',
    component: './index',
  },
  {
    path: '/chart',
    name: 'chart',
    routes: [
      {
        path: 'bar',
        name: 'bar',
        component: './bar',
      },
    ],
  },
  {
    path: '/documents',
    name: 'documents',
    routes: [
      {
        path: 'init-start',
        name: 'init-start',
        component: './documents/start',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    hideInMenu: true,
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
  },
  {
    component: './404',
  },
];
