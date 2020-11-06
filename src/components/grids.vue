<template lang="html">
	<div ref="grid" class="grids">
		<div ref="patterns" class="patterns">
		</div>
		<div class="navigator">
			<span :key="n" ref="navItem" v-on:click="transform" v-bind:data-id="n-1" v-bind:data-page="n-1" class="back-item" v-bind:class="'back-item-'+(n-1)" v-for="n in 7">{{n}}</span>
		</div>
    <div class="container">
			<section id="grid--1" class="grid grid-prev--1" data-id="-1" data-page="-1">
			</section>
      <section id="grid-0" class="grid grid-prev-0 scrollable expand" data-id="0" data-page="0" v-on:click="transform">

				<div class="nav" v:on:click="backTransform">

				</div>

				<div class="content">
					<div class="enter" v-on:click="collapseWindow">
						ENTER
					</div>
					<particle></particle>
        </div>

      </section>

      <section id="grid-1" class="grid grid-prev-1 scrollable" data-id="1" data-page="1" v-on:click="transform">
				<!--
				<div class="nav">
					<simple-svg width="100%" height="100%" custom-class-name="icon" :src="require(`@/assets/images/icons/icon_left-arrow.svg`)" />
				</div>
				-->
				<navBtn></navBtn>
				<fullscreen></fullscreen>
				<div class="content ">
					<codenames></codenames>
        </div>
      </section>

      <section id="grid-2" class="grid grid-prev-2" data-id="2" data-page="2" v-on:click="transform">
				<navBtn></navBtn>
				<fullscreen></fullscreen>
        <div class="content ">
					<hero></hero>
					<div class="heroIntro">
						<p>This is one of the coolest idea I learnt from the internet originally from WashingtonPost. When the team showed this to me, I was amazed and fanscinated by the fancy looping clips; by the smooth play/rewind scrolling control; Moreover by the power of the idea itself.</p>
						<p>Although there was no one asking for a replication, I couldn't help play with it and start building this incredible effect wheneverI got a break. </p>
						<p>I played the forward and backward video from time to time, tying to record all the looping timeframes and transitions in between. </p>
						<p>It took me a whole day to get the first looping clip and its transition frames done. Meanwhile, I was thinking about a smoonthier transition either by playing the forward frames 2 seconds prior to the transition frames or by calculating and increasing the play speed.</p>
						<p>I then worked on all the forward video frames and organise them well to store. Fortunatelly, backward video is much easier to handle since it contains transition frames only.</p>
						<p>To be honest, I never touched video things before this, merely some simple editing of friend's birthday clips. However, I felt excited and proud to get the whole thing done.</p>
					</div>
				</div>
      </section>
      <section id="grid-3" class="grid grid-prev-3" data-id="3" data-page="3" v-on:click="transform">
				<navBtn></navBtn>
				<fullscreen></fullscreen>
        <div class="content ">
					<paths></paths>
        </div>
      </section>
      <section id="grid-4" class="grid grid-prev-4 scrollable" data-id="4" data-page="4" v-on:click="transform">
				<navBtn></navBtn>
				<fullscreen></fullscreen>
        <div class="content ">
					<dinorcv></dinorcv>
        </div>
      </section>
      <section id="grid-5" class="grid grid-prev-5 scrollable" data-id="5" data-page="5" v-on:click="transform">
				<navBtn></navBtn>
				<fullscreen></fullscreen>
        <div class="content ">
					<works></works>
        </div>
      </section>
      <section id="grid-6" class="grid grid-prev-6 scrollable" data-id="6" data-page="6" v-on:click="transform">
				<navBtn></navBtn>
				<fullscreen></fullscreen>
        <div class="content ">
					<system></system>
        </div>
      </section>

    </div>
	</div>
</template>

