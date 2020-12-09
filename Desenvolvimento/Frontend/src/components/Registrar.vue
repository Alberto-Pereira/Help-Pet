<template>
  <div
    class="geral w3-container cor-fundo-app extender-div-tela-toda"
    style="padding: 0px"
  >
    <div v-show="processando" class="wrapper">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
    </div>

    <div class="w3-blue w3-col w3-margin-bottom">
      <h2 class="w3-col w3-center bold-500">Inscrever-se</h2>
    </div>

    <form class="w3-container w3-margin-top font-cinza-claro">
      <input
        class="w3-input w3-margin-top w3-round"
        v-model="nome"
        type="text"
        placeholder="Nome"
      />
      <input
        class="w3-input w3-margin-top w3-round"
        v-model="sobre_nome"
        type="text"
        placeholder="Sobrenome"
      />
      <input
        class="w3-input w3-margin-top w3-round"
        autocomplete="off"
        v-model="email"
        type="email"
        placeholder="Email"
      />
      <input
        class="w3-input w3-margin-top w3-round"
        autocomplete="off"
        v-model="senha"
        type="password"
        placeholder="Senha"
      />
      <input
        class="w3-input w3-margin-top w3-round"
        autocomplete="off"
        v-model="confirma_senha"
        type="password"
        placeholder="Confirmar senha"
      />
      <input class="margin-top-30" v-model="concordar" type="checkbox" />
      <label>Concordar com os termos de uso.</label>
    </form>

    <div class="w3-row margin-top-50">
      <button
        @click="gravar()"
        class="w3-col w3-btn w3-round-xxlarge w3-center fundo-roxo w3-text-white"
      >
        Cadastrar
      </button>
    </div>

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

    <mensagem ref="enviaMensagem" />
  </div>
</template>

<script>
import Mensagem from "@/components/Mensagem";
import api from "../service/api";

export default {
  name: "Registrar",
  components: {
    Mensagem,
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
    };
  },
  mounted() {},
  methods: {
    async gravar() {
      if (!this.concordar) {
        this.$refs.enviaMensagem.exclamar(
          "erro",
          "Você deve concordar com as politicas de uso!"
        );
        return;
      }
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
          if (this.senha !== this.confirma_senha) {
            this.$refs.enviaMensagem.exclamar("erro", "Senhas diferentes!");
            return;
          }
          this.processando = true;

          const resposta = await api.post("/newUser", {
            name: this.nome,
            password: this.senha,
            lastName: this.sobre_nome,
            email: this.email,
            typeUser: "A",
          });
          if (resposta.status == 201 || resposta.status == 200) {
            this.processando = false;
            localStorage.setItem("autorizacao", false);
            this.$router.push({ name: "Sucesso" });
          }
        }
      } catch (error) {
        this.processando = false;
        this.email = this.email;
        this.$refs.enviaMensagem.exclamar(
          "erro",
          "Não foi possivel realizar o cadastro, cadastro já existente"
        );
        return;
      }
    },
  },
};
</script>

<style scoped>
</style>
