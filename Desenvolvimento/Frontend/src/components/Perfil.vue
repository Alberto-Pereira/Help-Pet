<template>
  <div class="entrar w3-col">
    <div v-show="processando" class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        
    </div>
    <div class="w3-blue w3-mobile w3-center" style="height: 200px; margin-top:0px!important;">
        <span class="w3-text-white w3-center fonte-titulo w3-col">Perfil</span>
        <div class="w3-center w3-col s4 m8 l2">
            <span class="circulo w3-white w3-center">
                <img class="perfil w3-center" v-if="!tem_imagem_usuario" src="../assets/imagens/avatar.jpg">
                <img v-else class="perfil w3-center" :src="usuario_imagem" alt="">
            </span>
           
        </div>
    </div>

    <div class="w3-center" style="margin-top: 70px;">
       <div>
          <h3>{{nome_usuario}}</h3>
        </div>
      <!-- Interruptor arredondado (toggle) -->
      <label class="switch">
        <input type="checkbox">
        <span class="slider round w3-text-gray bold" @click="buscarPetsPerdidos()">
          <span class="w3-col m6 s6 l6 font-verde" style="margin-left:2%!important;">Help! Pets</span>
          <span class="w3-col m6 s6 l6" style="margin-left:50%!important;">Meus Pets</span>
        </span>
      </label>
    </div>
    <div v-if="!pets_mostrar && meus_pets.length > 0">
      <div id="meus-pets"  v-for="pet in meus_pets"  class="w3-margin-top w3-card w3-padding w3-container w3-border w3-round w3-margin">
        <div class="w3-col s2">
          <img class="detalhe-foto-pet w3-center w3-border w3-col s6 m6 l6" v-bind:src="pet.imagem_pet" width="15" height="15">
        </div>
        &nbsp;
        <div class="w3-col s4">
          <strong class="">{{pet.nome_pet}}</strong>
        </div>
        <div class="w3-col s4 w3-small">
          <button @click="ativarDetalhes(pet)" class="w3-btn w3-white w3-border w3-round-xxlarge w3-border-blue ">
            <i class="fas fa-edit"></i> Detalhes 
          </button>
          &nbsp;
          <button @click="gerarOcorrencia(pet)" class="w3-btn w3-white w3-border w3-round-xxlarge w3-border-red w3-margin-top ">
            <i class="fas fa-exclamation-triangle"></i> Ocorrencia 
          </button>
        </div>
        
        <button v-if="meus_pets.length > 99" class="w3-btn w3-green w3-col"><i class="fas fa-add"></i></button>
      </div>
    </div>
    <div v-if="pets_mostrar && !nao_tem_mensagem && pets_perdidos.length > 0">
      <div id="pets-perdidos" v-for="(pet_perdido, indice) in pets_perdidos" :key="indice" class="w3-margin-top w3-card w3-padding w3-container w3-border w3-round w3-margin">
        <div class="w3-col s2">
          <img class="detalhe-foto-pet w3-center w3-border w3-col s6 m6 l6" v-bind:src="pet_perdido.imagem_pet" width="15" height="15">
        </div>
        &nbsp;
        <div class="w3-col s8">
          <strong class="">{{pet_perdido.nome_pet}}</strong>
        </div>
        <div class="w3-col s2 w3-small">
          <button @click="ativarDetalhes(pet_perdido)" class="w3-btn w3-white w3-border w3-round-xxlarge w3-border-blue "><i class="fas fa-edit"></i> Detalhes </button>
        </div>
        
        <button v-if="pets_perdidos.length > 99" class="w3-btn w3-green w3-col"><i class="fas fa-add"></i></button>
      </div>
    </div>
   
    <mensagem ref="enviaMensagem" />

    <nav class="container w3-display-bottomright w3-padding" style="position:fixed;"> 
      <a 
      @click="logout()"
      class="buttons w3-red" 
      style="font-size:20px; padding: 4px!important; padding-left: 10px!important;" 
      tooltip="Sair">
        <i class="fas fa-sign-out-alt"></i>
      </a>
      
      <router-link 
      to="/Dadospessoais"
      style="font-size:20px;padding: 4px!important; padding-left: 9px!important;" 
      class="buttons w3-purple" tooltip="Configuração do usuário">
        <i class="fas fa-user-cog"></i>
      </router-link>
      <a 
      href="#" style="font-size:20px;padding: 4px!important; padding-left: 9px!important;" 
      class="buttons w3-green" tooltip="Mural de adoção">
        <i class="fas fa-dog"></i>
      </a>
      
      <router-link 
      to="/DadosPet" style="font-size:20px;padding: 4px!important; padding-left: 10px!important;" 
      class="buttons w3-green" tooltip="Adicionar Pets">
        <i class="fas fa-plus"></i>
      </router-link>

      <a 
      class="buttons w3-blue" 
      style="font-size:30px; padding: 4px!important; padding-left: 10px!important;" 
      href="#">
      <i class="fas fa-paw"></i></a>
    </nav>
    
  </div>
  
