<template>
  
  <div class="entrar w3-center w3-col">
    <!--<span class="w3-text-green w3-margin-top w3-col s6 m6 l6"><h1>Entrar</h1></span>-->
    <img class="centralizado" src="../assets/imagens/logo.png">

    <form class="w3-container">
      <input class="w3-input w3-margin-bottom" type="text" v-model="email" placeholder="Email">
      <input class="w3-input w3-margin-bottom w3-margin-top" type="text" v-model="senha" placeholder="Senha">
      <button @click="logar()" class="w3-btn w3-blue w3-round-xxlarge w3-margin-top  w3-margin-bottom w3-col">Entrar</button>
      <span @click="recuperarSenha()" class="w3-text-green w3-margin-top">Perdeu sua senha?</span>
    </form>
    
    <mensagem ref="enviaMensagem"/>
  </div>
</template>

<script>
import Mensagem from '@/components/Mensagem'
export default {
  components:{
    Mensagem
  },
  name: 'Entrar',
  data () {
    return {
      senha:'',
      email:''
    }
  },
  
  methods:{
    logar(){
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
          this.$refs.enviaMensagem.exclamar("sucesso", "E-mail válido");
        }
        else{
          this.$refs.enviaMensagem.exclamar("erro", "E-mail inválido");
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
  max-width: 25vw;
  height: 35vw;
}
</style>
