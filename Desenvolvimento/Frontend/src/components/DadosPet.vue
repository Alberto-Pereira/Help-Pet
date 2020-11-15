<template>

  <div class="geral w3-container extender-div-tela-toda" style="padding:0px;">
    <div class="w3-blue w3-col" >
      <h2 class="w3-col w3-center bold-500">Dados do Pet</h2>
    </div>

    <div class="margin-top-30 padding-10">
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
        name: "DadosPet"
    }
</script>

<style scoped>

  .margin-left-8 {
    margin-left: 8px;
  }

</style>
