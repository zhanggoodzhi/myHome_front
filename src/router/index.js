import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/posts/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index,
      children: [
        {
          path: '/',
          name: '所有文章',
          component: Posts
        }
      ]
    },
    // 管理博客系统
    {
      path: '/admin',
      name: '博客管理',
      component: Admin,
      children: [
        {
          path: '/',
          name: '文章列表页首页',
          component: PostsList
        },
        {
          path: '/admin/postsList',
          name: '文章列表页',
          component: PostsList
        },
        {
          path: '/admin/createPost',
          name: '新增文章',
          component: CreatePost
        },
        {
          path: '/admin/editPost/:id',
          name: '编辑页面',
          component: CreatePost
        }
      ]
    },
    // 登录页面
    // {
    //   path: '/login',
    //   name: '登录页面',
    //   component: Login
    // }
  ]
})
