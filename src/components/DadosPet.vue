<template>

  <div class="geral w3-container extender-div-tela-toda w3-small" style="padding:0px;">
    <div v-show="processando" class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
     
    </div>

    <div class="w3-blue w3-col" >
      <h2 class="w3-col w3-center bold-500">Dados do Pet</h2>
    </div>
    <div class="w3-center margin-bottom-15">
      <img style="border-radius: 50%" class="w3-border" :src="image" alt="" width="150" height="150">
    </div>

    <div class="padding-10 w3-col w3-border w3-border-blue w3-round" style="box-shadow: 5px 10px 20px 3px;">
      
      <span class="margin-left-8 bold-500 font-cinza-meio-claro">Para adoção? </span>
      <span class="w3-text-green bold-500">
        <label for="checksim">Sim</label>
        <input class="w3-radio" type="radio" name="paraadocao" value="a"  v-model="status"  id="checksim">
      </span>
      <span class="w3-text-red bold-500">
        <label for="checknao">Não</label>
        <input class="w3-radio" type="radio" name="paraadocao" value="n" v-model="status" unchecked id="checknao">
      </span>
      <label class="w3-col w3-margin-top w3-text-blue">Nome do pet</label>
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" v-model="nome" placeholder="Nome do pet:">
      <label class="w3-col w3-margin-top w3-text-blue">Raça</label>
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" v-model="raca" placeholder="Raça:">
      <label class="w3-col w3-margin-top w3-text-blue">Cor</label>
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" v-model="cor" placeholder="Cor:">
      <label class="w3-col w3-margin-top w3-text-blue">Sexo</label>
      <select 
        class="w3-select w3-margin-top w3-text-black bold-500" 
        style="max-width: 75%!important" 
        id="sexo" name="option"
        v-model="sexo"
      >
        <option value="m" class="w3-col" selected>Macho</option>
        <option value="f" class="w3-col">Femea</option>
      </select>
      <label class="w3-col w3-margin-top w3-text-blue">Número da coleira</label>
      <input class="w3-input w3-margin-top w3-text-black bold-500" type="text" v-model="numero_coleira" placeholder="Número da coleira:">
      <label class="w3-col w3-margin-top w3-text-blue">Descrição</label>
      <textarea class="w3-input w3-margin-top w3-text-black bold-500" type="text" v-model="descricao" ></textarea>
    </div>

    <nav class="container w3-display-bottomright w3-padding" style="position:fixed;"> 
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
      href="#" style="font-size:20px;padding: 4px!important; padding-left: 11px!important;" 
      class="buttons w3-green" tooltip="Gravar dados" @click="gravarDados()">
        <i class="fas fa-database"></i>
      </a>

      <a 
      class="buttons w3-blue" 
      style="font-size:30px; padding: 4px!important; padding-left: 12px!important;" 
      href="#">
        <i class="fas fa-paw"></i>
      </a>
    </nav>
    <Mensagem ref="enviarMensagem"/>
  </div>
    
</template>

<script>
    import ImageUploader from 'vue-image-upload-resize'
    import api from "../service/api";
    import Mensagem from "@/components/Mensagem"
    export default {
        name: "DadosPet",
        components: {
          ImageUploader,
          Mensagem
        },
        data : ()=> {
          return {
            hasImage : false,
            image : require('../assets/imagens/cachorrinho.png'),
            descricao:'',
            sexo: '',
            cor: '',
            nome: '',
            raca: '',
            numero_coleira: undefined,
            status: undefined,
            processando: false,
            localizacao:undefined
          }
        },
        mounted(){
          let parametros_login = localStorage.getItem("autorizacao");
          if(!parametros_login){
              this.$router.push({ name: 'Entrar' });
            }
          
        },
        methods: {
         
          setImage: function (file) {
            this.hasImage = true;
            this.image = file;
          },
          async gravarDados(){
            if (navigator.geolocation)
              {
                this.localizacao = []
                await navigator.geolocation.getCurrentPosition(position => {
                  const { latitude, longitude } = position.coords;
                 this.localizacao = [latitude, longitude]
                 console.log(this.localizacao)
                  
                });
                
            }
            
            
          
            let resposta;
            let sucesso = false;
            let parametros_locais = JSON.parse(localStorage.getItem('parametros-usuario'));
            try {
                resposta = await api.post("/newPet/"+parametros_locais.id_usuario, {
                img_pet: this.image,
                namePet: this.nome,
                sexPet: this.sexo,
                colorPet: this.cor,
                collarNumber: this.numero_coleira,
                description: this.descricao,
                location: this.localizacao,
                status: this.status,
                breed: this.raca,
              })
                sucesso = true;
                this.setTimeout(() => {
                  this.$router.push({ name: 'Perfil' });
                }, 5000);
              
            } catch (error) {
              sucesso = false;
             
            }
           
            if(sucesso){
               this.$refs.enviarMensagem.exclamar("inf", "Pet cadastrado com sucesso") 
            }
           
          },
          async getLocation()
          {
            if (navigator.geolocation)
              {

                await navigator.geolocation.getCurrentPosition(position => {
                  const { latitude, longitude } = position.coords;
                  return [latitude, longitude]
                  
                });
                
              }
            else{this.$refs.enviarMensagem.exclamar("erro","Geolocalização não é suportada nesse browser.")}
          },

          
    }
  }
</script>

<style scoped>

  .margin-left-8 {
    margin-left: 8px;
  }

  .margin-bottom-15{
    margin-bottom: 15px;
  }

  .border-img {
    border: 3px solid black;
  }

</style>
