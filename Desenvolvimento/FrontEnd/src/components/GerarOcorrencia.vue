<template>

  <div class="geral w3-container extender-div-tela-toda">

    <div class="w3-row w3-margin-top">
      <h6 class="w3-col s2 padding-10 font-amarela">
        <router-link to="/perfil">
          <i class="fas fa-arrow-left"></i>
        </router-link>
      </h6>
      <h3 class="w3-col s8 w3-center font-verde bold-500">Gerar ocorrência</h3>
      <h6 class="w3-col s2 padding-10 font-amarela">
        <router-link to="">
          <i class="fas fa-filter"></i>
        </router-link>
      </h6>
    </div>

    <div class="padding-10">
      <div class="w3-center">
        <img class="border-img" src="../assets/imagens/cachorrinho.png" alt="Girl in a jacket" width="80" height="80">
      </div>
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Nome do pet: (preenchido)">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Raça: (preenchido)">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Cor: (preenchido)">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Número da coleira (preenchido)">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Descrição:">
    </div>

    <div class="margin-top-30">
      <button class="w3-col w3-btn w3-round-xxlarge w3-center fundo-azul-claro w3-text-white w3-margin-top">Buscar nova foto do pet</button>
      <button class="w3-col w3-btn w3-round-xxlarge w3-center fundo-roxo w3-text-white w3-margin-top">Gravar dados</button>
    </div>

  </div>

</template>

<script>
    export default {
        name: "GerarOcorrencia"
    }
</script>

<style scoped>

  .border-img {
    border: 3px solid black;
  }

</style>
