import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetail from '../components/MovieDetail.vue'
import ActorsComponent from '../components/ActorsComponent.vue'
import ActorDetail from '../components/ActorDetail.vue'
import ContactComponent from '../components/ContactComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie/:id',
    name:'movie-detail',
    component: MovieDetail
  },
  {
    path: '/ActorsComponent',
    name:'actors',
    component: ActorsComponent
  },
  {
    path: '/ContactComponent',
    name:'contact',
    component: ContactComponent
  },
  {
    path: '/ActorDetail/:id',
    name: 'actor',
    component: ActorDetail
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