</template>

<script>
import axios from 'axios' 
import Mensagem from '@/components/Mensagem'
import api from "../service/api";
export default {
  name: 'Perfil',
  components:{
    Mensagem
  },
  data () {
    return {
      nome_usuario:"",
      sobre_nome: "",
      meus_pets:[],
      mais:0,
      pets_perdidos:[],
      pets_mostrar: false,
      tem_imagem_usuario:false,
      usuario_imagem:undefined,
      processando: false,
      dados_usuario: [],
      nao_tem_mensagem: true
      
    }
  },
  async mounted(){
    let parametros_login = localStorage.getItem("autorizacao");
    this.dados_usuario = localStorage.getItem('parametros-usuario');
    if(!parametros_login || !this.dados_usuario){
      this.$router.push({ name: 'Entrar' });
    }
    this.prencherTela()
    let dados_localstorage = []
    dados_localstorage = JSON.parse(localStorage.getItem('parametros-usuario'));
    let dados=[]
    dados = await api.get("/infoUser/"+ dados_localstorage[0].id_usuario)
    this.nome_usuario = dados.data[0].nome_usuario
    this.nome_usuario = this.nome_usuario.toUpperCase()
    
       this.usuario_imagem = dados.data[0].imagem_usuario
       this.tem_imagem_usuario = true
    
    if(localStorage.getItem('imagem-usuario')){
      this.usuario_imagem = localStorage.getItem('imagem-usuario');
      this.tem_imagem_usuario = true
    }
    
   
    let pets = []
    
      pets =  await api.get("/pets/"+ dados_localstorage[0].id_usuario)
      this.meus_pets = pets.data
    
   
  },
 
  methods:{
    logout(){
      let dados = localStorage.getItem('parametros-usuario');
      localStorage.setItem('parametros-usuario', null);
      localStorage.setItem('autorizacao', false);
      this.$router.push({ name: 'Entrar' });
    },
    ativarDetalhes(pet){
      localStorage.setItem('pet-detalhe', JSON.stringify(pet));
      this.$router.push({ name: 'DetalhesPet' });
    },
     gerarOcorrencia(pet){
      localStorage.setItem('pet-ocorrencia', JSON.stringify(pet));
      this.$router.push({ name: 'GerarOcorrencia' });
    },
  
    prencherTela : function (){
         
          let dados_localstorage = []
          dados_localstorage = JSON.parse(this.dados_usuario)
          let dados = []
           api.get("/infoUser/"+ dados_localstorage[0].id_usuario)
          .then(function (response) {
            if(response){
               //this.processando = false;
              
                //this.nome_usuario = response.data.nome_usuario
                 console.log("aqui", response.data)
                 for(let i in  response.data){
                   dados.push(response.data[i])
                   
                 }
                   this.nome_usuario = dados[0].nome_usuario
                 console.log(dados)
                //console.log("aqui",dados_localstorage[0].nome_usuario)
                //this.nome_usuario = dados_localstorage[0].nome_usuario
              // colocar mensagem de sucesso

            }
          
          }).catch(function (error) {
            
            //this.$refs.envia-mensagem.exclamar("", "Houve falha na requisição!")
          })
        },
    async buscarPetsPerdidos(){
      this.pets_mostrar = !this.pets_mostrar
      let pets_perdidos_dados = []
      pets_perdidos_dados =  await api.get("/missingPet")
      this.pets_perdidos = pets_perdidos_dados.data

      if(this.pets_perdidos !== "Nenhum pet perdido"){
        this.nao_tem_mensagem = await false
      }
      if(this.nao_tem_mensagem){
        this.$refs.enviaMensagem.exclamar(" ", "Não encontramos pet perdido")
      }
     
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 30px;
  height: 30px;
}
.detalhe-foto-pet{
  border-radius: 50%;
  width: 40px!important;
  height: 40px!important;
}

</style>
