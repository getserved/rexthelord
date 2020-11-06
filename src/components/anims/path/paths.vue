<template lang="html">
	<div ref="paths" class="paths" v-in-view>
		<div class="container">
			<simple-svg ref="path" class="icon" :src="require(`../../../assets/dinasaur.svg`)" @load="onSvgReady()"/>

			<div refs="sections" class="sections">
				<bubble ref='bubbles' :key="k" :id='bubble.id' :text='bubble.text' :bubbleClass="bubble.bubbleClass" :isDefault="bubble.isDefault" :start='bubble.start' :end='bubble.end' v-for='(bubble, k) in bubbles'>
				</bubble>
			</div>

		</div>
	</div>
</template>

<script>
import Bubble from '../../../components/bubble.vue'
import { mapState } from 'vuex'
require('../../../directives/jquery.nicescroll')
window.$ = window.jQuery = require('jquery')

/** Component */
export default {
	components: {
		bubble: Bubble
	},
	computed: {
		...mapState({
      image: state => state.paths.path.image,
			bubbles: state => state.paths.bubbles
    })
	},
	mounted: function () {
		this.root = 0
		this.view = window.innerHeight
		this.docHeight = document.body.clientHeight
		this.step = 400
		this.scrollSpeed = 400
		this.option = 'default'

		window.addEventListener('wheel', this.handleScroll)
	},
	methods: {
    onSvgReady: function () {
      this.path = this.$refs.path.$el.querySelector('path')
			this.mask = this.$refs.path.$el.querySelector('.mask')
      this.length = this.path.getTotalLength()
      this.height = this.$refs.paths.clientHeight
			this.curOffset = 0
			this.speed = 0.1
			this.strokeLen = 100

      this.path.style.strokeDashoffset = this.length - this.curOffset
			this.mask.style.strokeDasharray = this.length
			this.mask.style.strokeDashoffset = this.length - this.curOffset
    },
		handleScroll: function (evt) {
			if (!this.$refs.paths.closest('.grid').classList.contains('grid-prev-0')) {
				return
			}

			const deltaY = evt.deltaY
			const progress = deltaY / this.height

			let offset = this.length * this.speed * progress

      this.path.style.strokeDashoffset -= offset
			let newOffset = this.path.style.strokeDashoffset
			if (newOffset < 0) {
				newOffset = 0
				this.$refs.paths.classList.remove('animating')
			} else if (newOffset > this.length) {
				newOffset = this.length - 5
				this.$refs.paths.classList.remove('animating')
			} else {
				this.$refs.paths.classList.add('animating')
			}

			this.path.style.strokeDashoffset = newOffset

			this.curOffset = this.length - newOffset

			let curPercent = this.curOffset / this.length

			let bubbles = this.$refs.bubbles
			for (let bubble of bubbles) {
				let el = bubble.$el
				if (bubble.start < curPercent && bubble.end >= curPercent) {
					el.classList.add('bubbleUp')
				} else {
					el.classList.remove('bubbleUp')
				}
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@function pxToRem($pixels: 16, $font: 16) {
	@return #{$pixels / $font}rem;
}
.paths {
	position: relative;
	min-width: 100%;
}

.container {
	max-width:pxToRem(1024);
	margin:auto;
}

.content {
	flex: 1 0 50%;
}

/deep/ svg{
	width:100%;
	max-width:1024px;
}
/deep/ .paths {
  fill: none;
  stroke: grey;
  stroke-dasharray: 1;
  stroke-width: 1;
  stroke-linejoin: round;
}
/deep/ .mask {
  fill: none;
  stroke: white;
  stroke-width: 5;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}

.flex-container{
	display:flex;
	flex-direction:row;

	.copy_left{
		flex: 1 1 0%;
		position:relative;

	}
	.copy_right{
		flex: 1 1 0%;
		position:relative;
	}
}
.paths{

	.simple-svg-wrapper{
		margin:auto;
	}

	.bubbleDialog{
		opacity: 0;
		transition: opacity 0.5s ease-out;
	}

	.bubbleUp{
		opacity: 1;
	}

	/deep/ #story1{
		position:absolute;
		top:pxToRem(20);
		left:50%;
		transform: translateX(-50%);

	}

	/deep/ #story2{
		position:absolute;
		top:15%;
		left:50%;
		transform:translate(-550px);

		.bubble{
			max-width:pxToRem(150);
		}

	}

	/deep/ #story3{
		position:absolute;
		top:15%;
		right:50%;
		transform:translate(400px);

		.bubble{
			max-width:pxToRem(200);
		}
	}

	/deep/ #story4{
		position:absolute;
		top:50%;
		left:50%;
		transform:translateX(-550px);

		.bubble{
			max-width:pxToRem(150);
		}
	}

	/deep/ #story5{
		position:absolute;
		top:50%;
		right:50%;
		transform:translateX(450px);

		.bubble{
			max-width:pxToRem(150);
		}
	}
	/deep/ #story6{
		position:absolute;
		top:72%;
		left:50%;
		transform:translateX(-50%);
	}
}

#story1{
	padding-top:1rem;

}

#story2{

}

#story3{
	padding-top:1rem;
	padding-bottom:1rem;
}

#story4{
	padding-top:1rem;
	padding-bottom:1rem;
}

#story6{
	.main-img{
		transform:translate(-30%, 10%) scale(1.5);
	}
}

@keyframes jackInTheBox {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.animate__jackInTheBox {
  -webkit-animation-name: jackInTheBox;
  animation-name: jackInTheBox;
}

@media screen and (max-width: 1600px) {
}
@media screen and (max-width: 1440px) {
}
@media screen and (max-width: 1200px) {
	.title {
		font-size: pxToRem(45);
		line-height: 3.5rem;
	}
}

@media screen and (max-width: 768px) {
	.hero:before {
		content: '';
		display: block;
		padding: 56.25% 0 0;
	}

	.header_video {
		min-height: pxToRem(460);
	}

	.content {
		max-width: pxToRem(480);
	}

	.title {
		font-size: pxToRem(30);
		line-height: 2.5rem;
	}

	.video {
		width: auto;
		min-width: 100%;
		height: 100%;
		background: transparent !important;
	}
}

@media screen and (max-width: 360px) {
	.title {
		font-size: pxToRem(18);
		line-height: 1.5rem;
	}
}
</style>
