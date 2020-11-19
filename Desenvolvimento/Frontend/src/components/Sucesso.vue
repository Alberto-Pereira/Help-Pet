<template>

  <div class="geral w3-container cor-fundo-app-azul extender-div-tela-toda">

    <div class="w3-col cor-fundo-app-branca margin-top-150 border-radius padding-30">
      <h2 class="w3-center bold">Parabéns</h2>
      <div class="font-cinza-meio-claro w3-center">Você cadastrou seu e-mail e senha com sucesso clique nas opções para segunda etapa do cadastro</div>
      <router-link to="/DadosPessoais">
        <button class="w3-col w3-btn w3-round-xxlarge w3-center fundo-roxo w3-text-white margin-top-80 w3-margin-bottom">Completar dados pessoais</button>
      </router-link>
      <router-link to="/Dadospet">
        <h6 class="w3-center w3-text-blue bold-500">Cadastrar meu pet</h6>
      </router-link>
    </div>

  </div>

</template>

<script>
  export default {
    name: "Sucesso",
    data () {
      return {
        
      }
    },
    mounted(){
      let parametros_login = localStorage.getItem("autorizacao");
      if(parametros_login !== "autorizado"){
          this.$router.push({ name: 'Entrar' });
        }
    },
  }
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
