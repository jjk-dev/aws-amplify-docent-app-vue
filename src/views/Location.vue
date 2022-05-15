<template>
  <div class="location">
    <div class="container">
      <h1 class="category">Location</h1>
      <p class="description">
        전시 작품은 총 3개의 층에 위치해있습니다.
      </p>
      <div class="columns is-multiline">
        <div class="column is-one-quarter">
      <h2 class="title">12F</h2>
      <p class="description">Need Image</p>
      </div>
      <div class="column is-one-quarter">
      <h2 class="title">13F</h2>
      <p class="description">Need Image</p>
      </div>
      <div class="column is-one-quarter">
      <h2 class="title">17F</h2>
      <p class="description">Need Image</p>
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
  margin-top: 80px;
  margin-bottom: 20px;
  font-weight: 500;
}

.description {
  margin-top: 30px;
  margin-bottom: 50px;
}
</style>