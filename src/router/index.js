import { createRouter, createWebHistory } from "vue-router";
import Students from "@/views/Students.vue";
import Grades from "@/views/Grades.vue";
import CreateStudent from "@/views/CreateStudent.vue";

const routes = [
  {
    path: "/",
    name: "Students",
    component: Students,
  },
  {
    path: "/grades",
    name: "Grades",
    component: Grades,
  },
  {
    path: "/create-student",
    name: "CreateStudent",
    component: CreateStudent,
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
