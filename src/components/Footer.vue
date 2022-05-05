<template>
  <footer class="footer container">
    <router-link to="/contact">Contact Us</router-link>
    <a class="button" href="https://github.com/jjk-dev/aws-amplify-docent-app-vue">
      <img alt="github" src="../assets/github.png" width="22px" />
    </a>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {
  }
}
</script>

<style scoped>
footer {
  text-align: right;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 20px;
  font-size: 15px;
  border-top: 1px solid #f1f3f3;
}
    
a {
  color: #767a7a;
  margin-right: 30px;

} 

a:hover {
  opacity: 0.7;
  color: #767a7a;
  text-decoration: none;
}
</style>