import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "@/views/HomePage";
import BlogPage from "@/views/BlogPage";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/blog",
    component: BlogPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
