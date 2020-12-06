import Vue from 'vue'
import Router from 'vue-router'
import Entrar from '@/components/Entrar'
import Registrar from '@/components/Registrar'
import Perfil from '@/components/Perfil'
import Sucesso from '@/components/Sucesso'
import DadosPessoais from '@/components/DadosPessoais'
import DetalhesPet from '@/components/DetalhesPet'
import DadosPet from '@/components/DadosPet'
import GerarOcorrencia from '@/components/GerarOcorrencia'
import ApresentacaoEntrada from '@/components/ApresentacaoEntrada'
import Endereco from '@/components/Endereco'
import MuralPets from '@/components/MuralPets'
import RecuperarLogin from '@/components/RecuperarLogin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ApresentacaoEntrada',
      component: ApresentacaoEntrada
    },
    {
      path: '/Entrar',
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
    },
    {
      path: '/Sucesso',
      name: 'Sucesso',
      component: Sucesso
    },
    {
      path: '/DadosPessoais',
      name: 'DadosPessoais',
      component: DadosPessoais
    },
    {
      path: '/DetalhesPet',
      name: 'DetalhesPet',
      component: DetalhesPet
    },
    {
      path: '/DadosPet',
      name: 'DadosPet',
      component: DadosPet
    },
    {
      path: '/GerarOcorrencia',
      name: 'GerarOcorrencia',
      component: GerarOcorrencia
    },
    {
      path: '/MuralPets',
      name: 'MuralPets',
      component: MuralPets
    },
    {
      path: '/Endereco',
      name: 'Endereco',
      component: Endereco
    },
    {
      path: '/RecuperarLogin',
      name: 'RecuperarLogin',
      component: RecuperarLogin
    },

  ]
})
