<template>
  <div class="home">
    <div class="hero container">
      <h1 class="title">The AWSOMES Exhibition</h1>
      <h2 class="subtitle">
        Date | May 9th, 2022 ~</br>
        Location | ICN16 12F, 13F, 17F
      </h2>
    </div>
  </div>
</template>

<script>
export default {
    name: 'home',
    components: {},
}
</script>

<style scoped>
.home {    
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
}

.hero {
  height: 100%;
}

.hero-example {
  background-image: url("../assets/background.png");
}
  
.title {
  padding: 40px 0 20px 0;
  font-size: 60px;
  margin-top: 50px;
}

.subtitle {
  font-size: 30px;
  margin-top: 100px;
}
</style>