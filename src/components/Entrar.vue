<template>
  <div
    class="geral w3-container cor-fundo-app extender-div-tela-toda"
    style="padding:0px;"
  >
    <div v-show="processando" class="wrapper">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
    </div>

    <div class="w3-col w3-center">
       <img class="detalhe-foto-pet w3-center" :src="logo" width="100" height="100">
    </div>

    <form class="w3-container w3-margin-top font-cinza-claro w3-col w3-center">
      <center>
      <input
        class="w3-input w3-margin-top w3-round"
        style="max-width: 350px;"
        autocomplete="off"
        v-model="email"
        type="email"
        placeholder="Email"
      />
      <input
        class="w3-input w3-margin-top w3-round"
        style="max-width: 350px;"
        autocomplete="off"
        v-model="senha"
        type="password"
        placeholder="Senha"
      />
      </center>
    </form>

    <div class="w3-col margin-top-50 padding-10">
      <button
        @click="login()"
        class="w3-col w3-btn  w3-center fundo-roxo w3-text-white"
      >
        Login
      </button>
    </div>
    <div class="w3-col w3-margin-bottom w3-center">
      <router-link to="/Registrar">
        <h7 class="w3-col s6 l6 m6 padding-10 w3-text-green">Criar conta</h7>
      </router-link>
       <router-link to="/">
        <h7 class="w3-col s6 l6 m6 padding-10 w3-text-green">Esqueçeu a senha?</h7>
      </router-link>
    </div>
    <mensagem ref="enviaMensagem" />
  </div>
</template>

<script>
import Mensagem from "@/components/Mensagem";
import api from "../service/api";

export default {
  name: "Registrar",
  components: {
    Mensagem
  },
  data() {
    return {
      nome: "",
      sobre_nome: "",
      senha: "",
      confirma_senha: "",
      email: "",
      parametros_usuario: undefined,
      processando: false,
      concordar: undefined,
      logo: require("../assets/imagens/logo.svg")
    };
  },
  mounted() {
    let logado = localStorage.getItem("autorizacao");
    if(logado != "logado"){
      this.$router.push({ name: "Entrar" });
    }else if(logado == "logado"){
       this.$router.push({ name: "Perfil" });
    }
  },
  methods: {
    async login() {
      try {
        /* validação de email*/
        let usuario = this.email.substring(0, this.email.indexOf("@"));
        let dominio = this.email.substring(
          this.email.indexOf("@") + 1,
          this.email.length
        );

        const resposta = await api.post("/loginUser", {
          password: this.senha,
          email: this.email
        });
        if (resposta.status == 201 || resposta.status == 200) {
          this.processando = false;
          localStorage.setItem("autorizacao", "logado");
          localStorage.setItem('parametros-usuario', resposta.data)
          this.$router.push({ name: "Perfil" });
        }
      } catch (error) {
        this.processando = false;
        this.email = this.email;
        this.$refs.enviaMensagem.exclamar(
          "erro",
          "Não foi possivel realizar o login"
        );
        return;
      }
    }
  }
};
</script>

<style scoped></style>
