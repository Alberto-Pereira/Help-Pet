import Vue from 'vue'
import Router from 'vue-router'
import Entrar from '@/components/Entrar'
import Registrar from '@/components/Registrar'
import Perfil from '@/components/Perfil'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/Perfil',
      name: 'Perfil',
      component: Perfil
    }
  ]
})
