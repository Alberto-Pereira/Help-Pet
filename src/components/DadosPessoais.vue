<template>

  <div class="geral w3-container extender-div-tela-toda w3-small" style="padding:0px;">

    <div class="w3-blue w3-col" >
      <h2 class="w3-col w3-center bold-500">Dados pessoais</h2>
    </div>

    <div class="margin-top-80 padding-10">
      <div class="w3-center">
        <img style="border-radius: 50%; box-shadow: 5px 1px 20px 0px;" class="w3-border" :src="image" alt="" width="150" height="150">
      </div>
      <input id="cpf" class="w3-input w3-text-black bold-500 margin-top-30" type="text" v-model="cpf" placeholder="Cpf:">
      <input id="telefone" class="w3-input w3-margin-top w3-text-black bold-500" v-model="telefone" type="text" placeholder="Telefone:">
      <input id="whatsapp" class="w3-input w3-margin-top w3-text-black bold-500" v-model="whatsapp" type="text" placeholder="Whatsapp:">
      <input id="telegram" class="w3-input w3-margin-top w3-text-black bold-500" v-model="telegram" type="text" placeholder="Telegram:">

      <router-link
        to="/Cadastrar-endereco"
        class="w3-button w3-blue w3-col margin-top-50 w3-round-xxlarge">
        Cadastrar endereço
      </router-link>

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
    <Mensagem ref="enviarMensagem" />
  </div>
    
</template>

<script>
    import ImageUploader from 'vue-image-upload-resize'
    import api from "../service/api"
    import Mensagem from "@/components/Mensagem"
    export default {
      name: "DadosPessoais",
      components: {
        ImageUploader,
        Mensagem
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
        if(!parametros_login && parametros_locais == "deslogado"){
            this.$router.push({ name: 'Entrar' });
          }
        this.prencherTela()
      },

      methods: {
        async prencherTela(){
          console.log("detal use", this.dados_pessoais[0].id_usuario)
          let complementar = await api.get("/infoUser/"+ this.dados_pessoais[0].id_usuario)

          console.log(complementar.data)
          if(complementar.data[0].imagem_usuario.indexOf("base64") == 0){
             this.image = complementar.data[0].imagem_usuario
          }else{
            this.image = localStorage.getItem('imagem-usuario')
          }
          
          this.cpf = complementar.data[0].cpf;
          this.telefone = complementar.data[0].telefone;
          this.whatsapp = complementar.data[0].whatsapp;
          this.telegram = complementar.data[0].telegram;


        },
        setImage: function (file) {
          this.hasImage = true;
          this.image = file;
          
        },

        async gravarDados() {
        
           //let cpf_valido = await this.ValidarCPF();
           //if(!cpf_valido){
            // return;
           //}

          api.post("/detailUser/"+ this.dados_pessoais[0].id_usuario, {
            img_user: this.image,
            cpf: this.cpf,
            fone: this.telefone,
            whatsapp: this.whatsapp,
            telegram: this.telegram
          })
          .then(function (response) {
            if(response.data == "401"){
              console.log("Dados ja gravados!");
            }
          
          }).catch(function (error) {
            
            this.$refs.enviarMensagem.exclamar("", "Não foi gravar dados!")
          })
        }, 
        ValidarCPF(){
          let cpf = this.cpf;
          exp = /\.|\-/g
          cpf = cpf.toString().replace( exp, "" ); 
          let digitoDigitado = eval(cpf.charAt(9)+cpf.charAt(10));
          let soma1=0, soma2=0;
          let vlr =11;

          for(i=0;i<9;i++){
                  soma1+=eval(cpf.charAt(i)*(vlr-1));
                  soma2+=eval(cpf.charAt(i)*vlr);
                  vlr--;
          }       
          soma1 = (((soma1*10)%11)==10 ? 0:((soma1*10)%11));
          soma2=(((soma2+(2*soma1))*10)%11);

          let digitoGerado=(soma1*10)+soma2;
          if(digitoGerado!=digitoDigitado)        
            this.$refs.enviaMensagem.exclamar("", 'CPF Invalido!');   
            //document.getElementById("cpf").focus();  
            return false;    
        }
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
