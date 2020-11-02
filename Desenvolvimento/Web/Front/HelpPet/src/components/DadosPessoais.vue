<template>

  <div class="geral w3-container extender-div-tela-toda">

    <div class="w3-row w3-margin-top">
      <h6 class="w3-col s2 padding-10 font-amarela"><i class="fas fa-arrow-left"></i></h6>
      <h2 class="w3-col s8 w3-center font-verde bold-500">Dados pessoais</h2>
      <h6 class="w3-col s2 padding-10 font-amarela"><i class="fas fa-filter"></i></h6>
    </div>

    <div class="margin-top-50 padding-10">
      <input class="w3-input w3-text-black bold-500" type="text" placeholder="Cpf:">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Endereço:">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Telefone:">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Whatsapp:">
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" placeholder="Telegram:">
    </div>

    <div class="margin-top-50">
      <button class="w3-col w3-btn w3-round-xxlarge w3-center fundo-azul-claro w3-text-white w3-margin-top">Buscar foto para perfil</button>
      <button class="w3-col w3-btn w3-round-xxlarge w3-center fundo-roxo w3-text-white w3-margin-top">Gravar dados</button>
    </div>

  </div>
    
</template>

<script>
    export default {
        name: "DadosPessoais"
    }
</script>

<style scoped>

</style>
