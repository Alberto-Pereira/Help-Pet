<template>

  <div class="geral w3-container extender-div-tela-toda w3-small" style="padding:0px;">

    <div class="w3-blue w3-col" >
      <h2 class="w3-col w3-center bold-500">Dados pessoais</h2>
    </div>

    <div class="margin-top-80 padding-10">
      <div class="w3-center">
        <img class="w3-border w3-round" :src="image" alt="" width="150" height="150">
      </div>
      <input class="w3-input w3-text-black bold-500 margin-top-30" type="text" v-model="cpf" placeholder="Cpf:">
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

      <label for="fileInput" slot="upload-label" class="buttons w3-purple" style="font-size:20px;padding: 4px!important; padding-left: 9px!important;" tooltip="Inserir foto">
        <i class="fas fa-camera"></i>
      </label>
      <image-uploader style="display: none"
                      class="w3-col"
                      :quality="1.00"
                      :preview="false"
                      :className="['fileinput', { 'fileinput--loaded': hasImage }]"
                      capture="user"
                      :debug="1"
                      doNotResize="gif"
                      :autoRotate="true"
                      outputFormat="string"
                      @input="setImage"
      ></image-uploader>

      <a 
      href="#" style="font-size:20px;padding: 4px!important; padding-left: 9px!important;" 
      class="buttons w3-green" tooltip="Gravar dados" @click="gravarDados()">
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
    import ImageUploader from 'vue-image-upload-resize'
    import api from "../service/api";
    export default {
      name: "DadosPessoais",
      components: {
        ImageUploader,
      },
      data () {
        return {
          endereco:'',
          cpf:'',
          telefone:'',
          whatsapp:'',
          telegram:'',
          dados_pessoais:undefined,
          hasImage : false,
          image : require('../assets/imagens/user.png')
        }
      },
      created(){
        let parametros_locais = JSON.parse(localStorage.getItem('parametros-usuario'));
        let detalhes_usuario_detalhado = JSON.parse(localStorage.getItem('detalhes-usuario-detalhado'));
        if(detalhes_usuario_detalhado){

          this.image = detalhes_usuario_detalhado[0].imagem_usuario
          this.cpf = detalhes_usuario_detalhado[0].cpf;
          this.telefone = detalhes_usuario_detalhado[0].fone;
        }
       
        this.dados_pessoais = parametros_locais;
        let parametros_login = localStorage.getItem("autorizacao");
        if(parametros_login !== "autorizado"){
            this.$router.push({ name: 'Entrar' });
          }
      },
      methods: {
        prencherTela : function (){
          api.get("/infoUser/"+this.dados_pessoais.id_usuario)
          .then(function (response) {
            if(response){
               localStorage.setItem('detalhes-usuario-detalhado', JSON.stringify(response.data));
                this.image = response.data.imagem_usuario;
                this.cpf = response.data.cpf;
                this.telefone = response.data.fone;
              // colocar mensagem de sucesso

            }
          
          }).catch(function (error) {
            //this.$refs.envia-mensagem.exclamar("", "Houve falha na requisição!")
          })
        },
        setImage: function (file) {
          this.hasImage = true;
          this.image = file;
          
        },
        gravarDados : function () {
           api.post("/detailUser/"+this.dados_pessoais.id_usuario, {
            img_user: this.image,
            cpf: this.cpf,
            fone: this.telefone
          }).then(function (response) {
            if(response){
               localStorage.setItem('detalhes-usuario', JSON.stringify(response.data));
               this.prencherTela();
              // colocar mensagem de sucesso

            }
          
          }).catch(function (error) {
            //this.$refs.envia-mensagem.exclamar("", "Houve falha na requisição!")
          })
        },
        
      }
       

    }
</script>

<style scoped>

  .margin-top-100{
    margin-top: 100px;
  }

  .margin-top-15{
    margin-top: 15px;
  }

  .border-img {
    border: 3px solid black;
  }

</style>
