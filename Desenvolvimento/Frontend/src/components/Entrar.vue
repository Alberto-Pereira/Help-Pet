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
        <span @click="recuperarSenha()" class="w3-text-green w3-margin-top"
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
import api from "../service/api";
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    logado: false
  },
  mutations: {
    autorizacao (state) {
      state.logado = "autorizado"
    }
  }
})
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
    console.log("parametros_login")
    if (parametros_login === "autorizado") {
    //  this.$router.push({ name: 'Perfil' });
    }
  },

  methods: {
    logar() {
      this.parametros_usuario = []
      this.processando = true;
      let resposta =  api.post("/loginUser", {
        email: this.email,
        password: this.senha
      })
     
        if(resposta){
          
          let dados = resposta
          console.log(JSON.parse(JSON.stringify(dados)))
          this.$refs.enviaMensagem.exclamar("", "Logado com sucesso!")
         
          localStorage.setItem('parametros-usuario', JSON.stringify(dados));
           //window.location.href = window.location.origin+"/Perfil"
          store.commit('autorizacao');
          localStorage.setItem('autorizacao', store.state.logado);
        }else{
           this.$refs.enviaMensagem.exclamar("", "Não foi possivel logar!")
        }
        this.processando = false;
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
