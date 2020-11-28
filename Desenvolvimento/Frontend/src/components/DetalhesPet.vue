<template>

  <div class="geral w3-container extender-div-tela-toda w3-center" style="padding:0px;">
    <div class="w3-blue w3-col">

      <h2 class="w3-col w3-center bold-500">Detalhes Pet</h2>

    </div>

    <div class="margin-top-80">
      <div class="w3-center">
        <img :src="image" alt="" class="w3-border" height="150"
             style="border-radius: 50%; box-shadow: 5px 1px 20px 0px;" width="150">
      </div>
    </div>

    <div id="visualizar">

      <div class="w3-container w3-col">
          <span :style="getStatus()" class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align" v-if="!editando">
              <i class="fas fa-exclamation-circle"></i> : 
              <label style="color:green;" v-if="status == 'n'">Normal</label>
              <label style="color:yellow;" v-if="status == 'a'">Para adoção</label>
              <label style="color:red;" v-if="status == 'p'">Desaparecido</label>
              <label style="color:blue;" v-if="status == 'l'">Localizado</label>
          </span>
      </div>

       <div v-if="id_pet_dono != id_logado" class="w3-col w3-blue" @click="chamar()"><i class="fab fa-whatsapp"></i> Falar com proprietario agora</div>
      <div class="w3-margin-top w3-col w3-border w3-container w3-mobile w3-round labels w3-animate-zoom w3-small" v-if="!editando">
        <span class="w3-span w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-user"></i> : {{nome_proprietario}}</span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align">
          <i class="fas fa-paw"></i> : {{nome_pet}}
        </span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-palette"></i> : {{cor}}</span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-horse-head"></i> : {{raca}}</span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-qrcode"></i> : {{codigo_coleira}}</span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align"><i class="fas fa-venus"></i><i class="fas fa-mars"></i> : {{sexo}}</span>
        <span class="w3-span w3-margin-top w3-text-black bold-500 w3-col w3-left-align ">Descrição :
          <label class="w3-border w3-round-xxlarge w3-col w3-container">{{descricao}}</label>
        </span>
      </div>
    </div>

    <div class="w3-border w3-container w3-round w3-col w3-animate-zoom w3-margin-top w3-small" id="editar" v-if="editando">

      <div class="margin-top-30 w3-margin-bottom w3-left-align w3-col">

        <span class="margin-left-8 bold-500 font-cinza-meio-claro">Status? </span>
        <div>
          <span @click="status = 'n'" class="w3-text-green bold-500 w3-half">
            <i class="far fa-check-circle" v-if="status == 'n'"></i>
            <i class="far fa-circle" v-else></i>
            <label>Normal</label>
          </span>

          <span @click="status = 'a'" class="w3-text-yellow bold-500 w3-half">
            <i class="far fa-check-circle" v-if="status == 'a'"></i>
            <i class="far fa-circle" v-else></i>
            <label>Para adoção</label>
          </span>

          <span @click="status = 'p', atualizarStatusPerdido()" class="w3-text-red bold-500 w3-half">
            <i class="far fa-check-circle" v-if="status == 'p'"></i>
            <i class="far fa-circle" v-else></i>
            <label>Perdido</label>
          </span>

          <span @click="status = 'l'" class="w3-text-blue bold-500 w3-half">
            <i class="far fa-check-circle" v-if="status == 'l'"></i>
            <i class="far fa-circle" v-else></i>
            <label>Encontrado</label>
          </span>
        </div>
       
        <div class="w3-col" v-if="id_pet_dono == id_logado">
          <label>Nome do pet</label>
          <input class="w3-input w3-margin-top w3-text-black bold-500" placeholder="Nome do pet:" type="text" v-model="nome_pet">
          <label>Raça</label>
          <input class="w3-input w3-margin-top w3-text-black bold-500" placeholder="Raça:" type="text" v-model="raca">
          <label>Cor</label>
          <input class="w3-input w3-margin-top w3-text-black bold-500" placeholder="Cor:" type="text" v-model="cor">
          <label>Sexo</label>
          <input class="w3-input w3-margin-top w3-text-black bold-500" placeholder="Sexo:" type="text" v-model="sexo">
          <label>Número da coleira</label>
          <input class="w3-input w3-margin-top w3-text-black bold-500" placeholder="Número da coleira" type="text" v-model="codigo_coleira">
          <label>Descrição</label>
          <input class="w3-input w3-margin-top w3-text-black bold-500" placeholder="Descrição:" type="text" v-model="descricao">
         </div>
      </div>

    </div>

    <nav class="container w3-display-bottomright w3-padding" style="position:fixed;">
      <router-link
        class="buttons w3-orange"
        style="font-size:20px;padding: 4px!important; padding-left: 9px!important;"
        to="/Perfil" tooltip="Voltar para perfil">
        <i class="fas fa-arrow-left"></i>
      </router-link>

      <a
        @click="editando = !editando" class="buttons w3-brown"
        style="font-size:20px;padding: 4px!important; padding-left: 9px!important;" 
        tooltip="Editar" 
        v-if="id_pet_dono == id_logado">
        <i class="fas fa-edit"></i>
      </a>

      <label class="buttons w3-purple" for="fileInput" slot="upload-label" style="font-size:20px;padding: 4px!important; padding-left: 9px!important;" tooltip="Inserir foto">
        <i class="fas fa-camera"></i>
      </label>
      <image-uploader :autoRotate="true"
                      :className="['fileinput', { 'fileinput--loaded': hasImage }]"
                      :debug="1"
                      :preview="false"
                      :quality="1.00"
                      @input="setImage"
                      capture="user"
                      class="w3-col"
                      doNotResize="gif"
                      outputFormat="string"
                      style="display: none"
      ></image-uploader>

      <a
        @click="gravarDados()" class="buttons w3-green"
        href="#" style="font-size:20px;padding: 4px!important; padding-left: 9px!important;" tooltip="Gravar dados">
        <i class="fas fa-database"></i>
      </a>

      <a
        class="buttons w3-blue"
        href="#"
        style="font-size:30px; padding: 4px!important; padding-left: 10px!important;">
        <i class="fas fa-paw"></i>
      </a>
    </nav>


  </div>

