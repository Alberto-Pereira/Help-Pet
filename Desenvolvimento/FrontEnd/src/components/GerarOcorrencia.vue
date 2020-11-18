<template>

  <div class="geral w3-container extender-div-tela-toda">

    <div class="w3-row w3-margin-top">
      <h6 class="w3-col s2 padding-10 font-amarela">
        <router-link to="/perfil">
          <i class="fas fa-arrow-left"></i>
        </router-link>
      </h6>
      <h3 class="w3-col s8 w3-center font-verde bold-500">Gerar ocorrência</h3>
    </div>

    <div class="padding-10">
      <div class="w3-center">
        <img class="border-img" :src="image" alt="" width="80" height="80">
      </div>
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Nome do pet: (preenchido)">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Raça: (preenchido)">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Cor: (preenchido)">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Número da coleira (preenchido)">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Descrição:">
    </div>

    <div class="margin-top-30">
      <label for="fileInput" slot="upload-label">
        <span class="w3-col w3-btn w3-round-xxlarge w3-center fundo-azul-claro w3-text-white w3-margin-top">Buscar nova foto do pet</span>
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

      <button @click="gravarDados" class="w3-col w3-btn w3-round-xxlarge w3-center fundo-roxo w3-text-white w3-margin-top">Gravar dados</button>
    </div>

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
