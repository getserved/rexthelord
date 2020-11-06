<template lang="html">
	<div class="particlePanel">
		<div class="parameter">
			<span>Ring Width:</span>
			<vue-slider v-model="ringWidth" :mark="true" :min="0.0" :max="10.0" :interval="0.1"/>
		</div>
		<div class="parameter">
			<span>Noise Time:</span>
			<vue-slider v-model="noiseTime" :mark="true" :min="0.0" :max="1.0" :interval="0.1"/>
		</div>
		<div class="parameter">
			<span>Twirl:</span>
			<vue-slider v-model="twirl" :mark="true" :min="0.0" :max="1.0" :interval="0.1" />
		</div>
		<div class="parameter">
			<span>Time:</span>
			<vue-slider v-model="time" :mark="true" :min="0.0" :max="1.0" :interval="0.1" />
		</div>
		<div class="parameter">
			<span>Speed:</span>
			<vue-slider v-model="speed" :mark="true" :min="0.0" :max="1.0" :interval="0.1" />
		</div>
		<div class="parameter">
			<span>Noise Speed:</span>
			<vue-slider v-model="noiseSpeed" :mark="true" :min="0.0" :max="1.0" :interval="0.1" />
		</div>
	</div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
import { mapFields } from 'vuex-map-fields'

/** Component */
export default {
	components: {
    VueSlider
  },
	computed: {
		...mapFields('particles', ['parameters.ringWidth', 'parameters.noiseTime', 'parameters.twirl', 'parameters.time', 'parameters.speed', 'parameters.noiseSpeed'])
	},
	methods: {
	},
	mounted () {
	}
}

</script>

<style lang="scss" scoped>
.particlePanel /deep/{
	min-width: pxToRem(200);
	min-height: pxToRem(200);
	margin: 3rem;
	color: white;
}

.parameter /deep/{
	margin-bottom: 1rem;
}
</style>
