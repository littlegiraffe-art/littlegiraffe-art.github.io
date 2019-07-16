<template>
  <div class="masonryComponent">
			<div class="masonryItem">
				<img src="../assets/1.png" alt="">
			</div>
			<div class="masonryItem">
				<img src="../assets/2.png" alt="">
			</div>
			<div class="masonryItem">
				<img src="../assets/3.png" alt="">
			</div>
			<div class="masonryItem">
				<img src="../assets/4.png" alt="">
			</div>
			<div class="masonryItem">
				<img src="../assets/5.png" alt="">
			</div>
			<div class="masonryItem">
				<img src="../assets/6.png" alt="">
			</div>
      <div class="masonryItem">
				<img src="../assets/7.png" alt="">
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
    columns: 3,
    breakAt: {
        1200: 3,
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

/* @media (max-width: 700px) {
    .masonryItem img {width: 80%}
} */
</style>
