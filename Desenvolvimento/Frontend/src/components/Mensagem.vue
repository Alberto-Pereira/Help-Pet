<template>
    <div id="snackbar">{{mensagem}}</div>
    
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
            async exclamar(tipo, mensagem){
                this.tipo = tipo;
                this.mensagem = mensagem;
               var x = document.getElementById("snackbar");
                x.className = "show";
                await setTimeout(function(){ x.className = x.className.replace("show", ""); }, 6000);
                
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
#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: purple;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>
