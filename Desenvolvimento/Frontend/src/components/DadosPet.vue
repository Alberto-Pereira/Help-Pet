<template>

  <div class="geral w3-container extender-div-tela-toda" style="padding:0px;">
    <div class="w3-blue w3-col" >
      <h2 class="w3-col w3-center bold-500">Dados do Pet</h2>
    </div>

    <div class="margin-top-80 padding-10">
      <div class="w3-center margin-bottom-15">
        <img class="border-img" :src="image" alt="" width="80" height="80">
      </div>
      <span class="margin-left-8 bold-500 font-cinza-meio-claro">Para adoção? </span>
      <span class="w3-text-green bold-500">
        <label for="checksim">Sim</label>
        <input class="w3-radio" type="radio" name="paraadocao" value="Sim" checked id="checksim">
      </span>
      <span class="w3-text-red bold-500">
        <label for="checknao">Não</label>
        <input class="w3-radio" type="radio" name="paraadocao" value="Não" id="checknao">
      </span>
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Nome do pet:">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Raça:">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Cor:">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Número da coleira (gera automatico):">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Descrição:">
    </div>

    <nav class="container w3-display-bottomright w3-padding"> 
      <router-link 
      to="/Perfil"
      style="font-size:20px;padding: 4px!important; padding-left: 9px!important;" 
      class="buttons w3-orange" tooltip="Voltar para perfil">
        <i class="fas fa-arrow-left"></i>
      </router-link>

      <label for="fileInput" slot="upload-label" class="buttons w3-purple" style="font-size:20px;padding: 4px!important; padding-left: 9px!important;" tooltip="Inserir foto">
        <i class="fas fa-camera"></i>
      </label>
      <image-uploader style="display: none"
                      class="w3-col"
                      :quality="1.00"
                      :preview="false"
                      :className="['fileinput', { 'fileinput--loaded': hasImage }]"
                      capture="user"
                      :debug="1"
                      doNotResize="gif"
                      :autoRotate="true"
                      outputFormat="string"
                      @input="setImage"
      ></image-uploader>

      <a 
      href="#" style="font-size:20px;padding: 4px!important; padding-left: 9px!important;" 
      class="buttons w3-green" tooltip="Gravar dados" @click="gravarDados">
        <i class="fas fa-database"></i>
      </a>

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
    export default {
        name: "DadosPet",
        components: {
          ImageUploader,
        },
        data : ()=> {
          return {
            hasImage : false,
            image : require('../assets/imagens/cachorrinho.png')
          }
        },
        mounted () {

        },
        methods: {
          prencherTela : function (){
            //TODO implementar
          },
          setImage: function (file) {
            this.hasImage = true;
            this.image = file;
          },
          gravarDados : function () {
            //TODO implementar
          }
        }
    }
</script>

<style scoped>

  .margin-left-8 {
    margin-left: 8px;
  }

  .margin-bottom-15{
    margin-bottom: 15px;
  }

  .border-img {
    border: 3px solid black;
  }

</style>
