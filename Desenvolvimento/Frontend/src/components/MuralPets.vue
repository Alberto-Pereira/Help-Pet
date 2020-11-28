<template>

  <div class="geral w3-container extender-div-tela-toda w3-small" style="padding:0px;">

    <div class="w3-blue w3-col margin-bottom-15">
      <h2 class="w3-col w3-center bold-500">Mural de Pets</h2>
    </div>

    <div class="w3-row margin-lr">
      <input type="text"  class="w3-input w3-border w3-round w3-col s6 m3 l3" placeholder="Pesquisar">
      <button class="w3-btn w3-white w3-border w3-border-grey w3-round-xlarge margin-l-10-px">Pesquisar</button>
    </div>

    <div id="listView" class="margin-top-15 margin-lr border-red">
      <span class="w3-text-red">Aqui vai a listview</span>
    </div>


    <nav class="container w3-display-bottomright w3-padding">
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
    export default {
        name: "MuralPets",
        components: {
          ImageUploader,
        },
        data () {
          return {
            hasImage : false,
            image : require('../assets/imagens/user.png')
          }
        },
      created(){
        //TODO implementar
      },
      methods: {

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
