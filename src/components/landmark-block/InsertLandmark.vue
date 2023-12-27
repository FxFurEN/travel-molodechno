<template>
    <div>
      <input type="text" v-model="nameLandmark" placeholder="Название достопримечательности" />
      <input type="file" @change="handleFileChange" />
      <input type="file" @change="handleMapFileChange" />
      <button @click="addLandmark">Добавить</button>
    </div>
  </template>
  
  <script>
  import { todoAPI } from '../../api/api';
  
  export default {
    data() {
      return {
        nameLandmark: '',
        selectedImage: null,
        selectedMapImage: null,
      };
    },
    methods: {
      handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.selectedImage = file;
        }
      },
      handleMapFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.selectedMapImage = file;
        }
      },
      async addLandmark() {
        try {
          const formData = new FormData();
          formData.append('nameLandmark', this.nameLandmark);
          formData.append('image', this.selectedImage);
          formData.append('mapImage', this.selectedMapImage);
  
          await todoAPI.addLandmark(formData);
  
          // Опционально: обновление списка после успешного добавления
          this.loadLandmarks();
        } catch (error) {
          console.error('Ошибка при добавлении достопримечательности:', error);
        }
      },
    },
  };
  </script>