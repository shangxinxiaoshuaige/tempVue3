<script setup lang="ts"></script>
<template>
  <div class="aspire-content">
    <div class="aspire-timeout">
      <div class="timeout-content">
        <div class="timeout-text">See you in...</div>
        <div class="timeout-date">倒计时xxxxxx</div>
      </div>
    </div>
    <div class="aspire-logo">
      <div class="aspire-logo-text">
        <div>
          The 3
          <sup>th</sup>
          ACRI Meeting
        </div>
        <br />
        <div>ShenZhen,China,October,2025</div>
      </div>
    </div>

    <div class="aspire-speech">
      <div class="speech-content">
        <h1>Dear Friends and Colleagues</h1>
        <p>
          On behalf of the Organizing Committee, I'm pleased to announce that the 3rd Asian Congress
          for Reproductive Immunology (ACRI) will be held in Shenzhen, China from October 30 to
          November 1, 2025.  
        </p>
        <p>
          As discussed previously, during the 3rd ACRI, we will officially establish the
          Asian Society for Reproductive Immunology. All founding delegates recommended by the three
          countries are in the recipients. I have already compiled a list of the names and
          affiliations of all of you in the attachment, and I have collected the Chinese names of
          all of you with my own initiative, so if there are any mistakes, please let me know and I
          will correct them in time.I believe that through our joint efforts, we will be able to
          more closely promote communication and cooperation between clinical and basic scientists
          and students in the field of reproductive immunology in Asia and make Asia’s voice heard.
        </p>
        <p>
          Shenzhen is a dynamic hub of innovation and technology, offering a glimpse of modern
          China. Once a small fishing village, it has transformed into a bustling metropolis,
          attracting global talent and investment. With its vibrant atmosphere, cutting-edge
          industries, and proximity to Hong Kong, Shenzhen provides an ideal setting for
          international collaboration and knowledge exchange.
        </p>
        <div class="aspire-video">
          <video controls style="width: 100%; margin-top: 20px" src="../assets/video.mp4"></video>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.aspire-timeout {
  height: 100px;
  line-height: 100px;
  background-color: #f9be00;
}

.timeout-content {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.timeout-content .timeout-text {
  font-size: 24px;
  color: white;
}

.aspire-logo {
  width: 100%;
  height: 451px;
  background-image: url('../assets/image.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  line-height: 2em;
}

.aspire-logo .aspire-logo-text {
  color: white;
  position: absolute;
  font-size: 40px;
  top: 50%;
  left: 40px;
  transform: translateY(-50%);
}

.aspire-speech {
  background-color: #fcf9f5;
  padding: 96px 32px;
}

.speech-content {
  margin-top: 16px;
  max-width: 43rem;
  margin: 0 auto;
  font-size: 18px;
}

.aspire-speech p {
  margin-top: 20px;
}

.speech-content .aspire-video {
  max-width: 43rem;
  margin: 0 auto;
}
</style>
