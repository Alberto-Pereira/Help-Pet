<template>
  <div class="entrar w3-col">
    <div class="w3-modal" v-if="processando" style="display: block; padding-top: 60%">
      <div class="w3-modal-content">
        <div class="w3-container w3-margin-top" style="padding: 0px">
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
    <div
      class="w3-blue w3-mobile w3-center"
      style="height: 200px; margin-top: 0px !important"
    >
      <span class="w3-text-white w3-center fonte-titulo w3-col">Perfil</span>
      <div class="w3-center w3-col s4 m8 l2">
        <span class="circulo w3-white w3-center w3-animate-zoom">
          <img
            class="perfil w3-center"
            v-if="!usuario_imagem"
            src="../assets/imagens/avatar.jpg"
          />
          <img v-else class="perfil w3-center" :src="usuario_imagem" alt="" />
        </span>
      </div>
    </div>

    <div class="w3-center w3-small" style="margin-top: 70px">
      <div>
        <h3>{{ dados_usuario.nome_usuario? dados_usuario.nome_usuario.toUpperCase() : ''}}</h3>
      </div>
      <!-- Interruptor arredondado (toggle) -->
      <label class="switch">
        <input type="checkbox" />
        <span
          class="slider round w3-text-gray bold"
          @click="verificaLadoBotao()"
          @change="buscarPets()"
        >
          <span
            class="w3-col m6 s6 l6 font-verde"
            style="margin-left: 2% !important"
            >Help! Pets</span
          >
          <span class="w3-col m6 s6 l6" style="margin-left: 50% !important"
            >Meus Pets</span
          >
        </span>
      </label>
    </div>
    <div
      v-show="meus_pets.length > 0"
      @change="buscarPets()"
      class="w3-animate-zoom"
    >
      <div
        id="meus-pets"
        v-for="(pet, index_pet) in meus_pets"
        :key="index_pet"
        class="w3-margin-top w3-card w3-padding w3-container w3-border w3-round w3-margin"
        style="box-shadow: 5px 10px 20px 3px"
      >
        <div class="w3-col s2">
          <img
            class="detalhe-foto-pet w3-center w3-border w3-col s6 m6 l6"
            v-bind:src="pet.imagem_pet"
          />
        </div>
        &nbsp;
        <div class="w3-col s4 w3-padding">
          <strong class="">{{ pet.nome_pet }}</strong>
        </div>
        <div class="w3-col s4 w3-small">
          <button
            @click="ativarDetalhes(pet)"
            style="width: 100px"
            class="w3-btn w3-white w3-small w3-border w3-round-xxlarge w3-border-blue w3-right-align"
          >
            <i class="fas fa-edit"></i> Detalhes
          </button>
        </div>

        <button v-if="meus_pets.length > 99" class="w3-btn w3-green w3-col">
          <i class="fas fa-add"></i>
        </button>
      </div>
    </div>
    
    <div v-show="pets_perdidos.length > 0" class="w3-animate-zoom">
      <div
        id="pets-perdidos"
        v-for="(pet_perdido, indice) in pets_perdidos"
        :key="indice"
        class="w3-margin-top w3-card w3-padding w3-container w3-border w3-round w3-margin"
        style="box-shadow: 5px 10px 20px 3px"
      >
        <div class="w3-col s2">
          <i class="fas fa-exclamation-triangle w3-text-red"></i>
          <img
            class="detalhe-foto-pet w3-center w3-border w3-col s6 m6 l6"
            v-bind:src="pet_perdido.imagem_pet"
            width="15"
            height="15"
          />
        </div>
        &nbsp;
        <div class="w3-col s4">
          <strong class="">{{ pet_perdido.nome_pet }}</strong>
        </div>
        <div class="w3-col s4 w3-small">
          <button
            @click="ativarDetalhes(pet_perdido, (pet_perdido.status_pet = 'd'))"
            style="width: 150px"
            class="w3-btn w3-white w3-border w3-round-xxlarge w3-center w3-border-blue w3-right-align"
          >
            <i class="fas fa-edit"></i> Detalhes
          </button>
        </div>

        <button v-if="pets_perdidos.length > 99" class="w3-btn w3-green w3-col">
          <i class="fas fa-add"></i>
        </button>
      </div>
    </div>

    <nav
      class="container w3-display-bottomright w3-padding"
      style="position: fixed"
    >
      <a
        @click="logout()"
        class="buttons w3-red"
        style="
          font-size: 20px;
          padding: 4px !important;
          padding-left: 10px !important;
        "
        tooltip="Sair"
      >
        <i class="fas fa-sign-out-alt"></i>
      </a>

      <router-link
        to="/Dadospessoais"
        style="
          font-size: 20px;
          padding: 4px !important;
          padding-left: 9px !important;
        "
        class="buttons w3-purple"
        tooltip="Configuração do usuário"
      >
        <i class="fas fa-user-cog"></i>
      </router-link>

      <router-link
        to="/MuralPets"
        style="
          font-size: 20px;
          padding: 4px !important;
          padding-left: 9px !important;
        "
        class="buttons w3-green"
        tooltip="Mural de pets"
      >
        <i class="fas fa-dog"></i>
      </router-link>

      <router-link
        to="/DadosPet"
        style="
          font-size: 20px;
          padding: 4px !important;
          padding-left: 11px !important;
        "
        class="buttons w3-green"
        tooltip="Adicionar Pets"
      >
        <i class="fas fa-plus"></i>
      </router-link>

      <a
        class="buttons w3-blue"
        style="
          font-size: 30px;
          padding: 4px !important;
          padding-left: 12px !important;
        "
        href="#"
      >
        <i class="fas fa-paw"></i
      ></a>
    </nav>
    <Mensagem ref="enviarMensagem" />
  </div>
