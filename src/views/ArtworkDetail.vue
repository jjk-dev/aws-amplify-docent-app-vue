<template>
  <div class="artworkDetail">
    <div class="container">
      <div class="row">
        <div class="col-md-5 order-md-1 mb-4">
          <img :src="`${pic.img}`" :alt="`${pic.title}`" class="artworkImage"/>
        </div>
        <div class="artworkContent col-md-7 order-md-2">
          <h2 class="title"><strong>{{ pic.title }}</strong></h2>
          <p class="subtitle">{{ pic.author }}</p>
          <p class="description"><strong>작품 설명</strong></p>
          <p>{{ pic.description }}</p>
          <p class="description"><strong>작품 위치</strong></p>
          <p>{{ pic.location }}</p>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'artworkDetail',
  components: {
  },
  data() {
    return {
      pic: {},
      pics: [
        {
          id: 1,
          title: "Snow cat",
          author: "Kang",
          description:"Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm. Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          img: "https://placekitten.com/500/500",
          location: "1234 Fancy Ave",
        },
        {
          id: 2,
          title: "Snow cat2",
          author: "Kang2",
          description:"Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          img: "https://placekitten.com/500/500",
          location: "1234 Fancy Ave",
        },
        {
          id: 3,
          title: "Snow cat3",
          author: "Kang3",
          description:"Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          img: "https://placekitten.com/500/500",
          location: "1234 Fancy Ave",
        },
        {
          id: 4,
          title: "Snow cat4",
          author: "Kang4",
          description:"Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
          img: "https://placekitten.com/500/500",
          location: "1234 Fancy Ave",
        }
      ]
    };
  },
  created() {
    const ID = Number(this.$route.params.id);
    let pic = this.pics.find(pic => pic.id === ID);
    this.pic = pic;
  }
}
</script>

<style scoped>
.artworkDetail {
  text-align: left;
}

.artworkImage {
  margin-top: 20px;
  height: 400px;
}
.artworkContent {
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.title {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 500;
}

.subtitle {
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 40px;
}

.description {
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>