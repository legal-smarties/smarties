import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from "@/views/Dashboard.vue";
import ConversationViewer from "@/views/ConversationViewer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'ROUTE_DASHBOARD',
    component: Dashboard,
    children: [
      {
        path: "conversation/:id",
        name: "ROUTE_VIEW_CONVERSATION",
        component: ConversationViewer
      }
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
