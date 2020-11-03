<template>

  <div class="geral w3-container cor-fundo-app extender-div-tela-toda">

    <div class="w3-row w3-margin-bottom">
      <h1 class="w3-col s10 w3-center font-verde bold-500">Inscrever-se</h1>
      <h6 class="w3-col s2 padding-10 font-amarela">Entrar</h6>
    </div>

    <form class="w3-container w3-margin-top font-cinza-claro">
      <input class="w3-input w3-margin-top w3-round" type="text" placeholder="Nome">
      <input class="w3-input w3-margin-top w3-round" type="text" placeholder="Email">
      <input class="w3-input w3-margin-top w3-round" type="password" placeholder="Password">
      <input class="margin-top-30" type="checkbox">
      <label>Concordar com os termos de uso.</label>
    </form>

    <div class="w3-row margin-top-50">
      <button class="w3-col w3-btn w3-round-xxlarge w3-center fundo-roxo w3-text-white">Cadastrar</button>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Registrar',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
