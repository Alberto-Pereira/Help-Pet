<template>

  <div class="geral w3-container extender-div-tela-toda w3-center">
    <div class="w3-row w3-margin-top w3-col">
      <router-link to="/perfil">
        <h6 class="w3-col s2 padding-10 font-amarela w3-btn w3-round"><i class="fas fa-arrow-left"></i></h6>
      </router-link>
      <h2 class="w3-col s8 w3-center font-verde bold-500">Detalhes Pet</h2>
      <h6 class="w3-col s2 padding-10 font-amarela"><i class="fas fa-filter"></i></h6>
    </div>

    <div id="visualizar">
      <div class="w3-container w3-col">
          <img class="detalhe-foto-pet w3-center w3-border w3-col w3-center" v-bind:src="imagem_pet">
          <i v-if="pode_editar" @click="editando = !editando" class="fas fa-edit"></i>
          <span :style="getStatus()" v-if="!editando" class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align">
              <i class="fas fa-exclamation-circle"></i> : 
              <label v-if="status == 'n'">Normal</label>
              <label v-if="status == 'a'">Para adoção</label>
              <label style="color:red;" v-if="status == 'd'">Desaparecido</label>
              <label v-if="status == 'l'">Localizado</label>
          </span>
      </div>
   

      <div class="w3-margin-top padding-10 w3-col w3-border w3-container w3-mobile w3-round labels" v-if="!editando">
        <span class="w3-span w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-user"></i> : {{nome_proprietario}}</span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-paw"></i> : {{nome_pet}}</span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-palette"></i> : {{cor}}</span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-horse-head"></i> : {{raca}}</span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-qrcode"></i> : {{codigo_coleira}}</span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-venus"></i><i class="fas fa-mars"></i> : {{sexo}}</span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align ">Descrição : 
            <label class="w3-border w3-round-xxlarge w3-col w3-container">{{descricao}}</label> 
          </span> 
      </div>
    </div>

    <div id="editar w3-border w3-container w3-border-black w3-col" v-if="editando">
      <div class="margin-top-30 w3-margin-bottom w3-left-align w3-col">
        <span class="margin-left-8 bold-500 font-cinza-meio-claro">Status? </span>

        <span class="w3-text-green bold-500 w3-half">
          <input class="w3-radio" type="radio" name="normal" value="n" checked id="checknormal">
          <label for="checksim">Normal</label>
        </span>

        <span class="w3-text-yellow bold-500 w3-half">
          <input class="w3-radio" type="radio" name="paraadocao" value="a" id="checkadocao">
          <label for="checknao">Para adoção</label>
        </span>

        <span class="w3-text-red bold-500 w3-half">
          <input class="w3-radio" type="radio" name="perdido" value="p" id="checkperdido">
          <label for="checknao">Perdido</label>
        </span>

        <span class="w3-text-blue bold-500 w3-half">
          <input class="w3-radio" type="radio" name="encontrado" value="l" id="checkencontrado">
          <label for="checknao">Encontrado</label>
        </span>

        <input class="w3-input w3-margin-top w3-text-black bold-500 " type="text" placeholder="Nome do pet:">
        <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Raça:">
        <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Cor:">
        <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Sexo:">
        <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Número da coleira (gera automatico):">
        <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Descrição:">
      </div>
    </div>
    
    <div class="margin-top-50">
      <button @click="capturarImage('DetalhesPet')" class="w3-col w3-btn w3-round-xxlarge w3-center fundo-azul-claro w3-text-white w3-margin-top">
            Buscar foto para perfil
      </button>

      <button class="w3-col w3-btn w3-round-xxlarge w3-center fundo-roxo w3-text-white w3-margin-top">Gravar dados</button>
    </div>
    <capturar-image ref="capturar" @pegaImagem="recebeImage"/>

  </div>
    
</template>

<script>
    import CapturarImage from '@/components/CapturarImage'
    
    export default {
        components: {
            CapturarImage
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
                status: 'n',
                descricao: '',
                longitude: undefined,
                latitude: undefined,
                pode_editar: true,
                editando: false
            };
        },
        mounted(){
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
