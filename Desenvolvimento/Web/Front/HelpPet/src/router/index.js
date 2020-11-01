import Vue from 'vue'
import Router from 'vue-router'
import Entrar from '@/components/Entrar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Entrar',
      component: Entrar
    }
  ]
})
