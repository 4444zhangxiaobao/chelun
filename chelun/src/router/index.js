import Vue from 'vue'
import Router from 'vue-router'
import Car from '../components/car/carlist'
import Details from '../components/details/details'
import Photos from '../components/photos/photos'
import CarK from '../components/carK/carK'
import Imagess from '../components/imagess/imagess'
import BottomPrice from '../components/bottomPrice/bottomPrice'
import City from '../components/city/city'
import Banner from '../components/banner/banner'
import Login from '../components/login/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/car',
      name: 'car',
      component:Car
    },
    {
      path: '/details/:id',
      name: 'details',
      component:Details
    },
    {
      path: '/photos/:id',
      name: 'photos',
      component:Photos
    },{
      path: '/carK/:id',
      name: 'carK',
      component:CarK
    },{
      path: '/imagess/:id',
      name: 'imagess',
      component:Imagess
    },{
      path: '/bottomPrice/:id',
      name: 'bottomPrice',
      component:BottomPrice
    },{
      path: '/city/:id',
      name: 'city',
      component:City
    },{
      path: '/banner/:id',
      name: 'banner',
      component:Banner
    },{
      path: '/login',
      name: 'login',
      component:Login
    }
  ]
})
