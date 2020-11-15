<template>

  <div class="geral w3-container extender-div-tela-toda" style="padding:0px;">
    <div class="w3-blue w3-col" >
      <h2 class="w3-col w3-center bold-500">Gerar ocorrência</h2>
    </div>

    <div class="padding-10">
      <div class="w3-center">
        <img class="border-img" v-if="!imagem_pet" src="../assets/imagens/cachorrinho.png" alt="Girl in a jacket" width="80" height="80">
        <img v-else class="detalhe-foto-pet w3-center w3-border w3-col w3-center" v-bind:src="imagem_pet">
      </div>
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Nome do pet: (preenchido)">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Raça: (preenchido)">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Cor: (preenchido)">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Número da coleira (preenchido)">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Descrição:">
    </div>

    <nav class="container w3-display-bottomright w3-padding"> 
      <a 
      href="#" style="font-size:20px;padding: 4px!important; padding-left: 9px!important;" 
      class="buttons w3-orange" tooltip="Voltar para perfil">
        <i class="fas fa-arrow-left"></i>
      </a>
      
      <a
      href="#" style="font-size:20px;padding: 4px!important; padding-left: 9px!important;" 
      class="buttons w3-purple" tooltip="Inserir foto">
        <i class="fas fa-camera"></i>
      </a>

      <a 
      href="#" style="font-size:20px;padding: 4px!important; padding-left: 9px!important;" 
      class="buttons w3-green" tooltip="Gravar dados">
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
    export default {
        name: "GerarOcorrencia",
        data(){
          return{
            imagem_pet:undefined
          }
        }
    }
</script>

<style scoped>

  .border-img {
    border: 3px solid black;
  }

</style>
