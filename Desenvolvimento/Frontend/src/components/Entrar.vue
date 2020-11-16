<template>
  
  <div class="entrar w3-center w3-col">
    <!--<span class="w3-text-green w3-margin-top w3-col s6 m6 l6"><h1>Entrar</h1></span>-->
    <img class="centralizado" src="../assets/imagens/logo.png">

    <form class="w3-container">
      <input class="w3-input w3-margin-bottom" type="email" v-model="email" placeholder="Email">
      <input class="w3-input w3-margin-bottom w3-margin-top" type="password" v-model="senha" placeholder="Senha">
      <button @click="logar()" class="w3-btn w3-blue w3-round-xxlarge w3-margin-top  w3-margin-bottom w3-col">Entrar</button>
      <span @click="recuperarSenha()" class="w3-text-green w3-margin-top">Perdeu sua senha?</span>
      &nbsp;
      &nbsp;
      <router-link to="/Registrar" class="w3-text-green w3-margin-top">Criar conta?</router-link>
    </form>
    
    <mensagem ref="enviaMensagem"/>
  </div>
</template>

<script>
import Mensagem from '@/components/Mensagem'
import api from '@/components/api.js';
import axios from 'axios' 


export default {
  components:{
    Mensagem
  },
  name: 'Entrar',
  data () {
    return {
      senha:'',
      email:'',
      url: window.location.origin,
      api:api,
      parametros_usuario:{}
    }
  },
  mounted(){
   
    let parametros_locais = localStorage.getItem('parametros-usuario');
    if(this.parametros_locais){
      this.email = parametros_locais.email;
      this.senha = parametros_locais.senha;
      this.login();
    }
  },
  
  methods:{
    async logar(){
    
      /* validação de email*/
      let usuario = this.email.substring(0, this.email.indexOf("@"));
      let dominio = this.email.substring(this.email.indexOf("@")+ 1, this.email.length);
      if ((usuario.length >=1) &&
          (dominio.length >=3) &&
          (usuario.search("@")==-1) &&
          (dominio.search("@")==-1) &&
          (usuario.search(" ")==-1) &&
          (dominio.search(" ")==-1) &&
          (dominio.search(".")!=-1) &&
          (dominio.indexOf(".") >=1)&&
          (dominio.lastIndexOf(".") < dominio.length - 1))
        {
               console.log(this.api)
          let email = this.email;
          let password = this.senha;
          let parametros = {
            email: this.email,
            password: this.senha
          }
          
          let resposta = await api.get("/users");
          console.log(JSON.stringify(resposta.data))
        /*
          try {
            this.api.get('/loginUser/?'+JSON.stringify({
            email: this.email,
            password: this.senha
          }))
          .then(response=> {
            //console.log(response);
            //this.parametros_usuario = response;
            //parametros_usuario.email = email;
            //parametros_usuario.senha = senha;
            //parametros_usuario.logado = true;
            //localStorage.setItem('parametros-usuario', parametros_usuario);
            //this.$router.replace("Perfil");
          })
          .catch(error=>{
            //console.log(error);
            console.log("entrei falhei")
            //return this.$refs.enviaMensagem.exclamar("erro", "Login inválido!");
          });
            
          } catch (error) {
            console.log("falhei na requisição")
            return
            //return this.$refs.enviaMensagem.exclamar("erro", "Houve falha na requisição!");
          }*/
        }
        else{
          //this.$refs.enviaMensagem.exclamar("erro", "E-mail inválido");
          //this.email = this.email;
        }
       
        

    },
    recuperarSenha(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  max-width: 150px;
  height: 150;
}
</style>
