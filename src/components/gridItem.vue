<template lang="html">
	<div ref="gridItem" class="gridItem">
      <section id="grid-1" class="grid grid-prev-1" data-id="1" data-page="1" v-on:click="transform">
				
        <div class="content in_view">

        </div>
      </section>
	</div>
</template>


<script>
import { SimpleSVG } from 'vue-simple-svg';
import jQuery from 'jquery';
import Ripple from '../directives/ripple.js';
import NavBtn from './navBtn'

/** Component */
export default {
	directives: {
		Ripple,
	},
	components:	{
		'simple-svg': SimpleSVG,
		'navBtn': NavBtn
	},

	ready: function(){

	},
	beforeDestroy: function(){
		window.removeEventListener("resize", this.resize);
	},
  mounted: function(){
    this.curPlayGrid = document.getElementById("grid-0");
		this.aspect = 0.618033;
		this.axis = 0.7237;
		this.handleResize();
		window.addEventListener("resize", this.handleResize);

		console.log("ripple:", Ripple);
		jQuery('.ripple,.ripple-img').ripples({
			resolution: 256,
			dropRadius: 20,
			perturbance: 0.04
		});

  },
	computed:{

	},
	methods: {
		isActive: function(ele){
			if(ele){
				const idx = ele;
				//console.log("ele",ele, this.curTransID);
				if(idx < this.curTransID){
					return true;
				}
			}
			return false;
		},
		initOrigin: function(){
			let winWidth = window.innerWidth;
			let winHeight = window.innerHeight;
			let origin = Math.floor(winWidth * this.axis) + 'px ' + Math.floor(winWidth * this.aspect * this.axis) +'px';
			//console.log((origin));
			if(winWidth < winHeight){
				//console.log((winWidth));
				this.$refs.grid.classList.add("portrait");
				origin = Math.floor((winWidth / this.aspect) * this.aspect * (1 - this.axis)) +'px ' + Math.floor((winWidth / this.aspect) * this.axis) + 'px ';
			}
			this.origin = origin;
		},
    transform: function(evt){
      let target = evt.target;
			let isValid = false;
			if(target && target.classList.contains("back-item")){
				isValid = true;
			}else{
				target = target.closest('.grid');
				if(target){
					isValid = true;
				}
			}

      if(target && isValid){

        let idx = target.dataset.id;
				let page = target.dataset.page;
        if(idx){
          this.curTransID = idx;
					this.curTransPage = page;
          //console.log("doTransform("+this.curPlayGrid.id+","+this.curTransID+")");
          this.doTransform(this.curTransID);

					this.updateNav(this.curTransID, this.curTransPage);
					if(idx != 0){
						document.querySelector(".navigator").style.visibility = "visible";
					}
        }

      }

    },
		updateNav: function(curTransID, curTransPage){
			//console.log("id:",curTransID, "page:",curTransPage);
			this.$refs.navItem.forEach((navItem) => {
				//let idx = navItem.dataset.id;
				let page = navItem.dataset.page;
				navItem.dataset.id = navItem.dataset.id - curTransID;
				if(page < curTransPage){
					navItem.classList.add("active");
				}else{
					navItem.classList.remove("active");
				}
			});
		},
    doTransform: function(curTransID){
      if(this.curTransID){
				document.querySelectorAll(".grid").forEach((grid) => {
					let idx = grid.dataset.id;
					let offset = curTransID;
					let newIdx = idx-offset;

					grid.classList.remove("grid-prev-"+idx);
					grid.classList.add("grid-prev-"+newIdx);
					grid.classList.add("transforming");
					grid.style.transitionDuration = offset +"px";
					//console.log("duration:",grid.style.transitionDuration);
					grid.dataset.id = newIdx;


				});
      }
    },
		handleResize: function(){
			this.initOrigin();

			document.querySelectorAll(".grid").forEach((grid) => {
				grid.classList.remove("transforming");
				grid.style.transformOrigin = this.origin;
			});
		}
	}
};

</script>


<style lang="scss" scoped>
	.grids{
		position:relative;
	}
  #grids>.container /deep/ {position:absolute;width:100vw;height:100vh;overflow:hidden};

  .grid /deep/ {position:absolute;width:61.8vw;height:61.8vw;box-sizing: border-box;border:1px solid #333333;line-height:1;overflow:hidden;}

	.transforming{
		-moz-transition: transform 1s ease-in;
		-webkit-transition: transform 1s ease-in;
		-ms-transition: transform 1s ease-in;
		transition:transform 1s ease-in-out;
	}

  .grid-prev-0 /deep/ {transform:rotate(0deg) scale(1);border-width:1px;}
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
	}
  .container{
		background-color:red;
    width:100%;
    height:100vh;

    img{
      margin:0 auto;
    }
  }
	.nav{
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
			height:100%;
			fill:white;
			padding:2px;
			cursor:pointer;
		}
	}
	.grid-prev-0 .nav{
		opacity:0;

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
			height:calc(61.8vw - 10rem);
			margin:auto 0;
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
				height:calc(61.8vh - 4rem);
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
