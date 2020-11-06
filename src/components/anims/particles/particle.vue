<template lang="html">
	<div class="particle">
		<div ref="container" id="container" @mousemove="doMouseover" v-resize="resize" v-in-view:leave="test">
			<div id="first">
				<span></span>
			</div>
			<span id="last"></span>
		</div>
		<particle-panel class="panel"/>
	</div>
</template>

<script>
import ParticlePanel from './particlePanel.vue'
import * as Three from 'three'
import { mapState } from 'vuex'
const vertexShader = require('./glsl/vertexShader.glsl')
const fragmentShader = require('./glsl/fragmentShader.glsl')

// const PI = 3.14159265358979323846264
// const amount = 3600
// const amountPerDegree = 100
const VIEW_ANGLE = 45
const NEAR = 0.1
const FAR = 10000

/** Component */
export default {
	computed: {
		...mapState({
			ringWidth: state => state.particles.parameters.ringWidth,
			noiseTime: state => state.particles.parameters.noiseTime,
			twirl: state => state.particles.parameters.twirl,
			time: state => state.particles.parameters.time,
			speed: state => state.particles.parameters.speed,
			noiseSpeed: state => state.particles.parameters.noiseSpeed
		})
	},
	components: {
		'particle-panel': ParticlePanel
	},
	methods: {
		init: function () {
			let container = this.$refs.container;

			this.camera =
				new Three.PerspectiveCamera(
					VIEW_ANGLE,
					container.clientWidth / container.clientHeight,
					NEAR,
					FAR
				)
			this.camera.position.z = 1
			this.scene = new Three.Scene()

			this.scene.add(this.camera)
			const customUniforms = {
				u_time: {type: 'f', value: 0.0},
				u_twirl: {type: 'f', value: 0.3},
				u_noise_time: {type: 'f', value: 0.0},
				u_ring_width: {type: 'f', value: 3.0}
			}
			let particles = new Three.Geometry()
			let pMaterial = new Three.ShaderMaterial({
				vertexShader,
				fragmentShader,
				uniforms: customUniforms
			})
			pMaterial.transparent = true
			for (let i = 0; i < 18000; i++) {
				let particle = new Three.Vector3(0, 0, i)
				particles.vertices.push(particle)
			}

			this.particleSystem = new Three.Points(particles, pMaterial)
			this.scene.add(this.particleSystem)

			this.renderer = new Three.WebGLRenderer()

			this.renderer.setSize(container.clientWidth, container.clientHeight)

			container.appendChild(this.renderer.domElement)
			//	this.renderer.domElement.onmousemove = function(){console.log('test')}
			this.renderer.render(this.scene, this.camera)

			window.addEventListener('resize', () => {

			}, false)
		},
		animate: function () {
			if (this.pauseRender) {
				return
			}
			requestAnimationFrame(this.animate)
			var _uniforms = this.particleSystem.material.uniforms
			_uniforms.u_time.value += this.speed
			_uniforms.u_noise_time.value += this.noiseSpeed
			_uniforms.u_time.needsUpdate = true
			_uniforms.u_noise_time.needsUpdate = true

			if (this.mouseover) {
				if (_uniforms.u_ring_width.value >= 1.0) {
					_uniforms.u_ring_width.value -= 0.3
					_uniforms.u_ring_width.needsUpdate = true
				}
			} else {
				if (_uniforms.u_ring_width.value <= 3.0) {
					_uniforms.u_ring_width.value += 0.3
					_uniforms.u_ring_width.needsUpdate = true
				}
			}
			this.particleSystem.geometry.verticesNeedUpdate = true

			this.renderer.render(this.scene, this.camera)
		},
		doMouseover: function (e) {
				const cx = e.clientX
				const container = this.$refs.container;
				const detectLeft = container.clientWidth / 2 - 300;
				const detectRight = container.clientWidth / 2 + 300;

				if (cx >= detectLeft && cx <= detectRight) {
					this.mouseover = true
				} else {
					this.mouseover = false
				}
		},
		stopMouseOver: function () {
			this.mouseover = false
		},
		resize: function () {
			const container = this.$refs.container;
			// console.log('resizing')
			this.camera.aspect = container.clientWidth / container.clientHeight
			// this.camera.position.z += 0.5
			// this.camera.position.y -= 0.03

			this.camera.position.z = 1

			this.camera.updateProjectionMatrix()
			this.renderer.setSize(container.clientWidth, container.clientHeight)
		},
		pauseRendering: function () {
			this.pauseRender = true
		},
		test: function () {
			console.log('not-in-view');
		}

	},
	mounted () {
		this.init()
		this.animate()
		window.addEventListener('mouseup', this.stopDrag)
	}

}

</script>

<style lang="scss" scoped>
.particle /deep/ {height:100vh;}
#container /deep/ {height:100%;}

/* Shifting the hidden one quicker */
[data-state='one-two'] #thr{transition-duration: .1s;transform:translateX(100%)}
[data-state='two-thr'] #one{transition-duration: .1s;transform:translateX(100%)}
[data-state='thr-one'] #two{transition-duration: .1s;transform:translateX(100%)}
[data-state='two-one'] #thr{transition-duration: .1s;transform:translateX(-100%)}
[data-state='thr-two'] #one{transition-duration: .1s;transform:translateX(-100%)}
[data-state='one-thr'] #two{transition-duration: .1s;transform:translateX(-100%)}

span{
	position: absolute;
	top: 0;
}

#first{
	font-size: 2.5rem;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-weight: 700;

	span{
		animation: breathing 6s infinite;
	}
}

@keyframes breathing{
	0%{
		opacity: .5;
		transform: translate(-50%, -50%) scale(1);
	}
	40%{
		opacity: 1;
		transform: translate(-50%, -50%) scale(1.1);
		letter-spacing: 1.2;
	}
	60%{
		opacity: 1;
		transform: translate(-50%, -50%) scale(1.1);
		letter-spacing: 1.2;
	}
	100%{
		opacity: .5;
		transform: translate(-50%, -50%) scale(1);
	}
}

.panel{
	position: absolute;
	top: 0;
	right: 0;
}
</style>
