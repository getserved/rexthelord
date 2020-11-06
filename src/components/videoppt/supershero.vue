<template lang="html">

	<div id="hero" class="hero" v-wheel.prevent="handleScroll">

		<div class="content">
			<h3 class="sup_title" v-if="category">{{ category }}</h3>
			<p class="author" v-if="author" v-html="author"></p>
			<div class="subtitle-container">
				<div ref="subtitle" :key="key" v-bind:class="['subtitle','subtitle-' + key,isPop(key)]" v-for="(subtitle,key) in titles">
					<h1>{{subtitle.title}}</h1>
					<h3>{{subtitle.text}}</h3>

				</div>
				<div class="buttons">
					<!--<button class="func-btn back-btn" v-bind:class="{isFirst: scene == 0}" v-on:click="prevScene">Back</button>-->
					<!--<button class="func-btn play-btn" v-on:click="nextScene">Go</button>-->
					<span class="mask back-btn"  v-on:click="prevScene">
					<svg viewbox="0 0 120 60">
					<defs>
						<mask id="back" x="0" y="0" width="120" height="60">
							<rect x="0" y="0" width="120" height="60" fill="#fff"/>
							<text text-anchor="middle" x="60" y="40" font-size="36" font-weight="bold" dy="1">Back</text>
						</mask>
					</defs>
					<rect x="0" y="0" width="120" height="60" mask="url(#back)" fill-opacity="0.5"/>
					</svg>
					</span>
					<span class="mask play-btn" v-on:click="nextScene">
					<svg viewbox="0 0 120 60">

					<defs>
						<mask id="next" x="0" y="0" width="120" height="60">
							<rect x="0" y="0" width="120" height="60" fill="#fff"/>
							<text text-anchor="middle" x="60" y="40" font-size="36" font-weight="bold" dy="1">Next</text>
						</mask>
					</defs>
					<rect x="0" y="0" width="120" height="60" mask="url(#next)" fill-opacity="0.5"/>
					</svg>
					</span>
				</div>
			</div>
		</div>

		<video name="forward" class="video forward preload" autoplay muted loop v-bind:poster="image" v-on:loadstart="initVideo" v-if="video" v-on:ended="looping">
			<source v-bind:src="require(`@/assets/videos/${video}`)" type="video/mp4" >
		</video>
		<video name="backward" class="video backward" autoplay muted loop v-on:loadstart="initVideo" v-if="reverseVideo"  v-on:ended="looping">
			<source v-bind:src="require(`@/assets/videos/${reverseVideo}`)" preloadtype="video/mp4" >
		</video>
		<div class="background" v-else v-bind:style="{ 'background-image': `url(${image})`}"></div>
		<div id="controller">

			<svg id="level" viewbox="0 0 200 200">
				<path id="level-path" d="M 15.12951042912502 149 A 98 98 45, 0, 1, 15.12951042912502 149" fill="none" stroke-width="4" stroke="#999"/>
			</svg>

			<svg class="squiggle-animated" style="z-index:99;position:absolute;top:0;" xmlns="http://www.w3.org/2000/svg" height="200" width="200" viewBox="0 0 200 200">
			<path d="M 15.12951042912502 149 A 98 98 45, 0, 1, 15.12951042912502 149" stroke="#9d9d9d" stroke-width="4.3" fill="none" style="transition: stroke-dashoffset 2s ease-in-out 0s; stroke-dasharray: 988.004, 988.004; stroke-dashoffset: 0;"></path>
			</svg>
			<!--
			<svg id="knob" width="200" height="200" viewbox="0 0 200 200">
			<filter id="shadow">
			<feDropShadow dx="4" dy="8" stdDeviation="4"/>
		</filter>
			<defs>
				<mask id="circle" x="0" y="0" width="200" height="200">
					<circle  cx="100" cy="100" r="80"  fill="#6d6d6d"/>
					<circle cx="100" cy="100" r="70"  fill="#000"/>
				</mask>
			</defs>
			<circle  cx="100" cy="100" r="80" mask="url(#circle)" fill-opacity="0.5" />
			<circle cx="100" cy="50" r="5" stroke="none"   stroke-width="0" fill="#6d6d6d" />
			</svg>
			<svg class="svg svg--rays" _viewBox="0 0 500 500">
    <circle r="50%" cx="50%" cy="50%" class="c-rays"></circle>
