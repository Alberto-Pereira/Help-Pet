<template>
  <div
    class="geral w3-container extender-div-tela-toda w3-small"
    style="padding: 0px"
  >
  <div class="w3-modal" v-if="processando" style="display: block; padding-top: 60%">
      <div class="w3-modal-content">
        <div class="w3-container w3-margin-top" style="padding: 0px">
          <div class="wrapper">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="w3-blue w3-col">
      <h2 class="w3-col w3-center bold-500">Dados endereço</h2>
    </div>

    <div class="margin-top-80 padding-10">
      <label class="w3-col w3-margin-top w3-text-blue"><i class="fas fa-envelope"></i> Cep</label>
      <the-mask
        :mask="['#####-###']"
        id="cep"
        class="w3-input w3-text-black bold-500 margin-top-30"
        type="text"
        v-model="cep"
        placeholder="Cep:"
      />
      <label class="w3-col w3-margin-top w3-text-blue"><i class="fas fa-road"></i> Logradouro</label>
      <input
        id="rua"
        class="w3-input w3-margin-top w3-text-black bold-500"
        placeholder="Logradouro:"
        v-model="street"
      />

      <label class="w3-col w3-margin-top w3-text-blue"><i class="fas fa-home"></i> Numero</label>
      <input
        id="numero"
        class="w3-input w3-margin-top w3-text-black bold-500"
        v-model="residenceNumber"
        type="text"
        placeholder="Numero:"
      />
      <label class="w3-col w3-margin-top w3-text-blue"><i class="fas fa-home"></i> Complemento</label>
      <input
        id="complemento"
        class="w3-input w3-margin-top w3-text-black bold-500"
        v-model="complement"
        type="text"
        placeholder="Complemento:"
      />
      <label class="w3-col w3-margin-top w3-text-blue"><i class="fas fa-city"></i> Bairro</label>
      
      <input
        id="bairro"
        class="w3-input w3-margin-top w3-text-black bold-500"
        v-model="district"
        type="text"
        placeholder="Bairro:"
      />
      <label class="w3-col w3-margin-top w3-text-blue"><i class="fas fa-flag"></i> Estado</label>

      <select
        class="w3-select w3-margin-top w3-text-black bold-500"
        style="max-width: 100% !important"
        id="estado"
        name="option"
        v-model="state"
      >

        <option value="" class="w3-col">Estado</option>
        <option class="w3-col" v-for="estado in estados">
          {{ estado.nome }}
        </option>
      </select>
      <label class="w3-col w3-margin-top w3-text-blue"><i class="fas fa-city"></i> Cidade</label>
      <input
        id="cidade"
        class="w3-input w3-margin-top w3-text-black bold-500"
        v-model="city"
        type="text"
        placeholder="cidade:"
      />
    </div>

    <nav class="container w3-display-bottomright w3-padding">
      <router-link
        to="/Perfil"
        style="
          font-size: 20px;
          padding: 4px !important;
          padding-left: 11px !important;
        "
        class="buttons w3-orange"
        tooltip="Voltar para perfil"
      >
        <i class="fas fa-arrow-left"></i>
      </router-link>

      <a
        style="
          font-size: 20px;
          padding: 4px !important;
          padding-left: 11px !important;
        "
        class="buttons w3-red"
        tooltip="Apagar dados"
        @click="apagarEndereco()"
      >
        <i class="fas fa-trash"></i>
      </a>

      <a
        style="
          font-size: 20px;
          padding: 4px !important;
          padding-left: 11px !important;
        "
        class="buttons w3-green"
        tooltip="Gravar dados"
        @click="gravarDados()"
      >
        <i class="fas fa-database"></i>
      </a>

      <a
        class="buttons w3-blue"
        style="
          font-size: 30px;
          padding: 4px !important;
          padding-left: 12px !important;
        "
        href="#"
      >
        <i class="fas fa-paw"></i>
      </a>
    </nav>
    <Mensagem ref="enviarMensagem" />
  </div>
</template>

