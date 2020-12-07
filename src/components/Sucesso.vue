<template>
  <div class="geral w3-container cor-fundo-app-azul extender-div-tela-toda">
    <div
      class="w3-col cor-fundo-app-branca margin-top-150 border-radius padding-30"
    >
      <h2 class="w3-center bold">Parabéns</h2>
      <div class="font-cinza-meio-claro w3-center">
        Você cadastrou seu e-mail e senha com sucesso, faça login e complete o
        seu cadastro.
      </div>
      <router-link to="/Entrar">
        <button
          class="w3-col w3-btn w3-round-xxlarge w3-center fundo-roxo w3-text-white margin-top-80 w3-margin-bottom"
        >
          Fazer login
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sucesso",
  data() {
    return {};
  },
  mounted() {
    let parametros_login = localStorage.getItem("autorizacao");
    let parametros_usuario = localStorage.getItem("parametros-usuario");
    if (
      (!parametros_login && parametros_usuario == "deslogado") ||
      !parametros_usuario
    ) {
      this.$router.push({ name: "Entrar" });
    }
  },
};
</script>

<style scoped>
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
</style>
