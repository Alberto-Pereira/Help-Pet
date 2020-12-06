<template>
  <div
    class="geral w3-container extender-div-tela-toda w3-small cor-fundo-app"
    style="padding: 0"
  >
    <!-- Corpo -->
    <div class="margin-top-80">
      <h1 class="w3-center">Recuperar Senha</h1>
      <div class="w3-row">
        <div class="w3-third w3-container"></div>
        <div class="w3-third w3-container">
          <!-- Bloco 1 -->
          <label for="cpf"></label>
          <the-mask
            :mask="['###.###.###-##']"
            id="cpf"
            class="w3-input w3-round w3-margin-top"
            type="text"
            v-model="cpf"
            placeholder="Cpf:"
          />
          <!-- Bloco 1 -->
        </div>
        <div class="w3-third w3-container"></div>
      </div>

      <div class="w3-row">
        <div class="w3-third w3-container"></div>
        <div class="w3-third w3-container">
          <!-- Bloco 2 -->
          <label for="telefone"></label>
          <the-mask
            :mask="['(##) ####-####', '(##) #####-####']"
            id="telefone"
            class="w3-input w3-round w3-margin-top"
            placeholder="Telefone:"
            v-model="telefone"
          />
          <!-- Bloco 2 -->
        </div>
        <div class="w3-third w3-container"></div>
      </div>

      <div class="w3-row">
        <div class="w3-third w3-container"></div>
        <div class="w3-third w3-container">
          <!-- Bloco 3 -->
          <button
            @click="recuperar()"
            class="w3-col w3-btn w3-center fundo-roxo w3-text-white margin-top-30 w3-round"
          >
            Recuperar Senha
          </button>
          <!-- Bloco 3 -->
        </div>
        <div class="w3-third w3-container"></div>
      </div>
    </div>
    <!-- Fim Corpo -->

    <!-- Float Button -->
    <nav
      class="container w3-display-bottomright w3-padding"
      style="position: fixed"
    >
      <router-link
        to="/Entrar"
        style="
          font-size: 20px;
          padding: 4px !important;
          padding-left: 9px !important;
        "
        class="buttons w3-orange"
        tooltip="Voltar para login"
      >
        <i class="fas fa-arrow-left"></i>
      </router-link>

      <a
        class="buttons w3-blue"
        style="
          font-size: 30px;
          padding: 4px !important;
          padding-left: 10px !important;
        "
        href="#"
      >
        <i class="fas fa-paw"></i>
      </a>
    </nav>
    <!-- Fim Float Button -->

    <!-- Componente de Mensagem -->
    <Mensagem ref="enviarMensagem" />
    <!-- Fim do Componente de Mensagem -->
  </div>
</template>

<script>
import Mensagem from "@/components/Mensagem";
import { TheMask } from "vue-the-mask";

export default {
  name: "RecuperarLogin",
  components: {
    Mensagem,
    TheMask,
  },
  data() {
    return {
      cpf: "",
      telefone: "",
    };
  },
  mounted() {
    let logado = localStorage.getItem("autorizacao");
    if (logado === "logado") {
      this.$router.push({ name: "Perfil" });
    }
  },
  methods: {
    async recuperar() {
       const resposta = await api.post("/orgotPassword", {
          cpf: this.cpf,
          fone: this.telefone,
        });
        if(resposta.data.idUser){
          await localStorage.setItem("id-forgot", resposta.data.idUser)
          this.$router.push({ name: "NovaSenha" });
        }else{
          this.$refs.enviarMensagem.exclamar("erro", "Não foi possivel processar")
        }
    },
  },
};
</script>

<style scoped>
.margin-top-30 {
  margin-top: 30px;
}
</style>