<script>
import { SimpleSVG } from 'vue-simple-svg'
import jQuery from 'jquery'
import Ripple from '../directives/ripple.js'
import DinorCV from '../components/cv/DinorCV.vue'
import CodeNames from '../components/boardgames/codenames/codenames.vue'
import Hero from '../components/videoppt/superhero.vue'
import Paths from '../components/anims/path/paths.vue'
import Works from '../components/works/works.vue'
import Particle from '../components/anims/particles/particle.vue'
import System from '../components/system/system.vue'
import NavBtn from './navBtn'
import Fullscreen from './fullscreen.vue'
import { mapState } from 'vuex'

/** Component */
export default {
	directives: {
		Ripple
	},
	components:	{
		'simple-svg': SimpleSVG,
		dinorcv: DinorCV,
		codenames: CodeNames,
		hero: Hero,
		paths: Paths,
		works: Works,
		particle: Particle,
		system: System,
		navBtn: NavBtn,
		fullscreen: Fullscreen
	},

	ready: function () {

	},
	beforeDestroy: function () {
		window.removeEventListener('resize', this.resize)
	},
  mounted: function () {
    this.curPlayGrid = document.getElementById('grid-0')
		this.aspect = 0.618033
		this.axis = 0.7237
		this.handleResize()
		window.addEventListener('resize', this.handleResize)

		jQuery('.ripple,.ripple-img').ripples({
			resolution: 256,
			dropRadius: 20,
			perturbance: 0.04
		})
  },
	computed: {
		...mapState({
      collapsed: state => state.grids.layout.collapsed
    })
	},
	methods: {
		isActive: function (ele) {
			if (ele) {
				const idx = ele
				// console.log('ele',ele, this.curTransID)
				if (idx < this.curTransID) {
					return true
				}
			}
			return false
		},
		initOrigin: function () {
			let winWidth = window.innerWidth
			let winHeight = window.innerHeight
			let origin = Math.floor(winWidth * this.axis) + 'px ' + Math.floor(winWidth * this.aspect * this.axis) + 'px'
			// console.log((origin))
			if (winWidth < winHeight) {
				// console.log((winWidth))
				this.$refs.grid.classList.add('portrait')
				origin = Math.floor((winWidth / this.aspect) * this.aspect * (1 - this.axis)) + 'px ' + Math.floor((winWidth / this.aspect) * this.axis) + 'px '
			}
			this.origin = origin
		},
    transform: function (evt) {
      let target = evt.target
			let isValid = false
			if (target && target.classList.contains('back-item')) {
				isValid = true
			} else {
				target = target.closest('.grid')
				if (target) {
					isValid = true
				}
			}

      if (target && isValid) {
        let idx = target.dataset.id
				let page = target.dataset.page
        if (idx) {
          this.curTransID = idx
					this.curTransPage = page
          // console.log('doTransform('+this.curPlayGrid.id+','+this.curTransID+')')
          this.doTransform(this.curTransID)

					this.updateNav(this.curTransID, this.curTransPage)
					if (idx !== 0) {
						document.querySelector('.navigator').style.visibility = 'visible'
					}
        }
      }
    },
		updateNav: function (curTransID, curTransPage) {
			// console.log('id:',curTransID, 'page:',curTransPage)
			this.$refs.navItem.forEach((navItem) => {
				// let idx = navItem.dataset.id
				let page = navItem.dataset.page
				navItem.dataset.id = navItem.dataset.id - curTransID
				if (page < curTransPage) {
					navItem.classList.add('active')
				} else {
					navItem.classList.remove('active')
				}
			})
		},
    doTransform: function (curTransID) {
      if (this.curTransID) {
				document.querySelectorAll('.grid').forEach((grid) => {
					let idx = grid.dataset.id
					let offset = curTransID
					let newIdx = idx - offset

					if (offset === '0') return

					grid.classList.remove('grid-prev-' + idx)
					grid.classList.add('grid-prev-' + newIdx)
					grid.classList.add('transforming')

					grid.style.transitionDuration = offset + 'px'
					// console.log('duration:',grid.style.transitionDuration)
					grid.dataset.id = newIdx
				})
      }
    },
		handleResize: function () {
			this.initOrigin()

			document.querySelectorAll('.grid').forEach((grid) => {
				grid.classList.remove('transforming')
				grid.style.transformOrigin = this.origin
			})
		},
		collapseWindow: function (e) {
			const grid = e.target.closest('.grid');

			grid.classList.add('collapsing');
			grid.classList.remove('expand');
			grid.addEventListener('transitionend', function () {
				grid.classList.remove('collapsing');
				grid.classList.add('collapsed');
			})
		},
		fullscreen: function (e) {
			const grid = e.target.closest('.grid')

			grid.classList.add('expand');
			grid.addEventListener('transitionend', function () {
				grid.classList.remove('collapsing');
			})
		},
		toggleScreen: function (e) {
			const grid = e.target.closest('.grid')
			const patterns = this.$refs.patterns

			if (!this.collapsed) {
				grid.classList.add('expand');
				grid.addEventListener('transitionend', function () {
					grid.classList.remove('collapsing');
				})
				patterns.classList.add('expand')
			} else {
				grid.classList.add('collapsing');
				grid.classList.remove('expand');
				grid.addEventListener('transitionend', function () {
					grid.classList.remove('collapsing');
				})
				patterns.classList.remove('expand')
			}
		}
	}
}

