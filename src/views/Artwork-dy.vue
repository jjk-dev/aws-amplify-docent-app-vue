<template>
  <div class="artwork">
    <div class="container">
      <h1 class="category">Artworks</h1>
      <p class="description">
        AWSomeS 회원들의 작품입니다. 작품을 클릭해 상세내용을 보실 수 있습니다.
      </p>
    </div> 
    <div class="artworkList">
      <p v-if="loading">Loading...</p>
      <transition-group name="card" tag="ul" class="row" v-else>
        <div v-for="pic in pics" :key="pic.id" class="artworkCard col-md-3" :pic="pic" >
          <router-link :to="`/artwork/${pic.id}`">
            <img :src="`${pic.img}`" :alt="`Image of ${pic.title}`" class="cardImage">
            <div class="cardContent">
              <span>{{pic.title}}</span>:
              <span>{{pic.author}}</span>
            </div>
          </router-link>
        </div>
      </transition-group>
    </div> 
  </div>
</template>

<script>
import { API } from 'aws-amplify';

export default {
  name: 'artwork',
  components: {
  },
  data() {
    return {
      pics: [],
    };
  },
  methods: {
    getPics() {
      API.get('awsomesApi', `/artwork`, {}).then((result) => {
        this.pics = result.data;
      }).catch(err => {
        console.log(err);
      });
    }
  },
  created() {
    this.getPics();
  },
}
</script>

<style scoped>
.artwork {
  text-align: left;
}

.description {
  margin-top: 30px;
  margin-bottom: 50px;
}

.artworkList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.artworkCard {
  display: flex;
  align-items: center;
  height: 300px;
  margin-bottom: 10px;
}

.artworkCard:hover {
  box-shadow: 1px 0rem 14px 0px #eee;
  outline: none;
  opacity: 0.7;
}

.cardImage {
  height: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.cardContent, a {
  margin-top: 20px;
  margin-bottom: 20px;
  text-decoration: none;
  text-align: center;
  color: #232F3E;
}
</style>