</svg>
-->

<svg id="knob" viewBox="0 0 200 200" class="svg">
    <defs>
        <mask id="ring" maskunits="userSpaceOnUse"
              maskcontentunits="userSpaceOnUse">
							<circle  cx="100" cy="100" r="80"  fill="#999"/>
							<circle cx="100" cy="100" r="70"  fill="#000"/>
        </mask>

        <linearGradient id="gr-1" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="15%" class="stop-color stop-color--1"/>
              <stop offset="45%" class="stop-color stop-color--2"/>
              <stop offset="55%" class="stop-color stop-color--2"/>
              <stop offset="85%" class="stop-color stop-color--3"/>
        </linearGradient>

        <linearGradient id="gr-2" x1="0" y1="100%" x2="100%" y2="0%">
              <stop offset="15%" class="stop-color stop-color--4"/>
              <stop offset="45%" class="stop-color stop-color--5" stop-opacity="0"/>
              <stop class="stop-color stop-color--5" stop-opacity="0"/>
              <stop offset="85%" class="stop-color stop-color--6"/>
        </linearGradient>
    </defs>

		<circle cx="100" cy="50" r="5" stroke="none"   stroke-width="0" fill="#6d6d6d" />
    <g mask="url(#ring)" class="g-container">
        <rect
              fill="url(#gr-1)"
              width="100%" height="100%"
              ></rect>
        <rect
              fill="url(#gr-2)"
              width="100%" height="100%"
              ></rect>
    </g>
</svg>

<svg viewBox="0 0 280 280" class="svg svg--bird">
    <defs>
        <mask id="mask" maskunits="userSpaceOnUse"
              maskcontentunits="userSpaceOnUse">
            <image xlink:href="https:// img-fotki.yandex.ru/get/15520/5091629.a4/0_8d416_118079e_orig"
                   width="277" height="293"></image>
        </mask>

        <linearGradient id="gr-1" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="15%" class="stop-color stop-color--1"/>
              <stop offset="45%" class="stop-color stop-color--2"/>
              <stop offset="55%" class="stop-color stop-color--2"/>
              <stop offset="85%" class="stop-color stop-color--3"/>
        </linearGradient>

        <linearGradient id="gr-2" x1="0" y1="100%" x2="100%" y2="0%">
              <stop offset="15%" class="stop-color stop-color--4"/>
              <stop offset="45%" class="stop-color stop-color--5" stop-opacity="0"/>
              <stop class="stop-color stop-color--5" stop-opacity="0"/>
              <stop offset="85%" class="stop-color stop-color--6"/>
        </linearGradient>
    </defs>

    <g mask="url(#mask)" class="g-container">
        <rect
              fill="url(#gr-1)"
              width="100%" height="100%"
              ></rect>
        <rect
              fill="url(#gr-2)"
              width="100%" height="100%"
              ></rect>
    </g>
</svg>
		</div>
	</div>
</template>

<script>
/* eslint-disable no-tabs, indent */
import { mapState, mapMutations } from 'vuex'

/** Component */

