<template>
  <div class="contact">
    <div class="contactBox">
      
      <a href="https://www.artstation.com/littlegiraffe-art" class="social-container artstation">
          <div class="front__as floating">
            <font-awesome-icon :icon="['fab', 'artstation']" class="contact__icons" />
          </div>
      </a>
      <a href="https://www.artstation.com/littlegiraffe-art" class="social-container deviantArt">
          <div class="front__dA floating2">
            <font-awesome-icon :icon="['fab', 'deviantart']" class="contact__icons" />
          </div>
      </a>
      <a href="https://www.artstation.com/littlegiraffe-art" class="social-container facebook">
          <div class="front__fb floating3">
            <font-awesome-icon :icon="['fab', 'facebook']" class="contact__icons" />
          </div>
      </a>
      <a href="https://www.artstation.com/littlegiraffe-art" class="social-container phone">
          <div class="front__ph floating">
            <font-awesome-icon :icon="['fas', 'phone']" class="contact__icons" />
          </div>
      </a>
      <a href="https://www.artstation.com/littlegiraffe-art" class="social-container envelope">
          <div class="front__mail floating2">
            <font-awesome-icon :icon="['fas', 'envelope']" class="contact__icons" />
          </div>
      </a>
    </div>
  </div>
</template>

<script>
import {faArtstation, faDeviantart, faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add (faArtstation, faDeviantart, faFacebook, faEnvelope, faPhone);

export default {
  name: 'contact',
  data() {
    return {
    
    }
  },
  components: {
   FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Dosis');

body {
  font-family: 'Dosis';
  background: #fcee85;
  display: flex;
  height: 100vh;
  margin: 0;
  justify-content: center;
  align-items: center;
  .container {
    text-align: center;
    max-width: 550px;
  }
}

.social-container {
  text-decoration: none;
  color: black;


}

.contactBox {
  margin-right: auto;
  margin-left: auto;
  // box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 
  //             0px 2px 2px 0px rgba(0,0,0,0.14),
  //             0px 1px 5px 0px rgba(0,0,0,0.12);
  max-width: 700px;
  height: 300px;
  position: relative;
  
}

.contact__icons {
  font-size: 4em;
}

%front {
  
    display: flex;
    align-items: center;
    justify-content: center;
  border-radius: 5%;
  height: 100px;
  width: 100px;
  position: absolute;
}

$artstation : #13AFF0;
$facebook: #3B5998;
$deviantArt: #05CC47;
$mail: #DB493C;
$phone: #2DB283;

.front__as {
  @extend %front;
  color: $artstation;
  top: 0;
  left: 0;
}

.front__fb {
  @extend %front;
  color: $facebook;
  top: 30%;
  left: 45%;
}


.front__dA {
  @extend %front;
  color: $deviantArt;
  top: 0;
  right: 0;
}


.front__ph {
  @extend %front;
  color: $phone;
  bottom: 0%;
  right: 20%;
}


.front__mail {
  @extend %front;
  color: $mail;
  left: 20%;
  bottom: 0;
}



.floating {  
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

.floating:hover {
  opacity: 0.8;
}

@keyframes floating {
    from { transform: translate(0,  0px); }
    65%  { transform: translate(0, 15px); }
    to   { transform: translate(0, -0px); }    
}

.floating2 {  
    animation-name: floating2;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

.floating2:hover {
  opacity: 0.8;
}

@keyframes floating2 {
    from { transform: translate(0,  15px); }
    65%  { transform: translate(0, 0px); }
    to   { transform: translate(0, 15px); }    
}

.floating3 {  
    animation-name: floating3;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

.floating3:hover {
  opacity: 0.8;
}

@keyframes floating3 {
    from { transform: translate(0,  -15px); }
    65%  { transform: translate(0, 15px); }
    to   { transform: translate(0, -15px); }    
}

</style>
