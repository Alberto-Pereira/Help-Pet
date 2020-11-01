import Vue from 'vue'
import Router from 'vue-router'
import Entrar from '@/components/Entrar'
import Registrar from '@/components/Registrar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Entrar',
      component: Entrar
    },
    {
      path: '/Registrar',
      name: 'Registrar',
      component: Registrar
    }
  ]
})
