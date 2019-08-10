<template>
  <div class="masonryComponent">
			<div class="masonryItem">
				<img src="../assets/Dr.Strange.png" class="pics" alt="">
			</div>
			<div class="masonryItem">
				<img src="../assets/Myanga_Shazam(Bling).png" class="pics" alt="">
			</div>
			<div class="masonryItem">
				<img src="../assets/Pirate Ghost.png" class="pics" alt="">
			</div>
			<div class="masonryItem">
				<img src="../assets/Poisonous Mosquito.png" class="pics" alt="">
			</div>
		</div>
</template>

<script>
import Macy from 'macy'; 
export default {
  name: 'gallery',
  components: {
    
  },
  methods: {
    init(){
      var macy = Macy({
    container: '.masonryComponent',
    trueOrder: false,
    waitForImages: false,
    margin: 24,
    columns: 2,
    breakAt: {
        1200: 2,
        940: 1,
        520: 1,
        400: 1
    }
});
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style>
.masonryComponent {margin-top:0.5rem;}
.masonryItem {overflow:hidden; border-radius:0.5rem; -moz-user-select:none; -khtml-user-select:none; -webkit-user-select:none; user-select:none; -khtml-user-drag:element; -webkit-user-drag:element;}
.masonryItem img {vertical-align:bottom;}
.masonryItem.over {border:2px dashed #eee;}
.masonryItem.over img {opacity:0.4;}

.pics {
  max-width: 600px;
}

@media (max-width: 1000px) {
  .pics {
    max-width: 500px;
  }
}

/* @media (max-width: 700px) {
    .masonryItem img {width: 80%}
} */
</style>
