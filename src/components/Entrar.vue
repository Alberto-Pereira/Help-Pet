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

    <div class="w3-blue w3-col">
      <h2 class="w3-col w3-center bold-500">Login</h2>
    </div>

    <div class="w3-row w3-margin-bottom">
      <router-link to="/Entrar">
        <h6 class="w3-col padding-10 w3-text-purple">Entrar</h6>
      </router-link>
    </div>

    <form class="w3-container w3-margin-top font-cinza-claro">
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
    </form>

    <div class="w3-row margin-top-50">
      <button
        @click="login()"
        class="w3-col w3-btn w3-round-xxlarge w3-center fundo-roxo w3-text-white"
      >
        Login
      </button>
    </div>
    <div class="w3-row w3-margin-bottom">
      <router-link to="/Registrar">
        <h7 class="w3-col padding-10 w3-text-green">Criar conta</h7>
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
      concordar: undefined
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
          "Não foi possivel realizar o cadastro, cadastro já existente"
        );
        return;
      }
    }
  }
};
</script>

<style scoped></style>
