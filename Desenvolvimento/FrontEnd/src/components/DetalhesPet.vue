<template>

  <div class="geral w3-container extender-div-tela-toda w3-center">
    <div class="w3-row w3-margin-top w3-col">
      <router-link to="/perfil">
        <h6 class="w3-col s2 padding-10 font-amarela w3-btn w3-round"><i class="fas fa-arrow-left"></i></h6>
      </router-link>
      <h2 class="w3-col s8 w3-center font-verde bold-500">Detalhes Pet</h2>
      <h6 class="w3-col s2 padding-10 font-amarela"><i class="fas fa-filter"></i></h6>
    </div>

    <div class="w3-container w3-col">
        <img class="detalhe-foto-pet w3-center w3-border w3-col w3-center" v-bind:src="imagem_pet">
        <span :style="getStatus()" class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align">
            <i class="fas fa-exclamation-circle"></i> : 
            <label v-if="status == 'n'">Normal</label>
            <label v-if="status == 'a'">Para adoção</label>
            <label style="color:red;" v-if="status == 'd'">Desaparecido</label>
            <label v-if="status == 'l'">Localizado</label>
        </span>
    </div>

    <div class="margin-top-50 padding-10 w3-col">
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
                latitude: undefined
            };
        },
        mounted(){
            console.log(navigator.geolocation)
            this.localizacao = navigator.geolocation.getCurrentPosition(getCoor, errorCoor, {maximumAge:60000, timeout:5000, enableHighAccuracy:true});
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
</style>
