<template>
    <div v-if="ativado" class="w3-modal" style="display: block">
        <div class="w3-modal-content w3-border w3-round-xlarge">
            <div class="w3-container">
                <span 
                    @click="ativado = false"
                    class="w3-button w3-display-topright">&times;
                </span>
                <div class="my-8 w3-margin-top">
                    <image-uploader
                        class="w3-col"
                        :quality="1.00"
                        :preview="true"
                        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
                        capture="user"
                        :debug="1"
                        doNotResize="gif"
                        :autoRotate="true"
                        outputFormat="string"
                        @input="setImage"
                    >
                        
                    </image-uploader>
                </div>
                <div class="w3-col w3-margin-top" @click="ativado = false"><strong class="w3-green w3-btn w3-border w3-round-xlarge">OK</strong></div>
            </div>
        </div>
    </div>
    
</template>

<script>
    import ImageUploader from 'vue-image-upload-resize'
    export default {
        components:{
            ImageUploader
        },
        name: "CapturarImage",
        data() {
            return {
            hasImage: false,
            image: null,
            ativado: false,
            origem: ''
            };
        },
        methods: {
            setImage: function(output) {
            this.hasImage = true;
            this.image = output;
            this.$emit('pegaImagem', this.image);
           
            },
            abrirModal(origem){
                this.origem = origem;
                this.ativado = true;
            },
            
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
