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
          try {
            axios.post(this.url+'/loginUser', {
            email: this.email,
            password: this.senha
          })
          .then(function (response) {
            console.log(response);
            let parametros_usuario = response.data;
            parametros_usuario.email = email;
            parametros_usuario.senha = senha;
            parametros_usuario.logado = true;
            localStorage.setItem('parametros-usuario', parametros_usuario);
            this.$router.replace("Perfil");
          })
          .catch(function (error) {
            console.log(error);
            this.$refs.enviaMensagem.exclamar("erro", "Login inválido!");
          });
            
          } catch (error) {
            this.$refs.enviaMensagem.exclamar("erro", "Houve falha na requisição!");
          }
        }
        else{
          await this.$refs.enviaMensagem.exclamar("erro", "E-mail inválido");
          this.email = this.email;
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
