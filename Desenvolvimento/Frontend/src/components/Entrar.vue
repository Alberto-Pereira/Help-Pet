<template>
  <div class="entrar w3-center w3-col">
    <!--<span class="w3-text-green w3-margin-top w3-col s6 m6 l6"><h1>Entrar</h1></span>-->
    <img class="centralizado" src="../assets/imagens/logo.png" />

    <form class="w3-container">
      <input
        class="w3-input w3-margin-bottom"
        type="email"
        v-model="email"
        placeholder="Email"
      />
      <input
        class="w3-input w3-margin-bottom w3-margin-top"
        type="password"
        v-model="senha"
        placeholder="Senha"
      />
      <button
        @click="logar()"
        class="w3-btn w3-blue w3-round-xxlarge w3-margin-top  w3-margin-bottom w3-col"
      >
        Entrar
      </button>
      <span @click="recuperarSenha()" class="w3-text-green w3-margin-top"
        >Perdeu sua senha?</span
      >
      &nbsp; &nbsp;
      <router-link to="/Registrar" class="w3-text-green w3-margin-top"
        >Criar conta?</router-link
      >
    </form>

    <mensagem ref="enviaMensagem" />
  </div>
</template>

<script>
import Mensagem from "@/components/Mensagem";
import api from "../service/api";

export default {
  components: {
    Mensagem
  },
  name: "Entrar",
  data() {
    return {
      senha: "",
      email: "",
      parametros_usuario: undefined
    };
  },
  mounted() {
    this.parametros_locais = JSON.stringify(localStorage.getItem("parametros-usuario"));
    if (this.parametros_locais) {
      this.email = this.parametros_locais.email;
      this.senha = this.parametros_locais.senha;
      this.logar();
    }
  },

  methods: {
    logar() {
      this.parametros_usuario = []
      api.post("/loginUser", {
        email: this.email,
        password: this.senha
      }).then(function (response) {
        if(response){
          window.location.href = window.location.origin+"/Perfil"
          localStorage.setItem('parametros-usuario', JSON.stringify(response.data));
        }
       
      }).catch(function (error) {
        //this.$refs.enviaMensagem.exclamar("erro", "Houve falha na requisição!");
        console.log(error);
         
      })
      
    },
    recuperarSenha() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 150px;
  height: 150;
}
</style>
