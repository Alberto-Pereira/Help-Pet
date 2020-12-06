<template>
  <div class="geral w3-container extender-div-tela-toda w3-small cor-fundo-app" style="padding:0;">

    <!-- Corpo -->
    <div class="margin-top-80">
      <h1 class="w3-center">Resetar Senha</h1>
      <div class="w3-row">
        <div class="w3-third w3-container"></div>
        <div class="w3-third w3-container">
          <!-- Bloco 1 -->
          <label for="senha1"></label>
          <input  id="senha1" class="w3-input w3-round w3-margin-top" type="text" v-model="senha1" placeholder="Nova Senha"/>
          <!-- Bloco 1 -->
        </div>
        <div class="w3-third w3-container"></div>
      </div>

      <div class="w3-row">
        <div class="w3-third w3-container"></div>
        <div class="w3-third w3-container">
          <!-- Bloco 2 -->
          <label for="senha2"></label>
          <input id="senha2" class="w3-input w3-round w3-margin-top margin-bottom-30" placeholder="Repetir nova senha" v-model="senha2" />
          <!-- Bloco 2 -->
        </div>
        <div class="w3-third w3-container"></div>
      </div>

      <div class="w3-row">
        <div class="w3-third w3-container"></div>
        <div class="w3-third w3-container">
          <!-- Bloco 3 -->
          <button @click="resetar()" class="w3-col w3-btn w3-center fundo-roxo w3-text-white w3-round">Resetar</button>
          <!-- Bloco 3 -->
        </div>
        <div class="w3-third w3-container"></div>
      </div>
    </div>
    <!-- Fim Corpo -->

    <!-- Float Button -->
    <nav class="container w3-display-bottomright w3-padding" style="position: fixed;">
      <router-link
        to="/RecuperarLogin"
        style="font-size:20px;padding: 4px!important; padding-left: 9px!important;"
        class="buttons w3-orange" tooltip="Voltar para recuperar senha">
        <i class="fas fa-arrow-left"></i>
      </router-link>

      <a
        class="buttons w3-blue"
        style="font-size:30px; padding: 4px!important; padding-left: 10px!important;"
        href="#">
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
    import Mensagem from "@/components/Mensagem"
    export default {
        name: "NovaSenha",
        components: {
          Mensagem,
        },
        data () {
          return {
            senha1:'',
            senha2:''
          };
        },
        mounted() {
          let logado = localStorage.getItem("autorizacao");
          if(logado === "logado"){
            this.$router.push({ name: "Perfil" });
          }
        },
        methods: {
          resetar(){
            //TODO implementar: analisar se é um metodo async
          }
        }
    }
</script>

<style scoped>

  .margin-bottom-30{
    margin-bottom: 30px;
  }

</style>