export default {
	props: {

	},
	mounted: function () {

	},
	computed: {
		deltaScrl () {
			return 240 / (this.$store.state.hero.videoppt.transitions.length)
		},
		...mapState({
			image: state => state.hero.videoppt.image,
			title: state => state.hero.videoppt.title,
			category: state => state.hero.videoppt.category,
			author: state => state.hero.videoppt.author,
			video: state => state.hero.videoppt.video,
			currentTime: state => state.hero.videoppt.currentTime,
			transitions: state => state.hero.videoppt.transitions,
			titles: state => state.hero.videoppt.titles,
			reverseVideo: state => state.hero.videoppt.reverseVideo,
			reverseTrans: state => state.hero.videoppt.reverseTrans,
			theme: state => state.hero.videoppt.theme,
			preTime: state => state.hero.videoppt.preTime,
			nextStart: state => state.hero.videoppt.nextStart,
			nextStop: state => state.hero.videoppt.nextStop,
			scene: state => state.hero.videoppt.scene,
			looping: state => state.hero.videoppt.looping
		})
	},
	methods: {
		...mapMutations(['setNextStart', 'setNextStop', 'setScene', 'setLooping', 'setreverseVideo', 'setCurrentTime', 'increaseScene', 'decreaseScene']),
	/**
		* Handle scroll event and animations for controller
		*

	*/
		handleScroll: function (evt) {
			evt.preventDefault()
			if (this.scrollTimer === undefined) this.scrollTimer = -1
			const $this = this

			if (this.scrollTimer === -1) {
				this.scrollTimer = setTimeout(function () {
					$this.scrollTimer = -1
				}, 500)
			} else {
				return
			}

			if (this.rotate === undefined) this.rotate = -120
			// this.rotate = -120+(this.scene+1)*this.deltaScrl
			// console.log('rotate:',this.rotate)
			if (this.rotateX === undefined) this.rotateX = 0
			if (this.rotateY === undefined) this.rotateY = 0
			// console.log(this.eltaScrl)
			let deltaY = this.limiter(evt.deltaY, -this.deltaScrl, this.deltaScrl)
			// let deltaY = 40
			// console.log('rotate:',this.rotate)
			this.rotate += deltaY

			if (this.rotate >= 120) this.rotate = -120
			if (this.rotate <= -120) this.rotate = -120

			if (deltaY > 0) {
				this.nextScene()
			} else if (deltaY < 0) {
				this.prevScene()
			}

			document.getElementById('knob').style.transform = 'rotate(' + this.rotate + 'deg)'

			let x = this.rotateX
			let y = this.rotateY

			const mx = Math.cos((210) * Math.PI / 180) * 98 + 100
			const my = Math.sin((210) * Math.PI / 180) * -98 + 100

			// x = Math.cos((90-this.rotate)*Math.PI/180)*98+100
			// y = Math.sin((90-this.rotate)*Math.PI/180)*-98+100
			x = Math.cos((90 - 120) * Math.PI / 180) * 98 + 100
			y = Math.sin((90 - 120) * Math.PI / 180) * -98 + 100

			// console.log(this.rotate,':',x,y)
			// let largeArc = (this.rotate >= 60)?1:0
			let largeArc = 1
			// console.log('M '+mx + ' ' + my + ' A 98 98 45, ' + largeArc + ', 1, ' + x + ' ' + y)

			const levelpath = document.getElementById('level-path')
			levelpath.setAttribute('d', 'M ' + mx + ' ' + my + ' A 98 98 45, ' + largeArc + ', 1, ' + x + ' ' + y)

			var path = document.querySelector('.squiggle-animated path')
			path.setAttribute('d', 'M ' + mx + ' ' + my + ' A 98 98 45, ' + largeArc + ', 1, ' + x + ' ' + y)
			// console.log('M '+mx + ' ' + my + ' A 98 98 45, ' + largeArc + ', 1, ' + x + ' ' + y)
			// path.setAttribute('d', 'M 15.12951042912502 149 A 98 98 45, 1, 1, 193.53169018419172 129.25445147816612')
			var length = path.getTotalLength()
			var pace = length / this.transitions.length
			if (this.strokeLen === undefined) this.strokeLen = 0
			if (length > 0 && this.strokeLen <= 0) this.strokeLen = length
			//  Clear any previous transition
			path.style.transition = path.style.WebkitTransition = 'none'
			//  Set up the starting positions

			if (deltaY > 0) {
				path.style.strokeDasharray = length + ' ' + length
				if (path.style.strokeDashoffset === 0) {
					path.style.strokeDashoffset = length
				}
			} else {
				path.style.strokeDasharray = length + ' ' + length
				path.style.strokeDashoffset = length - (this.scene + 1) * pace
			}

			if (this.scene === 0) {
				path.style.strokeDasharray = length + ' ' + length
				path.style.strokeDashoffset = length
			}

			// console.log('stroke:', path.style.strokeDasharray,':',path.style.strokeDashoffset)
			//  Trigger a layout so styles are calculated & the browser
			//  picks up the starting position before animating
			path.getBoundingClientRect()
			//  Define our transition
			path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset .5s ease-in-out'
			//  Go!
			if (deltaY > 0) {
				path.style.strokeDashoffset = length - pace * this.scene
			} else {
				path.style.strokeDashoffset = length - pace * this.scene
			}
			// console.log('to stroke:', path.style.strokeDasharray,':',path.style.strokeDashoffset)
		},
		limiter: function (val, lower, upper) {
			// console.log(val)
			if (val < 0) return lower
			else if (val > 0) return upper
			else return val
		},
		initVideo: function (e) {
			const player = e.target
			const type = player.getAttribute('name')
			if (type === 'forward') {
				this.player = player
			} else if (type === 'backward') {
				this.reversePlayer = player
			}
			// this.scene = 3
			this.setNextStart(0)

			setInterval(() => {
				this.timing()
				this.reverseTiming()
			}, 10)

			this.$refs.subtitle.forEach((subtitle, key) => {
				subtitle.style.transitionDuration = (this.transitions[key].end - this.transitions[key].start) + 's'
				// console.log(subtitle.style.transitionDuration)
			})
			// console.log('trans',this.transitions)
			// console.log(this.titles)
			// console.log('video',this.player,'\nreverse',this.reverseVideo)
		},
		timing: function () {
				this.setCurrentTime(this.player.currentTime)

				if (this.nextStop === undefined || this.nextStop === 0) {
					this.setNextStop(this.transitions[0].start)
					// console.log('nextStop',this.nextStop)
				}

				if (this.player.currentTime >= this.nextStart) {
					this.setLooping(true)
				}
				if (this.player.currentTime === 0) {
					this.setScene(0)
					this.setScene(0)
					this.setNextStop(this.transitions[0].start)
				}

				if (this.player.currentTime >= this.nextStop) {
					if (this.nextStart <= this.nextStop) {
						if (this.looping) {
							this.player.currentTime = this.nextStart
						}
					} else if (this.nextStart === this.nextStop) {
						this.player.pause()
					}
				}
				// console.log(this.nextStart,' to ',this.nextStop)
				// console.log( this.reverseTrans[this.scene+1].start)
		},
		reverseTiming: function () {
			const reverseVideo = this.reversePlayer
			const video = this.player
			const cur = reverseVideo.currentTime

			if (this.transiting) {
				const transStart = this.reverseTrans[this.scene].start
				const transStop = this.reverseTrans[this.scene].end
				// console.log('cur:'+cur)
				// console.log(reverseVideo.currentTime,this.reverseTrans,this.scene, this.reverseTrans[this.scene],transStart,':',transStop)
				if (transStop > transStart) {
					if (cur > transStop) {
						// console.log('this scene:', this.scene)
						// console.log('reverse',transStart, transStop)
						reverseVideo.pause()
						// console.log(reverseVideo.currentTime)
						video.style.zIndex = 0

						this.transiting = false
						video.play()
					}
				}
			}
		},
		nextScene: function () {
			// console.log(this)
			this.playDirection = 'forward'
			this.setLooping(false)
			// console.log('Going Next:',this.scene+1,' of ', this.transitions.length)
			this.reversePlayer.currentTime = this.reverseTrans[this.scene].start
			this.reversePlayer.pause()
			// console.log(this.scene,this.reverseTrans[this.scene].start,this.reverseVideo.currentTime)

			switch (this.theme) {
			case 'smooth':
				this.nextStart = this.transitions[this.scene].end
				if (this.increaseScene() >= this.transitions.length) {
					this.setScene(0)
				}
				this.setNextStop(this.transitions[this.scene].start)
				break
			default:
				this.setNextStart(this.transitions[this.scene].end)
				var nowStart = this.nextStart - this.preTime

				this.increaseScene()

				if (this.scene >= this.transitions.length) {
					console.log('last scene:', this.scene, this.transitions)
					this.lastScene = true
					this.setScene(0)
					// this.nextStart = 0
					this.setNextStop(this.player.duration)
				} else {
					this.setNextStop(this.transitions[this.scene].start)
				}

				if (this.player.paused) {
					break
				}
				console.log('curScene', this.scene)
				// console.log('next transition'+this.nextStart,':',this.nextStop)

				this.player.currentTime = nowStart

				break
			}
			this.player.play()

			// console.log('nextStart',this.nextStart,',nextStop',this.nextStop)
		},
		prevScene: function () {
			this.playDirection = 'backward'
			this.setLooping(false)
			console.log('going back')
			// this.player.style.display = 'none'
			this.player.style.zIndex = '-2'
			//
			// console.log(this.reverseVideo.style.zIndex)
			// console.log('reverse scene',this.scene)
			this.decreaseScene()

			if (this.scene < 0) {
				this.setScene(0)
				this.player.style.zIndex = '0'
				return
			}
			this.player.pause()
			if (this.scene === 0) {
				this.setNextStart(0)
			} else {
				this.setNextStart(this.transitions[this.scene - 1].end)
			}
			this.setNextStop(this.transitions[this.scene].start)

			this.reversePlayer.currentTime = this.reverseTrans[this.scene].start
			console.log('prev scene:', this.scene)
			//  console.log('next transition'+this.nextStart,':',this.nextStop)
			//  console.log(this.reverseVideo.currentTime)
			this.transiting = true

			this.reversePlayer.play()
		},
		isPop: function (k) {
			const pop = (k === this.scene)
			//  let cur = this.player.currentTime
			//  let delay = 0
			if (pop) {
				if (this.$el) {
					let subtitle = this.$el.querySelectorAll('.subtitle-' + k)[0]
					let delay = 0
					if (this.playDirection === 'forward') {
						delay = this.transitions[k].end - this.transitions[k].start
					} else if (this.playDirection === 'backward') {
						delay = this.reverseTrans[k].end - this.reverseTrans[k].start
					}

					subtitle.style.transitionDelay = delay + 's'
					if (k > 0) {
						let lasttitle = this.$el.querySelectorAll('.subtitle-' + (k - 1))[0]
						lasttitle.style.transitionDelay = '0s'
					}
				}
				/*
				console.log('scene' + k,this.nextStart,':',cur)
				if (this.nextStart > cur) {
					delay = this.nextStart - cur
					if (this.$el) {
						let subtitles = this.$el.querySelectorAll('.subtitle-' + k)
						if (subtitles) {
							subtitles.forEach((subtitle) => {

								subtitle.style.transitionDelay = delay+'s'
								console.log(subtitle.className+':'+subtitle.style.transitionDelay)
							})
						}
					}
				}
				*/
			}

			return {
				pop: pop
			}
		}

	}
}
</script>

