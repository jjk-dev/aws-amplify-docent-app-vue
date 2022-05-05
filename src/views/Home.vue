<template>
  <div class="home">
      <section class="hero is-dark">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">The AWSOMES Exhibition</h1>
            <h2 class="subtitle">
                Date | May 9th, 2022 ~ </br>
                Location | ICN16 12F, 13F, 17F
            </h2>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
export default {
    name: 'home',
    components: {},
}
</script>

<style scoped>
  .hero {    
    text-align: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }
  
  .hero-body .title {
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    font-size: 30px;
  }
</style>