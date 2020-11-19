<template>

  <div class="geral w3-container cor-fundo-app extender-div-tela-toda" style="padding:0px;">
    <div class="w3-blue w3-col" >
      <h2 class="w3-col w3-center bold-500">Inscrever-se</h2>
    </div>

    <div class="w3-row w3-margin-bottom">
      <router-link to="/Entrar">
        <h6 class="w3-col padding-10 w3-text-purple">Entrar</h6>
      </router-link>
    </div>

    <form class="w3-container w3-margin-top font-cinza-claro">
      <input class="w3-input w3-margin-top w3-round" v-model="nome" type="text" placeholder="Nome">
      <input class="w3-input w3-margin-top w3-round" v-model="sobre_nome" type="text" placeholder="Sobre nome">
      <input class="w3-input w3-margin-top w3-round" v-model="email" type="email" placeholder="Email">
      <input class="w3-input w3-margin-top w3-round" v-model="senha" type="password" placeholder="Senha">
      <input class="w3-input w3-margin-top w3-round" v-model="confirma_senha" type="password" placeholder="Confirmar senha">
      <input class="margin-top-30" type="checkbox">
      <label>Concordar com os termos de uso.</label>
    </form>

    <div class="w3-row margin-top-50">
      <button @click="gravar()" class="w3-col w3-btn w3-round-xxlarge w3-center fundo-roxo w3-text-white">Cadastrar</button>
    </div>
    <mensagem ref="enviaMensagem" />
  </div>

</template>

<script>
import Mensagem from "@/components/Mensagem";
import api from "../service/api";

export default {
  name: 'Registrar',
   components: {
    Mensagem
  },
  data () {
    return {
      nome:'',
      sobre_nome: '',
      senha: '',
      confirma_senha: '',
      email: '',
      parametros_usuario: undefined
    }
  },
  mounted(){
    let parametros_login = localStorage.getItem("autorizacao");
    if (parametros_login === "autorizado") {
      this.$router.push({ name: 'Perfil' });
    }
  },
  methods:{
    async gravar(){
       try {
         /* validação de email*/
        let usuario = this.email.substring(0, this.email.indexOf("@"));
        let dominio = this.email.substring(
          this.email.indexOf("@") + 1,
          this.email.length
        );
        if (
          usuario.length >= 1 &&
          dominio.length >= 3 &&
          usuario.search("@") == -1 &&
          dominio.search("@") == -1 &&
          usuario.search(" ") == -1 &&
          dominio.search(" ") == -1 &&
          dominio.search(".") != -1 &&
          dominio.indexOf(".") >= 1 &&
          dominio.lastIndexOf(".") < dominio.length - 1
        ) {
          if(this.senha !== this.confirma_senha){
             this.$refs.enviaMensagem.exclamar("erro", "Senhas diferentes!");
             return;
          }
        
          const resposta = await api
            .post("/newUser", {
              name: this.nome,
              password: this.senha,
              lastName: this.sobre_nome,
              email: this.email,
              typeUser: "A"
            })
            console.log(resposta);
            
            localStorage.setItem('logado', JSON.stringify({logado:true}));
            window.location.href = window.location.origin+"/Sucesso";
            return;
            
          }
        } catch (error) {
          
          console.log("falhei na requisição");
          this.email = this.email;
          this.$refs.enviaMensagem.exclamar("erro", error.data);
          return;
        }
       
    } 
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
