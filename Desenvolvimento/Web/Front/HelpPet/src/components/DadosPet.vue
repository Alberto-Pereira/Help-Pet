<template>

  <div class="geral w3-container extender-div-tela-toda">

    <div class="w3-row w3-margin-top">
      <h6 class="w3-col s2 padding-10 font-amarela"><i class="fas fa-arrow-left"></i></h6>
      <h2 class="w3-col s8 w3-center font-verde bold-500">Dados pet</h2>
      <h6 class="w3-col s2 padding-10 font-amarela"><i class="fas fa-filter"></i></h6>
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

    <div class="margin-top-50">
      <button class="w3-col w3-btn w3-round-xxlarge w3-center fundo-azul-claro w3-text-white w3-margin-top">Buscar foto do pet</button>
      <button class="w3-col w3-btn w3-round-xxlarge w3-center fundo-roxo w3-text-white w3-margin-top">Gravar dados</button>
    </div>

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
