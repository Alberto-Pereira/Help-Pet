<template>
    <div v-if="ativado" class="w3-modal w3-animate-zoom" style="display: block; background-color:transparent;">
        <div class="w3-modal-content w3-border w3-round-xlarge " :class="getEstilo()">
            <div class="w3-container">
                <i :class="getIcone()"></i> <strong>{{mensagem}}</strong>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "Mensagem",
        data() {
            return {
            tipo: '',
            mensagem: '',
            ativado: false,
            };
        },
        methods: {
            exclamar(tipo, mensagem){
                this.tipo = tipo;
                this.mensagem = mensagem;
                this.ativado = true
                setTimeout(this.ativado = true, 90000000000);
                
            },
            getEstilo(){
                if(this.tipo == "info"){
                    return "w3-yellow";
                }
                if(this.tipo == "erro"){
                    return "w3-red";
                }
                if(this.tipo == "sucesso"){
                    return "w3-green";
                }
            },
            getIcone(){
                if(this.tipo == "info"){
                    return "fas fa-info-circle";
                }
                if(this.tipo == "erro"){
                    return "fas fa-exclamation-triangle";
                }
                if(this.tipo == "sucesso"){
                    return "far fa-thumbs-up";
                }
            }
            
        }
    }
</script>

<style scoped>
.detalhe-foto-pet{
  max-width: 90%;
  border-radius: 25px;
  width: 200px;
  height: 200px;
}
#fileInput {
  display: none;
}
.my-8 {
  margin-top: 0rem;
  margin-bottom: 0rem;
}
</style>
