<template>
  <div class="card">
    <p>{{ NameLandMark }}</p>
    <img :src="getImageUrl(ImageData)" alt="Landmark Image">
    <div class="card__content">
      <p class="card__title">Тест</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    NameLandMark: String,
    ImageData: ArrayBuffer
  },
  methods: {
    getImageUrl(imageData) {
      if (!imageData) {
        return '';
      }

      const bytes = new Uint8Array(imageData);
      const blob = new Blob([bytes], { type: 'image/jpeg' });
      const dataUrl = URL.createObjectURL(blob);

      return dataUrl;
    }
  }
}
</script>


<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  height: 35%;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card img {
  width: 100%;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}
</style>
