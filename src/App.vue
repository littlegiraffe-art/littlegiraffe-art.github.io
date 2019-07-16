<template>
<div>
  <Loader v-show="!load"/>
<transition name="slide-fade" mode="out-in">
  <div id="app" v-show="load">
    <h1 class="title">
      <font-awesome-icon :icon="['fas', 'paw']" class="contact__icons paw"/> Little Giraffe - Art
    </h1>
    <div id="nav">
      <router-link to="/" exact id="link__gallery">
        <span>
          <span>
            <span>Gallery</span>
          </span>
        </span>
      </router-link>
      <router-link to="/commissions" id="link__commissions">
        <span>
          <span>
            <span>Commissions</span>
          </span>
        </span>
      </router-link>
      <router-link to="/contact" id="link__contact">
        <span>
          <span>
            <span>Contact</span>
          </span>
        </span>
      </router-link>
    </div>
    <div class="mainContent">
      <transition name="slide-fade" mode="out-in">
       <router-view/>
      </transition>
    </div>
  </div>
</transition>
</div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:700');
$main: #e74c3c;

@mixin btn-border-slide($color, $hoverColor, $borderWidth, $time) {
  $easing: cubic-bezier(0.4, 0, 0.2, 1);
  
  position: relative;

  display: inline-block;
  padding: 0.5em 2em;

  cursor: pointer;
  overflow: hidden;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;

    height: $borderWidth;
    width: 100%;

    background-color: $color;
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }

  &:hover {

    & > * {

      & > * {

        &:before,
        &:after {
          transform: translate3d(0, 0, 0);
        }

        & > * {
          &:before,
          &:after {
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }

  & > * {

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;

      height: 100%;
      width: $borderWidth;

      background-color: $color;
    }

    &:before {
      left: 0;
    }

    &:after {
      right: 0;
    }

    & > * {

      &:before,
      &:after {
        content: "";
        position: absolute;
        left: 0;
        z-index: 9;

        height: $borderWidth;
        width: 100%;

        background-color: $hoverColor;
      }

      &:before {
        top: 0;

        transform: translate3d(-105%, 0, 0);
        transition: transform $time $easing;
      }

      &:after {
        bottom: 0;
        
        transform: translate3d(105%, 0, 0);
        transition: transform $time $easing;
      }

      & > * {

        &:before,
        &:after {
          content: "";
          position: absolute;
          top: 0;
          z-index: 9;

          height: 100%;
          width: $borderWidth;

          background-color: $hoverColor;
        }

        &:before {
          left: 0;

          transform: translate3d(0, 105%, 0);
          transition: transform $time $easing;
        }

        &:after {
          right: 0;

          transform: translate3d(0, -105%, 0);
          transition: transform $time $easing;
        }
      }
    }
  }
}

body {
  background-color: #ecf0f1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  position: absolute;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  a {
    text-decoration: none;
    color: $main; 
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5em;
    letter-spacing: 0.1em;
    margin: 1em;
  }
}

* {
    font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
}
.mainContent {
  padding-top: 150px;
  padding-bottom: 100px;
}

@media (max-width: 700px) {
  .mainContent {
    padding-top: 400px;
  }
}

#link__gallery, #link__commissions, #link__contact {
        @include btn-border-slide(#FFFFFF00, $main, 2px, 0.8s);  
      }

.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.title {
  margin-left: 50px;
}

.router-link-active {
  border: 2px solid #e74c3c;
}

@keyframes spaceboots {
0%  { transform:  rotate(0deg); }
  20%  { transform:  rotate(5deg); }
  50%  { transform:  rotate(-5deg); }
  100%  { transform:  rotate(0deg); }
}
.paw {
	animation-name: spaceboots;
	animation-duration: 1s;
	transform-origin:50% 50%;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
}
</style>
<script>
import {faPaw} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Loader from './components/Loader.vue';
library.add (faPaw);

export default {
  name: 'app',
  data() {
    return {
      load: false
    }
  },
  methods: {
    init(){
      setInterval(() => {
        this.load = true
      }, 2000);
    }
  },
  mounted() {
    this.init()
  },
  components: {
   FontAwesomeIcon,
   Loader
  }
}
</script>
