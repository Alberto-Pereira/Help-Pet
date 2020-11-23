<template>

  <div class="geral w3-container extender-div-tela-toda" style="padding:0px;">
    <div class="w3-blue w3-col" >
      <h2 class="w3-col w3-center bold-500">Gerar ocorrência</h2>
    </div>

    <div class="margin-top-80 padding-10">
      <div class="w3-center">
        <img class="border-img" :src="image" alt="" width="80" height="80">
      </div>
      <input class="w3-input w3-text-black bold-500 margin-top-30" type="text" placeholder="Nome do pet: (preenchido)">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Raça: (preenchido)">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Cor: (preenchido)">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Número da coleira (preenchido)">
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
        name: "GerarOcorrencia",
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
          let parametros_login = localStorage.getItem("autorizacao");
          if(!parametros_login){
              this.$router.push({ name: 'Entrar' });
            }
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

  .border-img {
    border: 3px solid black;
  }

</style>