<style lang="scss" scoped>

	.hero { position: relative; min-width: 100%; overflow: hidden; }
	.hero:before { content: ''; display: block; padding: 56.25% 0 0;}
	.content { position: absolute; top: 0; left: 0; height:100%;width: 100%; max-width: pxToRem(980); padding: 1rem; text-align: center; color: white; z-index: 1;	}

	.sup_title { opacity: 0; transition: opacity 600ms ease-in-out; }
	.in_view .sup_title { opacity: 1; transition-delay: 300ms; }

	// .title { font-family: $fontStack; font-size: pxToRem(56); line-height: 1.2; font-weight: $fontWeightLight; margin: pxToRem(4) 0 pxToRem(8); opacity: 0; transition: opacity 600ms ease-in-out; }
	.in_view .title { opacity: 1; transition-delay: 400ms; }

	.author { font-size: pxToRem(19); line-height: 1.2; margin: 0; opacity: 0; transition: opacity 600ms ease-in-out; }
	.author /deep/ strong { font-weight: bold; }
	.in_view .author { opacity: 1; transition-delay: 500ms; }
	.background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: center; z-index: -1; }
	.video { position: absolute; top: 0; left: 50%; width: auto; height: 100%; transform: translateX(-50%);	display:none;}
	.timer { position:	absolute; top:0; left:50%; color:white;opacity:1;z-index:99;}

	.preload{
		display:block;
	}

	/*
	.func-btn{
		display:none;
		// background:hsla(0,0%,100%, .8);

		color:white;
		bottom:5px;
		margin-bottom:5px;
		font-size:2rem;
		font-weight:bold;
		border:1px solid #fff;
		padding:5px 3rem 5px 3rem;
		border-radius:5px;
		z-index:99;
		cursor:hand;
	}
	*/
	.subtitle{
		// display:none;
		position:absolute;
		opacity:0 !important;
		min-width: 400px;
		width:40vw;
		max-width:600px;
		font-family:Rubik,sans-serif;
		transition-timing-function:ease-in-out;
		transition-property:all;

	}
	.subtitle h1{
		font-weight:bold;
		font-size:2rem;
		line-height:1.2;
		text-align:left;
		margin-bottom:1rem;
	}
	.subtitle h3{
		font-size:1rem;
		line-height:1.5;
		text-align:left;
		transform:translateY(100%);
		transition:transform 1s ease-in-out;
	}
	.pop{
		display:block;
		opacity:1 !important;

		h3{
			transform:translateY(0%);
		}

	}
	.video{
		opacity:1;
	}
	.forward{
		opacity:1;
		z-index:0;

	}
	.backward{
		display:block;
		z-index:-1;
		// position:absolute;
		// top:90%;
	}
	button.isFirst{
		display:none;
	}
	.subtitle-container{
		position:absolute;
		height:auto;
		left:10vw;
		top:45%;
	}
	.buttons{
		position:absolute;
		width:100%;
		bottom:0;
	}
	.mask{
		display:none;
		position:absolute;
		border:1px solid black;
		border-radius:5px;
		width:120px !important;
		height:60px !important;
		cursor:pointer;

		&.play-btn{
			left:50%;
		}
		&.back-btn{
			left:20%;
		}
		&.isFirst{
			display:none;
		}
		svg{

		}
	}
	#controller{
		position:absolute;
		// background:red;
		width:200px;
		height:200px;
		bottom:2rem;
		left:50%;
		transform:translateX(-50%);
		z-index:99;

		#knob{
			width: 200px;
			height: 200px;
			-webkit-transform: rotate(-120deg);
			transition:all .5s ease-in-out;
		}
		#level{
			position: absolute;
			width: 200px;
			height: 200px;
			top: 0;
			left: 0;

			#level-path{
				animation:dash 5s linear forwards;
				stroke-dasharray: 1000;
				stroke-dashoffset: 1000;
			}

		}
		.squiggle-animated{
			position: absolute;
			width: 200px;
			height: 200px;
			top: 0;
			left: 0;
		}
	}
	#glowring{
		display:none;
	}
	.svg {
    position: absolute;
    margin: 0 0;

    &--rays {
        width: 100%;
        height: 100%;
    }
    &--bird {
			width:50px ;
			height:50px;
			left:50%;
			bottom:4rem;
			transform:translateX(-50%);
    }
}

