<template>
  <nav class="navbar container" role="navigation">
    <div class="navbar-brand">
      <img src="../assets/logo.png" alt="logo" width="100px" />
    </div>
    <div id="navbar" class="navbar-menu">
    <div class="navbar-end">
        <router-link to="/" exact class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/artwork" class="navbar-item">Artworks</router-link>
        <router-link to="/location" class="navbar-item">Location</router-link>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  components: {
  }
}
</script>

<style scoped>
nav {
  margin-top: 25px;
  margin-bottom: 30px;
  padding: 20px;
  font-size: 20px;
  border-bottom: 1px solid #f1f3f3;
}
    
a {
  color: #232F3E;
  margin-left: 50px;
} 

a:hover {
  opacity: 0.7;
  color: #232F3E;
  text-decoration: none;
}

a.router-link-active {
  color: #ff9900;
}
</style>