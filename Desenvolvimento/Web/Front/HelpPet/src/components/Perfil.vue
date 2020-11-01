<template>
  <div class="entrar w3-col">
    <span><i class="fas fa-user-cog w3-display-topleft w3-text-white w3-margin-left w3-margin-top"></i></span>
    <span><i class="fas fa-sign-out-alt w3-display-topright w3-text-white w3-margin-right w3-margin-top"></i></span>
    <div class="w3-blue w3-mobile w3-center" style="height: 30vh; margin-top:0px!important;">
        <span class="w3-text-white w3-center fonte-titulo">Perfil</span>
        <div class="w3-center w3-col s6 m6 l12">
            <span class="circulo w3-white">
                <img class="perfil w3-center" src="../assets/imagens/avatar.jpg">
            </span>
        </div>
    </div>
    
    <div class="w3-center" style="margin-top: 50px;">
         <!-- Interruptor arredondado (toggle) -->
        <label class="switch">
            <input type="checkbox">
            <span class="slider round w3-text-gray bold">
                <span class="w3-col m6 s6 l6 font-verde" style="margin-left:2%!important;">Help! Pets</span>
                <span class="w3-col m6 s6 l6" style="margin-left:50%!important;">Meus Pets</span>
            </span>
        </label>
    </div>
   
    
  </div>
</template>

<script>
export default {
  name: 'Perfil',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
