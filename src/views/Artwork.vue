<template>
  <div class="artwork">
    <div class="container">
      <h1 class="category">Artworks</h1>
      <p class="description">
        AWSomeS 회원들의 작품입니다. 작품을 클릭해 상세내용을 보실 수 있습니다.
      </p>
    </div> 
    <div class="artworkList container">
      <p v-if="loading">Loading...</p>
      <transition-group name="card" tag="ul" class="row" v-else>
        <div v-for="pic in pics" :key="pic.id" class="artworkCard col-md-3" :pic="pic" >
          <router-link :to="`/artwork/${pic.id}`">
            <b-card :img-src="`${pic.img}`" :img-alt="`Image of ${pic.title}`" max-height="200px" img-top>
            <b-card-text>
              <span>{{pic.title}}</span>: <span>{{pic.author}}</span>
            </b-card-text>
            </b-card>
          </router-link>
        </div>
      </transition-group>
    </div> 
  </div>
</template>

<script>
import { API, Storage } from 'aws-amplify'

export default {
  name: 'artwork',
  components: {
  },
  props: ["pic"],
  data() {
    return {
      pic: {},
      pics: [
        {
          id: 18,
          title: "내가 사랑한 따뜻한 풍경",
          author: "조서현",
          type: "오일파스텔",
          description:"제가 사랑하는 푸르른 갈대밭, 해질녘 숲의하늘, 그리고 청 초름한 밤하늘의 생명력을 오일 파스텔로 그려보았습니다. 일상생활을 잠깐 내려놓으려고 그림을 그리는데 풍경화는 그린 후에도저에게 많은 치유와 감동을줍니다. 스케치북과 오일파스텔만으로 작은 엽서 한 장을만들어 친구와 동료에게 선물하고자 하는 마음에서 그리게 되었는데 전시작으로 올립니다.",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/18.png",
          location: "12층",
        },
        {
          id: 2,
          title: "AKO",
          author: "류한진",
          type: "수채화",
          description:"어디에나 흔히 있을 거 같은 집 뒷 골목",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/2.jpg",
          location: "12층",
        },
        {
          id: 3,
          title: "강원도 어느 골목",
          author: "서수영",
          type: "수채화",
          description:"그림의 대상이 전혀 될것 같지 않았던 칙칙하고 폐허가 된 집이있는 강원도 어느 골목. 처음 이 사진을 받아봤을때 그림으로 그려야한다는 생각이 없었습니다. 헌데 구도가 좋아서 연습삼아 그려봐야지 했던 것인데, 그리다보니 이 장면이 예쁘더라구요. 자세히 들여다보니 오래된 나무문틀에도 다양한 색이 있었고, 파란청록의 플라스틱 슬레이브 색깔이 이뻤습니다.  그림을 그리려고 장면을 오래보다보면 전혀 다른 시선, 생각, 느낌이 생깁니다. 오래보아야 예쁘다, 오래봐서 예쁘다! ",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/3.jpg",
          location: "12층",
        },
        {
          id: 13,
          title: "그림자연습",
          author: "서수영",
          type: "수채화",
          description:"이 그림은 그림자 연습을 해본 그림입니다. 해가 어느 위치에 있을때 그림자는 어느쪽으로 지는가를 자유롭게 설정해서 그려보라는 과제였어요. 저는 오른쪽 위에 해가 있다고 생각하고 그림자를 넣었어요. 근데 이 그림속에는 그림자가 틀린 부분이 몇군데 있습니다. 어디일까요? ",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/13.jpg",
          location: "12층",
        },
        {
          id: 9,
          title: "멀리서 보는 여름",
          author: "김오드리",
          type: "유화",
          description:"자칫 영혼의 방황을 유발할 수 있는 푸른색의 향연. 자연의 녹색빛을 더해 여름의 싱그러움과 평온함을 표현 / 멀리서 봐주세요.",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/9.jpg",
          location: "17층",
        },
        {
          id: 5,
          title: "꿈속의 여인",
          author: "이문형",
          type: "수채화",
          description:"팜므파탈적인 여인을 물과 함께 표현",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/5.jpg",
          location: "12층",
        },
        {
          id: 6,
          title: "봄의 여인",
          author: "박제옥",
          type: "디지털 드로잉",
          description:"AWS에 오면서 디지털 드로잉에 관심을 갖게 되었는데, 그 중 옷이 아름답게 떨어지는 라인에 특히나 관심이 갔었습니다. 그 중에서도 한복이 참 아름답운 라인을 갖고있다고 생각했었는데, 마침 그릴 당시 봄이 오기 시작하여 색색깔의 한복과 예쁜 꽃을 함께 그렸습니다. ",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/6.jpg",
          location: "12층",
        },
        {
          id: 8,
          title: "봄을 기다리며",
          author: "김지현",
          type: "유화",
          description:"2022년 봄에는 앤데믹이 되어서 더 넓은 세상에 가보고, 많은 사람들을 보고 싶다는 마음으로, 봄에 나오는 튤립을 그려 보았습니다.",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/8.jpg",
          location: "12층",
        },
        {
          id: 1,
          title: "봄봄봄",
          author: "조서현",
          type: "색연필",
          description:"추운 겨울에 2022년의 아름다운봄을 기약하면서그림을 그리고 2022년 봄에 전시를 진행할 수있게 되었습니다. 봄을 생각하면서 따뜻한 노란색, 핑크색, 파란색으로 따뜻함과 화려함이 가득하게 장식하였습니다. 이 그림은 전시 이후에 제 방에서 사계절 내내 봄의 따뜻함과 화려함을 상기 시켜줄 예정입니다.",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/1.jpg",
          location: "12층",
        },
        {
          id: 4,
          title: "하늘",
          author: "강지연",
          type: "오일파스텔",
          description:"여행을 가고 싶다는 마음을 담아 그린 청량한 하늘입니다.",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/4.jpg",
          location: "12층",
        },
        {
          id: 10,
          title: "Madrid City",
          author: "박경미",
          type: "수채화",
          description:"열정의 나라 스페인 1 -  마드리드 시티의 해지기 전 풍경입니다",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/10.jpg",
          location: "12층",
        },
        {
          id: 12,
          title: "골목",
          author: "류한진",
          type: "수채화",
          description:"어디에나 흔히 있을 거 같은 집 뒷 골목.",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/12.jpg",
          location: "12층",
        },
        {
          id: 11,
          title: "반듯한 그림",
          author: "조서현",
          type: "색연필",
          description:"이 정물화는 class 101 색연필 수업을 통해 그린 그림입니다. 여러가지 일상생활의 사물을 주제로 한 회화로 색감은 제가 제일 좋아하는 분홍색 계열과 초록색 계열로 저만의 색감을내보았습니다. 전시 이후 이 그림은 저희 집 부엌에서 반듯함을 완성시킬 예정입니다.",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/11.jpg",
          location: "12층",
        },
        {
          id: 14,
          title: "시선",
          author: "강지연",
          type: "오일파스텔",
          description:"피부표현을 연습하기 위한 모작입니다.",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/14.jpg",
          location: "12층",
        },
        {
          id: 15,
          title: "냥이 삼형제",
          author: "이문형",
          type: "수채화",
          description:"힘이 되어두는 냥이 삼형제",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/15.jpg",
          location: "12층",
        },
        {
          id: 17,
          title: "Sweeper",
          author: "박경미",
          type: "수채화",
          description:"열정의 나라 스페인 2 - 세비야 의 길거리 풍경입니다",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/17.jpg",
          location: "12층",
        },
        {
          id: 7,
          title: "봄의 향연",
          author: "류희수",
          type: "동양화",
          description:"유난히 추웠던 겨울이 끝나고, 봄이 와서 기쁜 마음을 표현한 작품",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/7.jpg",
          location: "13층",
        },
        {
          id: 16,
          title: "찬란한 나의 스물 여섯",
          author: "류희수",
          type: "동양화",
          description:"'스물 위, 서른 아래 고맘때 Right there' 좋아하는 가수 아이유의 노래를 듣고 나의 스물 여섯을 기념하며 그린 그림",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/16.jpg",
          location: "13층",
        },
        {
          id: 20,
          title: "바다",
          author: "서수영",
          type: "수채화",
          description:"2017년 처음 혼자 끄적거리며 뭔가를 그리기 시작한 이후 한참 재미를 붙였었습니다.처음에 멋모르고 그릴때는 뚫어지라 사진, 장면, 사물을 쳐다보며 우뇌를 풀가동하여 나도 그림을 그릴 수 있다며 신났었죠. 그러다 욕심이 생겼고 온갖 장비, 도구들을 구매해서 쌓아두기 시작했고, 조금 배우면 더 잘할것 같은 마음에 수채화 수업을 들었습니다. 떨려서 구불구불하던 선들을 쭉쭉 한번에 그리게 되고 색도 맑게 표현되면서 실력도 쬐끔 는것 같았어요.  실력이 늘면 재미가 더 늘어야하는데 언젠가부터 그림그리는게 부담이 되기 시작했습니다. 즐겁지가 않았습니다. 매주 수요일 온라인 수업전에 과제를 제출해야하는데 바쁜 주중 일정을 고려하면 주말에 그려야한다는 생각에 주말 내내 내적갈등이 크게 왔다갔다했습니다. 숙제를 쨀까. 몇십번 갈등하다 꾸역꾸역 그려서 냈어요. 못그릴까 걱정되서였습니다. 수채화는 수정이 쉽지않아서 망치면 다시 그려야하기때문입니다.  선생님이 내주시는 과제가 내가 원하는 풍경이 아니다는 건 핑계고 원하는 대로 결과가 안나올까 부담되서 그리는 것을 망설이기 시작했습니다. 미술 전공도 아니고 이걸로 밥벌어먹을것도 아닌데 뭘 그리 부담가졌을까요. 분명 실력은 늘었는데 즐거움은 줄었습니다. 즐거움이 주니 그리는 일은 큰 일이 되었고요.  좋다고 시작한 일이 첨부터 끝까지 좋기만 할수없고취미도 어느정도 집중하고 챌린지를 넘어서야 또다른 즐거움이 생기는 법이라는 것을 알지만, 저는 취미에도 소심한완벽주의자로 잘할려고만 했던 것 같아요. 왜 자꾸 잘할려는데.  딱 B급만하자. 즐길수있을정도만. 망치면 다시 그리면 되지. 종이많다!그렇게 완성한 그림이 이 바다 그림입니다. 이 그림에는 드로잉이 없습니다. 밑그림없이 수채물감으로 빈종이를 채워나갔어요. 망치면 다시 그리면 되지하면서 물감이 종이 위에 번지는 장면을 즐겁게 바라봤습니다. 아주 잘그리진 않았지만 저는 이 그림이 개인적으로 정말 좋습니다. 바다처럼 시원해서요. 그간의 막힌 기분이 뚫린것 같아서요. 여러분은 어떻게 보셨나요? 바다 보시면서 마음 시원해지셨기를 바랍니다.",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/20.jpg",
          location: "12층",
        },
        {
          id: 21,
          title: "떠남",
          author: "이문형",
          type: "수채화",
          description:"긴 코로나 상황을 견디면서 어딘가 떠나고 싶은 마음을 노을과 함께 표현",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/21.jpg",
          location: "12층",
        },
        {
          id: 19,
          title: "윤슬",
          author: "강지연",
          type: "오일파스텔",
          description:"아름다운 윤슬을 보며 물멍을 하던 때를 그리워합니다.",
          img: "https://awsomesapp-awsomess3145203-dev.s3.amazonaws.com/19.jpg",
          location: "12층",
        },
      ]
    };
  }
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
  outline: none;
  margin-bottom: 30px;
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
}

.cardContent, a {
  margin-top: 20px;
  margin-bottom: 20px;
  text-decoration: none;
  text-align: center;
  color: #232F3E;
}
</style>