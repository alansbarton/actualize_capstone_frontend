import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import UsersShow from "../views/UsersShow.vue";
import MessagesIndex from "../views/MessagesIndex.vue";
import Map from "../views/Map.vue";


Vue.use(VueRouter);

const routes = [
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/", name: "login", component: Login, meta: {header: 0, footer: 0} },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/users/:id", name: "users-show", component: UsersShow},
  { path: "/messages/:id", name: "messages-index", component: MessagesIndex},
  { path: '/Map', name: 'map', component: Map, meta: {header: 0, footer: 0, java: 0} },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