<script>
import ImageUploader from "vue-image-upload-resize";
import api from "../service/api";
import Mensagem from "@/components/Mensagem";
import { TheMask } from "vue-the-mask";
export default {
  name: "Endereco",
  components: {
    ImageUploader,
    Mensagem,
    TheMask,
  },

  data() {
    return {
      endereco: "",
      cpf: "",
      telefone: "",
      whatsapp: "",
      telegram: "",
      dados_pessoais: undefined,
      hasImage: false,
      cpf_valido: true,
      image: "", //require('../assets/imagens/user.png'),
      cep: "",
      street: "",
      residenceNumber: "",
      complement: "",
      district: "",
      city: "",
      state: "",
      estados: [],
      cidades: [],
      existe_dados: false,
      processando: false
    };
  },
  mounted() {

    let logado = localStorage.getItem("autorizacao");
    if (logado !== "logado") {
      this.$router.push({ name: "Entrar" });
    }
  },

  async created() {
    this.processando = true
    let parametros_locais = JSON.parse(
      localStorage.getItem("parametros-usuario")
    );
    this.dados_pessoais = parametros_locais;

    let parametros_login = localStorage.getItem("autorizacao");

    if (parametros_login != "logado") {
      this.$router.push({ name: "Entrar" });
      return;
    }
    this.processando = false
    await this.prencherTela();
  },

  methods: {
    async prencherTela() {
      let dados_estados;
      this.processando = true;
      try {
        dados_estados = await api.get(
          "http://servicodados.ibge.gov.br/api/v1/localidades/estados"
        );
        this.estados = dados_estados.data;
      } catch (error) {
        this.$refs.enviarMensagem.exclamar(
          "erro",
          "Não foi possivel buscar estado"
        );
      }

      let complementar;
      try {
        complementar = await api.get(
          "/infoAdress/" + this.dados_pessoais.id_usuario
        );
      } catch (error) {
        this.$refs.enviarMensagem.exclamar(
          "erro",
          "Não existe dados a mostrar, por favor complete seus dados"
        );
      }
      console.log("complementar", complementar);
      if (complementar) {
        if (!complementar.data || complementar.data == "") {
          this.$refs.enviarMensagem.exclamar(
            "erro",
            "Por favor complete seus dados"
          );
        } else {
          this.cep = complementar.data.cep;
          this.street = complementar.data.rua;
          this.residenceNumber = complementar.data.num_residencia;
          this.complement = complementar.data.complemento;
          this.district = complementar.data.bairro;
          this.city = complementar.data.cidade;
          this.state = complementar.data.estado;
          this.existe_dados = true;
        }
      }
      this.processando = false
    },
    setImage: function (file) {
      this.hasImage = true;
      this.image = file;
    },
    apagarEndereco() {
      this.processando = true;
      try {
        api.delete("/deleteAdress/" + this.dados_pessoais.id_usuario);
        this.$refs.enviarMensagem.exclamar("info", "Deletado com sucesso");
        window.reload;
      } catch (error) {
        this.$refs.enviarMensagem.exclamar("info", "Não foi possivel deletar");
      }
      this.processando = false;
      this.prencherTela()
    },
    async atualizar() {
      let sucesso = false;
      this.processando = true
      await api
        .put("/updateAdress/" + this.dados_pessoais.id_usuario, {
          cep: this.cep,
          street: this.street,
          residenceNumber: this.residenceNumber,
          complement: this.complement,
          district: this.district,
          city: this.city,
          state: this.state,
        })
        .then(function (response) {
          if (response.status == 200) {
            sucesso = true;
          } else {
            sucesso = false;
          }
        })
        .catch(function (error) {
          sucesso = false;
        });
      if (sucesso) {
        this.$refs.enviarMensagem.exclamar(
          "info",
          "Dados Atualizados com sucesso!"
        );
      } else {
        this.$refs.enviarMensagem.exclamar(
          "erro",
          "Não foi possivel Atualizar dados!"
        );
      }
      this.processando = false;
    },
    async gravarDados() {
      if (this.existe_dados) {
        this.atualizar();
        return;
      }
      this.processando = true
      let sucesso = false;
      await api
        .post("/newAdress/" + this.dados_pessoais.id_usuario, {
          cep: this.cep,
          street: this.street,
          residenceNumber: this.residenceNumber,
          complement: this.complement,
          district: this.district,
          city: this.city,
          state: this.state,
        })
        .then(function (response) {
          if (response.status == 200) {
            sucesso = true;
          } else {
            sucesso = false;
          }
        })
        .catch(function (error) {
          sucesso = false;
        });
      if (sucesso) {
        this.$refs.enviarMensagem.exclamar(
          "info",
          "Dados gravados com sucesso!"
        );
      } else {
        this.$refs.enviarMensagem.exclamar("erro", "Não foi gravar dados!");
      }
      this.processando = false
    },
  },
};
</script>

<style scoped>
.margin-top-100 {
  margin-top: 100px;
}

.margin-top-15 {
  margin-top: 15px;
}

.border-img {
  border: 3px solid black;
}
</style>
