<template>

  <div class="geral w3-container extender-div-tela-toda w3-center">
    <div class="w3-row w3-margin-top w3-col">
      <h6 class="w3-col s2 padding-10 font-amarela"><i class="fas fa-arrow-left"></i></h6>
      <h2 class="w3-col s8 w3-center font-verde bold-500">Detalhes Pet</h2>
      <h6 class="w3-col s2 padding-10 font-amarela"><i class="fas fa-filter"></i></h6>
    </div>

    <div class="detalhe-foto-pet w3-center w3-border w3-border-yellow w3-container w3-col">
        <img class="w3-col w3-center" src="../assets/imagens/avatarPet.jpg">
    </div>

    <div class="margin-top-50 padding-10 w3-col">
      <span class="w3-span w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-user"></i> : </span>
      <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-paw"></i> : </span>
      <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-palette"></i> : </span>
      <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-horse-head"></i> : </span>
      <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-qrcode"></i> : </span>
      <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-venus"></i><i class="fas fa-mars"></i> : </span>
      <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-exclamation-circle"></i> : </span>
      <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align">Descrição : </span> 
    </div>

    <div class="margin-top-50">
      <button class="w3-col w3-btn w3-round-xxlarge w3-center fundo-azul-claro w3-text-white w3-margin-top">Buscar foto para perfil</button>
      <button class="w3-col w3-btn w3-round-xxlarge w3-center fundo-roxo w3-text-white w3-margin-top">Gravar dados</button>
    </div>

  </div>
    
</template>

<script>
    export default {
        name: "DetalhesPet"
    }
</script>

<style scoped>
.detalhe-foto-pet{
  max-width: 90%;
  border-radius: 25px;
  width: 200px;
  height: 200px;
  
}
</style>