</template>

<script>
  import CapturarImage from '@/components/CapturarImage'
  import ImageUploader from 'vue-image-upload-resize'
  import api from "@/service/api";

  export default {
    components: {
      CapturarImage,
      ImageUploader
    },
    name: "DetalhesPet",
    data() {
      return {
        localizacao: undefined,
        nome_pet: "",
        nome_proprietario:'',
        cor: '',
        raca: '',
        sexo: '',
        codigo_coleira: '',
        status: '',
        descricao: '',
        longitude: undefined,
        latitude: undefined,
        pode_editar: true,
        editando: false,
        mostrar_filtro: false,
        hasImage: false,
        pet: {},
        image: '',
        id_pet_dono:'',
        id_logado:'',
        id_pet:0
      };
    },
    async created() {

      let parametros_login = localStorage.getItem("autorizacao");
      let nome_proprietario = await JSON.parse(localStorage.getItem("parametros-usuario"));
      if (!parametros_login) {
        this.$router.push({name: 'Entrar'});
      }

      this.localizacao = navigator.geolocation;
      let detalhe_pet = await JSON.parse(localStorage.getItem("pet-detalhe"));

      //this.imagem_pet = detalhe_pet.imagem_pet; TODO verificar pois foi trocado para image
      this.id_pet_dono =  detalhe_pet.id_usuario_pet_fk;7
      this.id_logado = nome_proprietario[0].id_usuario;
      this.id_pet = detalhe_pet.id_pet
      console.log(this.id_pet_dono, this.id_logado)
      this.image = detalhe_pet.imagem_pet;
      this.nome_pet = detalhe_pet.nome_pet;
      this.status = detalhe_pet.status_pet;
      this.sexo = detalhe_pet.sexo_pet;
      this.codigo_coleira = detalhe_pet.numero_coleira;
      this.descricao = detalhe_pet.descricao_pet;
      this.cor = detalhe_pet.cor_pet;
      this.raca = detalhe_pet.raca_pet;
      this.longitude = detalhe_pet.longitude;
      this.latitude = detalhe_pet.latitude;
      this.whatsapp = detalhe_pet.whatsapp;
      this.nome_proprietario = nome_proprietario[0].nome_usuario + " " + nome_proprietario[0].sobrenome_usuario;
      //console.log("dadadadsd", detalhe_pet[0].nome_usuario)
    },

    methods: {
      getStatus() {
        if (status == 'd') {
          return 'color: red!important;';
        } else if (status == 'a') {
          return 'color: yellow!important;';
        } else {
          return 'color: green!important;';
        }
      },
      atualizarStatusPerdido(){
         api.put('/missingPet/'+ this.id_pet_dono , {
          "idPet": this.id_pet
        }).then(function (response) {
         
        }).catch(function (error) {
          
          //this.$refs.enviaMensagem.exclamar("", "Não foi possivel logar!")
        })
      },
      chamar(){
        window.location.href = 'https://api.whatsapp.com/send?phone='+this.whatsapp+'&text=Olá você é responsável por esse pet '+this.nome_pet+'? &source&data=';
      },
      setImage: function (file) {
        this.hasImage = true;
        this.image = file;

      },
      gravarDados() {
        //TODO implementar
      }
    }
  }
</script>

<style scoped>
  .detalhe-foto-pet {
    max-width: 100%;
    border-radius: 25px;
    width: 200px;
    height: 200px;
    box-shadow: cadetblue 1px 2px 5px 2px;
  }

  .labels {
    box-shadow: cadetblue 1px 2px 5px 2px;
  }
</style>
