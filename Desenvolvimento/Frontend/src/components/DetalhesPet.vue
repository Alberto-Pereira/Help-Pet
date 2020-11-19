<template>

  <div class="geral w3-container extender-div-tela-toda w3-center">
    <div class="w3-row w3-margin-top w3-col">
      <router-link to="/perfil">
        <h6 class="w3-col s2 font-amarela w3-btn w3-round"><i class="fas fa-arrow-left"></i></h6>
      </router-link>
      <h2 class="w3-col s8 w3-center font-verde bold-500">Detalhes Pet</h2>
      <h6 class="w3-col s2 padding-10 font-amarela" @click="mostrar_filtro = !mostrar_filtro">
        <i class="fas fa-filter"></i>
      </h6>
    </div>

    <input
    v-if="mostrar_filtro" 
    class="w3-border w3-round-xxlarge w3-margin-bottom w3-left-align w3-col m8 s8 l8 w3-animate-zoom" 
    type="text" 
    placeholder="Pesquisar"
    >
    <i  v-if="mostrar_filtro" class="fas fa-check w3-col s3 m3 l3 w3-left-align w3-animate-zoom"></i>

    <div id="visualizar">
      <div class="w3-container w3-col">
         
          <img class="detalhe-foto-pet w3-center w3-border w3-col w3-center" v-bind:src="imagem_pet">
          <i v-if="pode_editar" @click="editando = !editando" class="fas fa-edit"></i> Editar
          <span 
          :style="getStatus()" 
          v-if="!editando" 
          class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"
          >
              <i class="fas fa-exclamation-circle"></i> : 
              <label style="color:green;" v-if="status == 'n'">Normal</label>
              <label style="color:yellow;" v-if="status == 'a'">Para adoção</label>
              <label style="color:red;" v-if="status == 'p'">Desaparecido</label>
              <label style="color:blue;" v-if="status == 'l'">Localizado</label>
          </span>
      </div>
   

      <div 
      class="w3-margin-top padding-10 w3-col w3-border w3-container w3-mobile w3-round labels w3-animate-zoom w3-small"
      v-if="!editando"
      >
        <span class="w3-span w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-user"></i> : {{nome_proprietario}}</span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align">
          <i class="fas fa-paw"></i> : {{nome_pet}}
        </span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-palette"></i> : {{cor}}</span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-horse-head"></i> : {{raca}}</span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-qrcode"></i> : {{codigo_coleira}}</span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-venus"></i><i class="fas fa-mars"></i> : {{sexo}}</span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align ">Descrição : 
            <label class="w3-border w3-round-xxlarge w3-col w3-container">{{descricao}}</label> 
          </span> 
      </div>
    </div>

    <div 
    id="editar" 
    class="w3-border w3-container w3-round w3-col w3-animate-zoom w3-margin-top w3-small" 
    v-if="editando"
    >
      <div class="margin-top-30 w3-margin-bottom w3-left-align w3-col">
        <span class="margin-left-8 bold-500 font-cinza-meio-claro">Status? </span>

        <span class="w3-text-green bold-500 w3-half" @click="status = 'n'">
          <i v-if="status == 'n'" class="far fa-check-circle"></i>
          <i v-else class="far fa-circle"></i>
          <label>Normal</label>
        </span>

        <span class="w3-text-yellow bold-500 w3-half" @click="status = 'a'">
          <i v-if="status == 'a'" class="far fa-check-circle"></i>
          <i v-else class="far fa-circle"></i>
          <label>Para adoção</label>
        </span>

        <span class="w3-text-red bold-500 w3-half" @click="status = 'p'">
          <i v-if="status == 'p'" class="far fa-check-circle"></i>
          <i v-else class="far fa-circle"></i>
          <label>Perdido</label>
        </span>

        <span class="w3-text-blue bold-500 w3-half" @click="status = 'l'">
          <i v-if="status == 'l'" class="far fa-check-circle"></i>
          <i v-else class="far fa-circle"></i>
          <label>Encontrado</label>
        </span>

        <input 
        class="w3-input w3-margin-top w3-text-black bold-500" 
        v-model="nome_pet" type="text" 
        placeholder="Nome do pet:"
        >

        <input 
        class="w3-input w3-margin-top w3-text-black bold-500"
         v-model="raca" type="text" 
         placeholder="Raça:"
        >

        <input 
        class="w3-input w3-margin-top w3-text-black bold-500" 
        v-model="cor" 
        type="text" 
        placeholder="Cor:"
        >

        <input 
        class="w3-input w3-margin-top w3-text-black bold-500" 
        v-model="sexo" 
        type="text" 
        placeholder="Sexo:"
        >

        <input 
        class="w3-input w3-margin-top w3-text-black bold-500" 
        v-model="codigo_coleira" 
        type="text" 
        placeholder="Número da coleira (gera automatico):"
        >

        <input 
        class="w3-input w3-margin-top w3-text-black bold-500"
        v-model="descricao" 
        type="text" 
        placeholder="Descrição:"
        >
      </div>
    </div>
    
    <div class="margin-top-50 w3-hide-small">
      <button @click="capturarImage('DetalhesPet')" class="w3-col w3-btn w3-round-xxlarge w3-center fundo-azul-claro w3-text-white w3-margin-top">
            Buscar foto para perfil
      </button>

      <button class="w3-col w3-btn w3-round-xxlarge w3-center fundo-roxo w3-text-white w3-margin-top">Gravar dados</button>
    </div>

    <nav class="container w3-display-bottomright w3-hide-large w3-hide-medium"> 
      <a 
      href="#" 
      @click="capturarImage('DetalhesPet')"
      class="buttons w3-blue" 
      style="font-size:20px; margin-top: 10px!important;" 
      tooltip="Inserir foto">
        <i class="fas fa-camera"></i>
      </a>
      
      <a 
      href="#" style="font-size:20px; margin-top: 10px!important;" 
      class="buttons w3-purple" tooltip="Gravar dados">
        <i class="fas fa-database"></i>
      </a>

      <a 
      class="buttons w3-orange" 
      style="font-size:30px;" 
      tooltip="Opções" href="#">
      <i class="fas fa-paw"></i></a>
    </nav>
    
    <capturar-image ref="capturar" @pegaImagem="recebeImage"/>

  </div>
    