.stop-color {
    stop-color: crimson;
    animation: colors 6s linear infinite;

    &--2 {
        animation-delay: -1s;
    }
    &--3 {
        animation-delay: -.5s;
    }
    &--4 {
        animation-delay: -2s;
    }
    &--5 {
        animation-delay: -2.5s;
    }
    &--6 {
        animation-delay: -1.5s;
    }
}

@keyframes colors {
    0% {
        stop-color: maroon;
    }
    10% {
        stop-color: crimson;
    }
    20% {
        stop-color: orangered;
    }
    30% {
        stop-color: gold;
    }
    40% {
        stop-color: yellowgreen;
    }
    50% {
        stop-color: skyblue;
    }
    60% {
        stop-color: steelblue;
    }
    70% {
        stop-color: slateblue;
    }
    80% {
        stop-color: darkviolet;
    }
    90% {
        stop-color: purple;
    }
}

.svg--bird {
    animation: up-down 3.36s infinite ease-out;
}

@keyframes up-down {
    50% {
				left:50%;
				transform:translateX(-50%) translate(0, 15px);
    }
}

@media screen and (max-width: 1600px) {
	#hero-1 .content .title{font-size: 3.2rem;}
}
@media screen and (max-width: 1440px) {
	#hero-1 .content .title{font-size: 3rem;}
}
@media screen and (max-width: 1200px) {
	#hero-1 .content .title{font-size: 2.8rem;}
}

@media screen and (max-width: 768px) {
	.header_video {min-height: pxToRem(460);}
	.content {
		position:relative;width:100%;

		.subtitle-container{
			top:5rem;
			left:10px;
		}
	}
	.title {font-size: pxToRem(30);}
	.video {width: auto;min-width: 100%;height:auto !important;background: transparent !important;}
	#hero-1 .content .title{font-size: 1.6rem;}
	#controller{
		width:100px;
		height:100px;
		bottom:0;

		.svg--bird{
			width:25px;
			height:25px;
			bottom:2rem;
		}
	}
}
</style>
