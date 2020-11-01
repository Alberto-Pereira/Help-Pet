<template>
  <div class="entrar w3-center w3-col">
    <span class="w3-text-green w3-margin-top w3-col s6 m6 l6"><h1>Entrar</h1></span>
    <img class="w3-col s6 m6 l6" src="../assets/imagens/logo.png">

    <form class="w3-container">
      <input class="w3-input w3-margin-bottom" type="text" placeholder="Email">
      <input class="w3-input w3-margin-bottom w3-margin-top" type="text"  placeholder="Senha">
      <button class="w3-btn w3-purple w3-round-xxlarge w3-margin-top  w3-margin-bottom w3-col">Entrar</button>
      <span class="w3-text-green w3-margin-top">Perdeu sua senha?</span>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Entrar',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 10%;
  height: 20%;
}
</style>
