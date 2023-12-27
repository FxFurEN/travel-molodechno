<template>
    <div>
      <input type="text" v-model="nameLandmark" placeholder="Название достопримечательности" />
      <input type="file" @change="handleFileChange" />
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
      };
    },
    methods: {
      handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.selectedImage = file;
        }
      },
      async addLandmark() {
        try {
          const formData = new FormData();
          formData.append('nameLandmark', this.nameLandmark);
          formData.append('image', this.selectedImage);
  
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
  