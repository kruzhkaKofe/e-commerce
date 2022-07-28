import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "@/views/HomePage";
import BlogPage from "@/views/BlogPage";
import OctoberCollection from "@/views/OctoberCollection";

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
  {
    path: "/blog/:id",
    component: () => import("@/views/BlogDetails"),
  },
  {
    path: "/october-collection",
    component: OctoberCollection,
  },
  {
    path: "/october-collection/:id",
    component: () => import("@/views/OctoberCollectionDetails"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
