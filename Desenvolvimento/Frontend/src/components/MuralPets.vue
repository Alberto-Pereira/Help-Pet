<template>

  <div class="geral w3-container extender-div-tela-toda w3-small" style="padding:0px;">

    <div class="w3-blue w3-col margin-bottom-15">
      <h2 class="w3-col w3-center bold-500">Mural de Pets</h2>
    </div>

    <div class="w3-row margin-lr">
      <input type="text"  class="w3-input w3-border w3-round w3-col s6 m3 l3" v-model="nome_pet" placeholder="Pesquisar">
    </div>
    <input class="w3-radio margin-lr" @click="buscarPetsAdocao()" type="radio" name="gender" value="adocao" checked>
    <label>Adoção</label>

    <input class="w3-radio margin-lr" @click="buscarPetsPerdidos()" type="radio" name="gender" value="perdidos">
    <label>Perdidos</label>

    <div id="listView" class="">
      <div>
        <div id="pets-perdidos" v-for="(pet, indice) in filtro()"  :key="indice" class="w3-margin-top w3-card w3-padding w3-container w3-border w3-round w3-margin">
          <div class="w3-col s2">
            <img class="detalhe-foto-pet w3-center w3-border w3-col s12 m12 l12" v-bind:src="pet.imagem_pet" width="70" height="50">
          </div>
          &nbsp;
          <div class="w3-col s8">
            <strong class="">{{pet.nome_pet}}</strong>
          </div>
          <div class="w3-col s12 w3-small w3-right-align">
            <button @click="ativarDetalhes(pet)" class="w3-btn w3-white w3-border w3-round-xxlarge w3-border-blue "><i class="fas fa-edit"></i> Detalhes </button>
          </div>
          
          <button v-if="pets.length > 99" class="w3-btn w3-green w3-col"><i class="fas fa-add"></i></button>
        </div>
      </div>
    </div>


    <nav class="container w3-display-bottomright w3-padding" style="position: fixed;">
      <router-link
        to="/Perfil"
        style="font-size:20px;padding: 4px!important; padding-left: 9px!important;"
        class="buttons w3-orange" tooltip="Voltar para perfil">
        <i class="fas fa-arrow-left"></i>
      </router-link>

      <a
        class="buttons w3-blue"
        style="font-size:30px; padding: 4px!important; padding-left: 10px!important;"
        href="#">
        <i class="fas fa-paw"></i>
      </a>
    </nav>

  </div>

</template>

<script>
    import ImageUploader from 'vue-image-upload-resize'
    import api from "@/service/api";
    export default {
        name: "MuralPets",
        components: {
          ImageUploader,
        },
        data () {
          return {
            hasImage : false,
            image : '',
            pets:[],
            nome_pet: ''
          }
        },
      
       mounted() {
        let parametros_login = localStorage.getItem("autorizacao");
        let parametros_usuario = (localStorage.getItem("parametros-usuario"));
        if (!parametros_login && parametros_usuario == "deslogado") {
          this.$router.push({ name: 'Entrar' });
        }
      },
      created(){
        
        this.buscarPetsAdocao()
      },
      
      computed: { 
       
      },
      methods: {
         filtro: function () {
          return this.pets.filter((pet) => pet.nome_pet.includes(this.nome_pet));
        },
        
        async buscarPetsAdocao(){
          let  dados = await api.get('/adoptPet')
          this.pets = dados.data;
          this.pets[0].status_pet = 'a'
         
        },

        ativarDetalhes(pet){
          localStorage.setItem('pet-detalhe', JSON.stringify(pet));
          this.$router.push({ name: 'DetalhesPet' });
        },

        async buscarPetsPerdidos(){
          let  dados = await api.get('/missingPet')
          this.pets = dados.data;
          this.pets[0].status_pet = 'p'
          
        },

      }
    }
</script>

<style scoped>

  .margin-bottom-15{
    margin-bottom: 15px;
  }

  .margin-10-px{
    margin: 10px;
  }

  .margin-5-px{
    margin: 5px;
  }

  .margin-top-15{
    margin-top: 15px;
  }

  .margin-lr{
    margin-left: 10px;
    margin-right: 10px
  }

  .margin-l-10-px{
    margin-left: 10px;
  }

  .margin-r-10-px{
    margin-right: 10px;
  }

  .border-red{
    border: 1px solid red;
  }

</style>
