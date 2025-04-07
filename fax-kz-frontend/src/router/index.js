import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardView from '../views/CardView.vue';
import CreateCardView from '../views/CreateCardView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/card/:username',
      name: 'cardView',
      component: CardView,
    },
    {
      path: '/create',         // URL-адрес этой страницы
      name: 'createCard',    // Уникальное имя маршрута
      component: CreateCardView // Компонент Vue, который нужно показать
    }

  ],
})

export default router
