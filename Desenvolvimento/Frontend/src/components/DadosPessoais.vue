<template>

  <div class="geral w3-container extender-div-tela-toda" style="padding:0px;">

    <div class="w3-blue w3-col" >
      <h2 class="w3-col w3-center bold-500">Dados pessoais</h2>
    </div>

    <div class="margin-top-50 padding-10">
      <input class="w3-input w3-text-black bold-500" type="text" v-model="cpf" placeholder="Cpf:">
      <input class="w3-input w3-margin-top w3-text-black bold-500" v-model="endereco" type="text" placeholder="Endereço:">
      <input class="w3-input w3-margin-top w3-text-black bold-500" v-model="telefone" type="text" placeholder="Telefone:">
      <input class="w3-input w3-margin-top w3-text-black bold-500" v-model="whatsapp" type="text" placeholder="Whatsapp:">
      <input class="w3-input w3-margin-top w3-text-black bold-500" v-model="telegram" type="text" placeholder="Telegram:">
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
      name: "DadosPessoais",
      data () {
        return {
          endereco:'',
          cpf:'',
          telefone:'',
          whatsapp:'',
          telegram:'',
          dados_pessoais:undefined
        }
      },
      mounted(){
        let parametros_locais = localStorage.getItem('parametros-usuario');
        //alimentar dados_pessoais com os parametros se existir
      }
    }
</script>

<style scoped>

</style>
