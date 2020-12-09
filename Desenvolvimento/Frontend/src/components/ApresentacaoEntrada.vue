<template>
  <div class="geral w3-container extender-div-tela-toda cor-fundo-app-azul">
    <div class="w3-center margin-top-100">
      <img
        class="w3-animate-zoom"
        src="../assets/imagens/logo-entrada.png"
        width="300"
        height="300"
      />
      <i class="fas fa-paw pata1"></i>
      <i class="fas fa-paw pata2"></i>
      <i class="fas fa-paw pata3"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApresentacaoEntrada",
  data() {
    return {};
  },
  mounted() {
    let parametros_login = localStorage.getItem("autorizacao");
    if (parametros_login === "autorizado") {
      this.$router.push({ name: "Perfil" });
    } else {
      setTimeout(() => {
        this.redirect();
      }, 9000);
    }
  },
  methods: {
    redirect() {
      this.$router.push({ name: "Entrar" });
    },
  },
};
</script>

<style scoped>
@keyframes pata-some {
  from {
    color: black;
  }
  to {
    color: transparent;
  }
}

.pata1 {
  width: 100px;
  height: 100px;
  z-index: 1000;
  margin-left: 20px;
  font-size: 30px;
  color: transparent;
  animation-name: pata-some;
  animation-duration: 1s;
}
.pata2 {
  width: 100px;
  height: 100px;
  margin-right: 30px;
  font-size: 40px;
  z-index: 1000;
  color: transparent;

  animation-name: pata-some;
  animation-duration: 3s;
}
.pata3 {
  width: 100px;
  height: 100px;
  color: transparent;
  padding: 10%;
  font-size: 50px;
  margin-right: 50px;
  animation-name: pata-some;
  animation-duration: 8s;
  z-index: 1000;
  margin-bottom: 150px !important;
}
.logo {
  animation-name: logo;
  animation-duration: 9s;
}

.margin-top-100 {
  margin-top: 100px;
}
</style>
