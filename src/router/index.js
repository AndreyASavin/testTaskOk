import { createRouter, createWebHistory } from 'vue-router';
import MainPage from "@/pages/MainPage";
import PostsPage from "@/pages/PostsPage";
import PostInfo from "@/pages/PostInfo";

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostsPage
  },
  {
    path: '/posts/:id/:userId',
    name: 'Post',
    component: PostInfo, 
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
