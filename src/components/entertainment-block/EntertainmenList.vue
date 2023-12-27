<template>
    <div>
      <div>
        <h2>Развлечения</h2>
      </div>
      <div v-for="entertaiment in entertaimentData" :key="entertaiment.ID">
        <EntertainmentItem 
        :Title_Entertaiment="entertaiment.Title_Entertaiment" 
        :En_Description="entertaiment.En_Description" 
        :ImageData="entertaiment.ImageData" />
      </div>
      <EntertainmentInsert @entertainmentAdded="loadEntertaiment" />
    </div>
  </template>
  
  <script>
  import { todoAPI } from '../../api/api';
  import EntertainmentItem from './EntertainmentItem.vue';
  import EntertainmentInsert from './EntertainmentInsert.vue';
  
  export default {
    components: {
      EntertainmentItem,
      EntertainmentInsert,
    },
    data() {
      return {
        entertaimentData: [],
      };
    },
    mounted() {
      this.loadEntertaiment();
    },
    methods: {
      async loadEntertaiment() {
        try {
          const response = await todoAPI.getAllEntertaiment();
          this.entertaimentData = response.data;
        } catch (error) {
          console.error('Ошибка при загрузке развлечений:', error);
        }
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>

  </style>
  