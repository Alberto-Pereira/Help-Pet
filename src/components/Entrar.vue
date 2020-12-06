<template>
  <div
    class="geral w3-container cor-fundo-app extender-div-tela-toda"
    style="padding:0;"
  >
   <div class="w3-modal" v-if="processando" style="display:block;padding-top: 90%;">
      <div class="w3-modal-content">
        <div class="w3-container w3-margin-top" style="padding:0px;">
            <div class="wrapper">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="shadow"></div>
              <div class="shadow"></div>
              <div class="shadow"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="w3-col w3-center margin-bottom-30">
       <img class="detalhe-foto-pet w3-center" :src="logo" width="100" height="100" alt="">
    </div>

    <!-- Corpo -->
    <div>
      <div class="w3-row">
        <div class="w3-third w3-container"></div>
        <div class="w3-third w3-container">
          <!-- Bloco 1 -->
          <label for="email"></label>
          <input autocomplete="off" class="w3-input w3-round w3-margin-top" placeholder="Email" type="email" v-model="email" id="email"/>
          <!-- Bloco 1 -->
        </div>
        <div class="w3-third w3-container"></div>
      </div>

      <div class="w3-row">
        <div class="w3-third w3-container"></div>
        <div class="w3-third w3-container">
          <!-- Bloco 2 -->
          <label for="senha"></label>
          <input autocomplete="off" class="w3-input w3-round w3-margin-top" placeholder="Senha" type="password" v-model="senha" id="senha"/>
          <!-- Bloco 2 -->
        </div>
        <div class="w3-third w3-container"></div>
      </div>

      <div class="w3-row">
        <div class="w3-third w3-container"></div>
        <div class="w3-third w3-container">
          <!-- Bloco 3 -->
          <button @click="login()" class="w3-col w3-btn w3-center fundo-roxo w3-text-white margin-top-30 w3-round">Login</button>
          <!-- Bloco 3 -->
        </div>
        <div class="w3-third w3-container"></div>
      </div>

      <div class="w3-row">
        <div class="w3-third w3-container"></div>
        <div class="w3-third w3-container">
          <!-- Bloco 4 -->
          <div class="w3-col w3-margin-top w3-center">
            <router-link to="/Registrar">
              <h6 class="w3-col s6 l6 m6 padding-10 w3-text-green">Criar conta</h6>
            </router-link>
            <router-link to="/RecuperarLogin">
              <h6 class="w3-col s6 l6 m6 padding-10 w3-text-green">Esqueçeu a senha?</h6>
            </router-link>
          </div>
          <!-- Fim do Bloco 4-->
        </div>
        <div class="w3-third w3-container"></div>
      </div>
    </div>
    <!-- Fim Corpo -->

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
    if(logado === "logado"){
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
          localStorage.setItem('parametros-usuario', JSON.stringify(resposta.data))
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

<style scoped>

  .margin-bottom-30{
    margin-bottom: 30px;
  }

</style>