</script>

<style lang="scss" scoped>
	::-webkit-scrollbar {
		width: 0px;  /* Remove scrollbar space */
		background: transparent;  /* Optional: just make scrollbar invisible */
	}
	.grids{
		position:relative;
	}

	/deep/ .scrollable .content{
		overflow-y: scroll!important;
	}
  #grids>.container /deep/ {position:absolute;width:100vw;height:100vh;overflow:hidden};

  .grid /deep/ {position:absolute;width:61.8vw;height:61.8vw;box-sizing: border-box;border:1px solid #333333;line-height:1;overflow:hidden;}

	.expand /deep/ {
		width: 100vw;
		height: 100vh;
		z-index: 99;
		font-size: 1rem;
	}

	.content /deep/ {
		position: relative;
	}

	/deep/ .enter{
		color: white;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 100;
		font-size: 3rem;
		font-family: 'Montserrat';
		font-weight: bold;
		cursor: pointer;
		transition: all .3s ease-out;

		&:hover{
			font-size: 4rem;
		}
	}

	.transforming{
		-moz-transition: transform 1s ease-in;
		-webkit-transition: transform 1s ease-in;
		-ms-transition: transform 1s ease-in;
		transition:transform 1s ease-in-out;
	}

	.collapsing{
		transition: width 1s ease-in-out, transform 1s ease-in-out;
		z-index: 99;
	}
	.expand{
		transition: width 1s ease-in-out, transform 1s ease-in-out;
		z-index: 99;
	}

	/deep/ .panel{
		transition: opacity 1s ease-in-out, transform 1s ease-in-out;
		opacity: 0;
	}
	.collapsing /deep/ .panel{
		opacity: 1;
	}
	.collapsed /deep/ .panel{
		opacity: 1;
	}

  .grid-prev-0 /deep/ {transform:rotate(0deg) scale(1);border-width:1px;z-index:10}
  .grid-prev-1 /deep/ {transform:rotate(90deg) scale(0.618033);border-width:1.618036px;}
	.grid-prev-2 /deep/ {transform:rotate(180deg) scale(0.381965);border-width:2.618042px;}
	.grid-prev-3 /deep/ {transform:rotate(270deg) scale(0.236067);border-width:4.236088px;}
	.grid-prev-4 /deep/ {transform:rotate(359.997deg) scale(0.145897);border-width:6.854146px;}
	.grid-prev-5 /deep/ {transform:rotate(449.996deg) scale(0.0901692);border-width:11.09026px;}
	.grid-prev-6 /deep/ {transform:rotate(539.995deg) scale(0.0557276);border-width:17.94444px;}

  .grid-prev--1 /deep/ {transform:rotate(-90.001deg) scale(1.618036)}
	.grid-prev--2 /deep/ {transform:rotate(-180.002deg) scale(2.618042)}
	.grid-prev--3 /deep/ {transform:rotate(-270.003deg) scale(4.236088)}
	.grid-prev--4 /deep/ {transform:rotate(-360.004deg) scale(6.854146)}
	.grid-prev--5 /deep/ {transform:rotate(-450.005deg) scale(11.09026)}
	.grid-prev--6 /deep/ {transform:rotate(-540.006deg) scale(17.94444)}

	#grid--1,#grid-0,#grid-1,#grid-2, #grid-3,#grid-4,#grid-5,#grid-6{
		background-color:#eeeeee;
	}

	.grid{
		&:before{
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: black;
			opacity: 0.5;
			transition: opacity 1s ease-out;
			z-index: 10;
		}
	}
	.grid[data-id='0']{
		&:before{
			opacity: 0;
			z-index: -1;
		}

		.fullscreen /deep/{
			opacity: 1;
			z-index: 20;
		}
	}

	h1,h2,h3,h4,h5,h6{
    font-family: "Helvertica";
    margin: 2rem 2rem;
  }
	.grid .image{
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
	}
	.grid-prev-0 .image{
		transition:filter 1s ease-in-out;
		-webkit-filter: grayscale(0%);
		filter: grayscale(0%);
	}
	#grid-2,
	#grid-3,
	#grid-4,
	#grid-5,
	#grid-6,
	{
		.image{
			margin-top:-5rem;
			width:100%;
			min-height:400px;
			height:50vh;
			overflow:hidden;
			background-size:cover;
		}

	}
	.patterns{
		position:absolute;
		width:100%;
		height:100vh;
		background-color:transparent;
		background-image:url(../assets/images/45-degree-fabric-dark.png);
		z-index:100;
		pointer-events: none;
		transition: opacity 1s linear;

		&.expand{
			opacity:0;
		}
	}
  .container{
		background-color:$color-red;
    width:100%;
    height:100vh;

    img{
      margin:0 auto;
    }
  }
	/deep/ .nav{
		width:5rem;
		height:2rem;
		background:black;
		opacity:1;
		transition:opacity .5s ease-in-out;
		border-radius:50px;
		z-index:20;

		.grid &.nav{
			position:absolute;
			right:3.5rem;
			top:3.5rem;
		}

		.icon{
			width: 100%;
			height: 100%;
			fill:white;
			cursor:pointer;
		}
	}
	.grid-prev-0 /deep/ .nav{
		opacity:0;

	}

	/deep/ .fullscreen{
		position: absolute;
		top: 2rem;
		right: 3%;
		width: 3rem;
		height: 2rem;
		fill: black;
		opacity: 0;
		cursor:pointer;
		transition: opacity 1s ease-out;
	}

	/deep/ .expand .fullscreen{
		.collapse-icon{
			opacity: 1;
		}
	}
	.navigator{
		position:fixed;
		left:1rem;
		bottom:1rem;
		visibility:hidden;
		vertical-align: middle;
		z-index:20;

		.back-nav{
			width:5rem;
			height:2rem;
			background:black;
			border-radius:50px;
			z-index:20;
			display:inline-block;

			.icon{
				height:100%;
				fill:white;
				padding:2px;
				cursor:pointer;
				transform:scaleX(-1);
			}
		}
		.back-item{
			width:1.5rem;
			height:1.5rem;
			font-size:1rem;
			font-weight:400;
			color:white;
			background:black;
			padding:.2rem .5rem;
			border-radius:50%;
			z-index:20;
			visibility:hidden;
			opacity:0;
			transition:opacity 1s ease-in-out;
			margin:0 .2rem;

			&.active{
				visibility:visible;
				opacity:1;
				cursor:pointer;

				&:hover{
					animation: rippleButton 1s infinite;
				}
			}
		}
	}

	.ripple{
		position:absolute;
		top:0;
		opacity:0;
		width: 61.8vw;
		height:61.8vw;
		background-image:url(../assets/images/transparent.png);
		background-size:100% 100%;
		transition:opacity 1s ease-in-out;
	}
	.ripple:hover{
		opacity:1;
		visibility:visible;
		cursor:pointer;
	}
	.grid-prev-0 .ripple{
		visibility:hidden;
	}
	.logo{
		padding:1rem 0;
	}
	.isActive{
		visibility:visible;
	}
	.intro{
		display:flex;
		.topIntro{
			max-width:800px;
			font-weight:400;
			margin:1rem auto;
			text-align:center;
		}
	}
	.heroIntro{
		padding: 0.5rem 2rem;
	}
	.grid-prev-1,
	.grid-prev-2,
	.grid-prev-3,
	.grid-prev-4,
	.grid-prev-5,
	.grid-prev-6{
		color:#999999;
		.image{
			opacity:.2;
		}
	}
	.grid-prev-0{
		color:black;
		img{
			opacity:1;
			transition:opacity .5s ease-in-out;
		}

	}
	.strapline{
		max-width:800px;
		margin:1rem auto;
		.strapline-container{
			border-top: .0625rem solid currentColor;
			border-bottom: .0625rem solid currentColor;
			padding:.5rem 0;

			font-weight:400;
			font-size:.9rem;
		}

	}
	#grid-1,
	#grid-2,
	#grid-3,
	#grid-4,
	#grid-5,
	#grid-6
	{
		display:flex;
		.content{
			height:52.5vw;
			width: 100%;
			margin: 0;
			position: relative;
			z-index: 0;
		}
	}
	.topCopy{
		margin:1rem auto;
		margin-bottom:3rem;
		padding:0 1rem;

		p{
			font-size:1.5rem;
			font-weight:bold;
		}

	}
	.topBrand{
		padding:0 1rem;
		max-width:60vw;
		margin:1rem auto;
	}
	#grid-2{

	}
	.section1Copy1{
		padding:0 1rem;
		margin:auto auto;
		height:50%;
		display:flex;

		.section-container{
			margin-top:1rem;
		}
		h2{
			margin:1rem 0;
		}
		p{
			font-weight:400;
		}
	}
	#grid-6{
		.related_articles {
			margin: 2rem auto;
			padding: 0 1rem;
		}
		#bottomOutro{
			display:flex;
			width:61.8vw;
			flex-direction:column;
		}
		.copy{
			margin:0 auto;
			padding:0 1rem;
			max-width:1024px;
		}
		.header {
			font-size: pxToRem(28);
			text-align: center;
			margin: 2rem auto 1rem;
		}

		.row {
			position: relative;
			display: flex;
			justify-content: center;
		}

		.article {
			flex: 1 0 33%;
			max-width:400px;
			padding: 0 pxToRem(16);
			text-align: center;
			box-sizing: border-box;
			overflow:hidden;
		}

		.figure {
			margin: 0;
		}

		.related-image {
			max-width: 100%;
		}

		.title {
			font-size: pxToRem(18);
			font-weight:700;
			margin: pxToRem(8) 0 0;
		}
	}
	.portrait{
		.grid{position:absolute;width:100vw;height:100vw;}

		.logo-img{
			max-height:3rem;
		}
		.topBrand{
			max-width:100%;
		}
		#grid-1,
		#grid-2,
		#grid-3,
		#grid-4,
		#grid-5,
		#grid-6,
		{
			.image{
				margin-top:-2rem;
				width:100vw;
				min-height:1px;
				max-height:50%;
				height:50vw;
				overflow:hidden;
				background-size:cover;
			}

		}
		#grid-1,
		#grid-2,
		#grid-3,
		#grid-4,
		#grid-5,
		#grid-6
		{
			display:flex;
			.content{
				//height:calc(61.8vh - 4rem);
				margin:auto 0;

				h2{
					font-size:1.5rem;
					margin:.5rem auto;
				}
				p{
					font-size:1rem;
					line-height:1.2;
					margin:.5rem auto;
				}

			}
		}

	}
	@keyframes rippleButton{
		from {
			box-shadow: rgba(0, 0, 0, 1) 0px 0px 0px 0px;
		}
		to {
			box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 10px;
		}
	}
	@media only screen and (max-device-width: 1024px) and (orientation : portrait){

	}

</style>
