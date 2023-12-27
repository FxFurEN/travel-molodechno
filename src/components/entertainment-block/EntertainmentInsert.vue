<template>
    <div>
      <input type="text" v-model="titleEntertainment" placeholder="Название развлечения" />
      <input type="text" v-model="enDescription" placeholder="Описание" />
      <input type="file" @change="handleImageChange" />
      <button @click="addEntertainment">Добавить</button>
    </div>
  </template>
  
  <script>
  import { todoAPI } from '../../api/api';
  
  export default {
    data() {
      return {
        titleEntertainment: '',
        enDescription: '',
        selectedImage: null,
        selectedMapImage: null,
      };
    },
    methods: {
      handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.selectedImage = file;
        }
      },
      handleMapImageChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.selectedMapImage = file;
        }
      },
      async addEntertainment() {
        try {
          const formData = new FormData();
          formData.append('titleEntertainment', this.titleEntertainment);
          formData.append('enDescription', this.enDescription);
          formData.append('image', this.selectedImage);
          formData.append('mapImage', this.selectedMapImage);
  
          await todoAPI.addEntertainment(formData);
  
          // Optional: update the list after successful addition
          this.loadEntertainment();
        } catch (error) {
          console.error('Ошибка при добавлении развлечения:', error);
        }
      },
    },
  };
  </script>
  