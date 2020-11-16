<template>
  <div class="entrar w3-col">
    <div class="w3-blue w3-mobile w3-center" style="height: 30vh; margin-top:0px!important;">
        <span class="w3-text-white w3-center fonte-titulo w3-col">Perfil</span>
        <div class="w3-center w3-col s4 m8 l2">
            <span class="circulo w3-white">
                <img class="perfil w3-center" v-if="!tem_imagem_usuario" src="../assets/imagens/avatar.jpg">
                <img v-else class="perfil w3-center" v-bind:src="usuario_imagem">
            </span>
           
        </div>
    </div>

    <div class="w3-center" style="margin-top: 70px;">
       <div>
          <h3>{{nome_usuario.toUpperCase()}}</h3>
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
    <div id="meus-pets" v-show="!pets_mostrar" v-for="(pet, indice) in meus_pets" :key="indice" class="w3-margin-top w3-card w3-padding w3-container">
      <img class="detalhe-foto-pet w3-center w3-border w3-col s6 m6 l6" v-bind:src="pet.imagem_pet">
      &nbsp;
      <strong class="w3-col s6 m6 l6">sade{{pet.nome_pet}}</strong>
      <button v-if="meus_pets.length > 99" class="w3-btn w3-green w3-col"><i class="fas fa-add"></i></button>
    </div>

    <div id="pets-perdidos" v-show="pets_mostrar" v-for="(pet_perdido, indice) in pets_perdidos" :key="indice" class="w3-margin-top w3-card w3-padding w3-container">
      <img class="detalhe-foto-pet w3-center w3-border w3-col s6 m6 l6" v-bind:src="pet_perdido.imagem_pet">
      &nbsp;
      <strong class="w3-col s6 m6 l6">{{pet_perdido.nome_pet}}</strong>
      <button v-if="pets_perdidos.length > 99" class="w3-btn w3-green w3-col"><i class="fas fa-add"></i></button>
    </div>
   
    <mensagem ref="enviaMensagem"/>

    <nav class="container w3-display-bottomright w3-padding"> 
      <a 
      href="#" 
      @click="capturarImage('DetalhesPet')"
      class="buttons w3-red" 
      style="font-size:20px; padding: 4px!important; padding-left: 10px!important;" 
      tooltip="Sair">
        <i class="fas fa-sign-out-alt"></i>
      </a>
      
      <router-link 
      to="/Dadospessoais"
      href="#" style="font-size:20px;padding: 4px!important; padding-left: 9px!important;" 
      class="buttons w3-purple" tooltip="Configuração do usuário">
        <i class="fas fa-user-cog"></i>
      </router-link>
      <a 
      href="#" style="font-size:20px;padding: 4px!important; padding-left: 9px!important;" 
      class="buttons w3-green" tooltip="Mural de adoção">
        <i class="fas fa-dog"></i>
      </a>
      
      <a 
      href="#" style="font-size:20px;padding: 4px!important; padding-left: 10px!important;" 
      class="buttons w3-green" tooltip="Mural de adoção">
        <i class="fas fa-plus"></i>
      </a>

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
export default {
  name: 'Perfil',
  components:{
    Mensagem
  },
  data () {
    return {
      url: 'http://localhost:3333',
      nome_usuario:"sade",
      meus_pets:[],
      mais:0,
      pets_perdidos:[],
      pets_mostrar: false,
      tem_imagem_usuario:false,
      usuario_imagem:undefined
    }
  },
  async mounted(){
    let parametros_locais = localStorage.getItem('parametros-usuario');
    //if(parametros_locais){
     // this.tem_imagem_usuario = true;
    //}
    //comentados para usar depois
    //this.meus_pets = JSON.stringify(parametros_locais.meus_pets);
    if(!parametros_locais){
      //await this.$router.replace(" ");
     // document.location.reload(true);
    }
  },
  methods:{
    buscarPetsPerdidos(){
      this.pets_mostrar = !this.pets_mostrar
      axios.post(this.url+'/pets', {
      mais: this.mais,
      })
      .then(function (response) {
        console.log(response);
        let pets = response.data;
        localStorage.setItem('pets_perdidos', pets);
        this.pets_perdidos.push(JSON.stringify(localStorage.getItem('pets_perdidos')));
      })
      .catch(function (error) {
        console.log(error);
        this.$refs.enviaMensagem.exclamar("erro", "Falha na requisição!");
      });
      
      this.mais++;
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

</style>