</template>

<script>
import Mensagem from "@/components/Mensagem";
import api from "../service/api";
import DetalhesPet from "@/components/DetalhesPet";
export default {
  name: "Perfil",
  components: {
    Mensagem,
    DetalhesPet,
  },

  data() {
    return {
      nome_usuario: "",
      sobre_nome: "",
      meus_pets: [],
      mais: 0,
      pets_perdidos: [],
      tem_imagem_usuario: false,
      usuario_imagem: undefined,
      processando: false,
      nao_tem_mensagem: true,
      local_storage: [],
      id_usuario: 0,
      dados_master: {},
      ladoBotao : 'esquerdo'
    };
  },
  async mounted() {},
  created() {
    let parametros_login = localStorage.getItem("autorizacao");
    this.dados_usuario = JSON.parse(localStorage.getItem("parametros-usuario"));
    if (parametros_login !== "logado") {
      this.$router.push({ name: "Entrar" });
    } else {
      this.prencherTela();
    }
  },
  methods: {
    async buscarPets() {
      let pets = [];
      this.processando = true;
      pets = await api.get("/pets/" + this.dados_usuario.id_usuario);

      if (pets.data === "Sem pets") {
        this.meus_pets = [];
      } else {
        this.meus_pets = pets.data;
        for (let i in this.meus_pets) {
          this.meus_pets[i].latitude = parseFloat(this.meus_pets[i].latitude);
          this.meus_pets[i].longitude = parseFloat(this.meus_pets[i].longitude);
        }
      }
      if (!pets) {
        this.$refs.enviarMensagem.exclamar(
          "error",
          "Não foi possivel carregar pets do perfil."
        );
      }
      this.processando = false;
    },

    logout() {
      localStorage.clear();
      localStorage.setItem("autorizacao", false);
      localStorage.setItem("parametros-usuario", "deslogado");
      this.$router.push({ name: "Entrar" });
    },

    ativarDetalhes(pet) {
      localStorage.setItem("pet-detalhe", JSON.stringify(pet));
      this.$router.push({ name: "DetalhesPet" });
    },

    gerarOcorrencia(pet) {
      localStorage.setItem("pet-ocorrencia", JSON.stringify(pet));
      this.$router.push({ name: "GerarOcorrencia" });
    },

    async prencherTela() {
      this.processando = true;
      let complementar = await api.get(
        "/detailUser/" + this.dados_usuario.id_usuario
      );
      
      if (complementar.data.imagem_usuario) {
        this.usuario_imagem = complementar.data.imagem_usuario;
      } else {
        this.$refs.enviarMensagem.exclamar(" erro", "usuario sem foto!");
      }
      
      this.processando = false;
      this.buscarPets();
    },
    verificaLadoBotao(){
      if(this.ladoBotao === 'esquerdo'){
        console.log('esquerdo');
        this.ladoBotao = 'direito';
        this.meus_pets = [];
        this.buscarPetsPerdidos();
      }else{
        console.log('direito');
        this.ladoBotao = 'esquerdo';
        this.pets_perdidos = [];
        this.buscarPets();
      }
    },
    async buscarPetsPerdidos() {
      this.processando = true;
      let pets_perdidos_dados = [];
      pets_perdidos_dados = await api.get("/missingPet");
      if (pets_perdidos_dados.data == "Nenhum pet perdido") {
        this.pets_perdidos = [];
        
        this.$refs.enviarMensagem.exclamar("erro", 'Não existe pets perdidos!');
      } else {
        this.pets_perdidos = pets_perdidos_dados.data;
      }
      
      this.processando = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 50px;
  height: 50px;
}
.detalhe-foto-pet {
  border-radius: 50%;
  width: 60px !important;
  height: 60px !important;
}
</style>
