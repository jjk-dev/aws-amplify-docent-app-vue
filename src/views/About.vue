<template>
  <div class="about">
    <div class="container">
      <h1 class="category">About AWSomeS</h1>
      <p class="description">
        AWSomeS는 AWS Korea에서 미술을 좋아하는 사람들이 모인 사내 미술동호회입니다. 매 분기마다 정기적으로 모임을 만들어 전시회를 관람하거나 원데이클래스 함께 듣기, 그리기 모임 등을 만들어  다양한 미술활동을 하고 있습니다.
        </br></br>그림은 시간과 기억을 다루는 기술이라고 생각합니다. 자세히 관찰하고 이를 표현해 내는 동안은 다른 시간이 흐르면서 다른 기억이 저장됩니다.
        </br>헌데 많은 분들이 ‘나는 그림을 못그린다’ 라고 생각하시는데, 전혀 그렇지 않습니다! 해보지 않아서, 방법을 몰라서에요.
        </br>우리는 그림에 대한 공포와 스스로에 대한 낮은 기대치를 가지고 있습니다만 누구나 그림을 그릴 수 있습니다. 그것도 잘! 그릴 수 있습니다.
        </br></br>AWS내에 그림을 그려보고자 하는 분들은 어썸스(Awsome-Sketcher)로 오세요! 무척 환영합니다. 
        </br>가입을 원하시는 분들은 awsome-sketcher-organizers@amazon.com 으로 메일을 보내주세요.
      </p>
    </div>
    <div class="container">
      <h2 class="title">Activities</h2>
      <h4 class="subtitle">전시회 관람</h4>
      <p class="description">
        전시회 관람은 분기 1회로 진행되고 있습니다.
      </p>
      <div class="aboutimage row">
        <img src="../assets/about/exhi_1.jpg" alt="No images" class="exhibitImage col-md-3"/>
        <img src="../assets/about/exhi_2.jpg" alt="No images" class="exhibitImage col-md-3"/>
        <img src="../assets/about/exhi_3.jpg" alt="No images" class="exhibitImage col-md-3"/>
        <img src="../assets/about/exhi_4.jpg" alt="No images" class="exhibitImage col-md-3"/>
      </div>
      <h4 class="subtitle">원데이클래스 수강</h4>
      <p class="description">
        원데이클래스는 실크스크린, 오일파스텔, 캔들 만들기 등의 다양한 주제를 수강했습니다.
      </p>
      <div class="aboutimage row">
        <img src="../assets/about/one_1.jpg" alt="No images" class="onedayImage col-md-4"/>
        <img src="../assets/about/one_2.jpg" alt="No images" class="onedayImage col-md-4"/>
        <img src="../assets/about/one_3.jpg" alt="No images" class="onedayImage col-md-4"/>
      </div>
      
      <h4 class="subtitle">소모임 활동</h4>
      <p class="description">
        어썸스안에서도 관심사에 따라 소모임에 참여하실 수 있습니다.
      </p>
      <div class="aboutimage row">
        <img src="../assets/about/small_1.jpg" alt="No images" class="smallImage col-md-3"/>
        <img src="../assets/about/small_2.jpg" alt="No images" class="smallImage col-md-3"/>
        <img src="../assets/about/small_3.jpg" alt="No images" class="smallImage col-md-3"/>
        <img src="../assets/about/small_4.jpg" alt="No images" class="smallImage col-md-3"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  text-align: left;
}

.title {
  margin-top: 60px;
  margin-bottom: 20px;
  font-weight: 500;
}

.subtitle {
  font-weight: 500;
}

.description {
  margin-top: 20px;
  margin-bottom: 30px;
}

.aboutImage {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.exhibitImage, .onedayImage, .smallImage {
  height: 200px;
  margin-bottom: 50px;
}

</style>