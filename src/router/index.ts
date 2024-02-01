import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("@/views/home/index.vue"),
    },
    {
      path: "/project",
      component: () => import("@/views/project/index.vue"),
    },
    {
      path: "/blog",
      component: () => import("@/views/blog/index.vue"),
    },
    {
      path: "/life",
      component: () => import("@/views/life/index.vue")
    },
    {
      path: "/resume",
      component: () => import("@/views/resume/index.vue")
    },
    {
      path: "/about",
      component: () => import("@/views/about/index.vue"),
    },
  ],
});

export default router;