</template>

<script>
  import CapturarImage from '@/components/CapturarImage'
  export default {
    components: {
      CapturarImage,    
    },
    name: "DetalhesPet",
    data() {
      return {
        imagem_pet:"",
        localizacao: undefined,
        nome_proprietario: "",
        nome_pet: "",
        cor: '',
        raca: '',
        sexo: '',
        codigo_coleira: '',
        status: '',
        descricao: '',
        longitude: undefined,
        latitude: undefined,
        pode_editar: true,
        editando: false,
        mostrar_filtro: false,          
      };
    },
    mounted(){
    
      let parametros_login = localStorage.getItem("autorizacao");
      if(parametros_login !== "autorizado"){
        this.$router.push({ name: 'Entrar' });
      }
      console.log(navigator.geolocation)
      this.localizacao = navigator.geolocation;
    },
       
    methods: {
      capturarImage(detalhe_pet) {
        this.$refs.capturar.abrirModal(detalhe_pet);
      },
      recebeImage(image){
        this.imagem_pet = image;
      },
      getStatus(){
        if(status == 'd'){
        return 'color: red!important;';
      }else if(status == 'a'){
        return 'color: yellow!important;';
      }else{
        return 'color: green!important;';
      }
    }       
  }
}
</script>

<style scoped>
.detalhe-foto-pet{
  max-width: 100%;
  border-radius: 25px;
  width: 200px;
  height: 200px;
  box-shadow: cadetblue 1px 2px 5px 2px;
}
.labels{
  box-shadow: cadetblue 1px 2px 5px 2px;
}
</style>
