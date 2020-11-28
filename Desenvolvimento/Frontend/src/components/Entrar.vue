<template>
  <div class="entrar w3-center w3-col">
    
     <div v-if="processando" class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>          
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
    </div>

    <!--<span class="w3-text-green w3-margin-top w3-col s6 m6 l6"><h1>Entrar</h1></span>-->
    <div>
      <img class="centralizado" src="../assets/imagens/logo.png" />

      <form class="w3-container">
        <input
          class="w3-input w3-margin-bottom"
          type="email"
          v-model="email"
          placeholder="Email"
          autocomplete="off"
        />
        <input
          class="w3-input w3-margin-bottom w3-margin-top"
          type="password"
          v-model="senha"
          placeholder="Senha"
          autocomplete="off"
        />
        <button
          @click="logar()"
          class="w3-btn w3-blue w3-round-xxlarge w3-margin-top  w3-margin-bottom w3-col"
        >
          Entrar
        </button>

        <span  class="w3-text-green w3-margin-top"
          >Perdeu sua senha?</span
        >
        &nbsp; &nbsp;
        <router-link to="/Registrar" class="w3-text-green w3-margin-top"
          >Criar conta?</router-link
        >
      </form>

     
    </div>
     <mensagem ref="enviaMensagem" />
  </div>
</template>

<script>
import Mensagem from "@/components/Mensagem";
import api from "@/service/api";



export default {
  
  components: {
    Mensagem
  },
  
  name: "Entrar",
  data() {
    return {
      senha: "",
      email: "",
      parametros_usuario: undefined,
      processando: false
      
    };
    
  },
  mounted() {
    let parametros_login = localStorage.getItem("autorizacao");
    
    if (parametros_login) {
      this.$router.push({ name: 'Perfil' });
    }
  },

  methods: {
    logar() {
      this.parametros_usuario = []
      this.processando = true;
     
      api.post("/loginUser", {
        email: this.email,
        password: this.senha
      }).then(function (response) {
        if(response){
          localStorage.setItem('parametros-usuario', JSON.stringify(response.data));
          window.location.href = window.location.origin+"/Perfil"
         
          localStorage.setItem('autorizacao', true);
          //this.$refs.enviaMensagem.exclamar("", "Logado com sucesso!")
            
        }
      }).catch(function (error) {
        
        //this.$refs.enviaMensagem.exclamar("", "Não foi possivel logar!")
      })
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 150px;
  height: 150px;
}
</style>
