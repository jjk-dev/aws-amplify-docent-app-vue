<template>
  <div class="location">
    <div class="container">
      <h1 class="category">Location</h1>
      <p class="description">
        전시 작품은 총 3개의 층에 위치해있습니다.
      </p>
      <div class="row">
        <div class="loactionCard card col-md-6">
          <h2 class="title">12F</h2>
          <p class="description">Reception 뒤, IT support 근처</p>
           <img src="../assets/location/12f.jpeg" alt="No images" class="locationImage"/>
        </div>
        <div class="loactionCard card col-md-6">
          <h2 class="title">13F/17F</h2>
          <p class="description">Kitchen 반대편, Meeting room 근처</p>
          <img src="../assets/location/13_17f.jpeg" alt="No images" class="locationImage"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'location',
    components: {},
}
</script>

<style>
.location {
  text-align: left;
}

.title {
  margin-bottom: 20px;
  font-weight: 500;
}

.description {
  margin-bottom: 30px;
}

.loactionCard {
  border: none;
  margin-top: 30px;
}

.locationImage {
  height: 300px;
}
</style>