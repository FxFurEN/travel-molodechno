<template>
  <div class="main-container">
    <div class="table-container">
      <div class="table-row heading"></div>
      <div class="table-row">
        <div class="row-sub-container">
          <div class="row-item text-header-row-item">{{ Title_Entertaiment }}</div>
          <div class="row-item text-row-item">{{ En_Description }}</div>
        </div>
        <div class="row-item">
          <img :src="imageUtils.getImageUrl(ImageData)" alt="Entertainment Image" v-if="isImage">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as imageUtils from '../../imageUtils';

export default {
  props: {
    Title_Entertaiment: String,
    En_Description: String,
    ImageData: [ArrayBuffer, String],
  },
  methods: {
    handleImageLoad() {
      console.log('Изображение успешно загружено');
    },
  },
  computed: {
    // Проверка наличия изображения
    isImage() {
      return this.ImageData && typeof this.ImageData !== 'string';
    },
    // Проверка наличия ImageMapData
    isImageMap() {
      return this.ImageMapData && typeof this.ImageMapData !== 'string';
    },
  },
  data() {
    return {
      imageUtils,
    };
  },
};
</script>


<style lang="scss" scoped>
img{
  width: 50%;
  height: 50%;
}
* {
    
    color: #313131;
}
h2{
    opacity: 0.8;
    color: #313131;
}
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  .table-container {
    display: flex;
    flex-flow: column nowrap;
    width: 80%;
    margin: 0 auto;
    .table-row {
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        .row-item {
            opacity: 0.8;
            width:80%;
            display: flex;
            font-size: 14px;
            
        }
        .text-header-row-item{
            color: #313131;
            font-size: 31px;
            font-style: normal;
            font-weight: 900;
            line-height: 32px; /* 103.226% */
            margin-bottom: 2%;
        }
        .text-row-item{
            color: #313131;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 120% */
            margin-bottom: 10%;

        }
        .row-sub-container {
            display: flex;
            flex-flow: column nowrap;
        }
        .table-row:last-child,
        .row-sub-container .row-item:last-child {
            border-bottom: 0;
        }
    }
    .heading {
        background-color: #ececec;
        color: #3e3e3e;
        font-weight: bold;
    }

}
}

</style>