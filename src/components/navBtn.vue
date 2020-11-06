<template lang="html">
	<div ref="navBtn" class="navBtn">
		<div class="nav">
			<div class="ripple">
				<simple-svg width="100%" height="100%" custom-class-name="icon" :src="require(`@/assets/images/icons/icon_left-arrow.svg`)" />
				<div class="circle"></div>
			</div>
		</div>
	</div>
</template>

<script>
import { SimpleSVG } from 'vue-simple-svg';

/** Component */
export default {
	props: {
    id: String,
    text: String,
		start: Number,
		end: Number
  },
	components: {
		'simple-svg': SimpleSVG
	},
	ready: function () {

	},
  mounted: function () {

  },
	computed: {

	},
	methods: {

	}
};

</script>

<style lang="scss" scoped>
  /deep/ .nav{
		width:5rem;
		height:2rem;
		opacity:1;
		transition:opacity .5s ease-in-out;

		z-index:20;

		.grid &.nav{
			position:absolute;
			right:3.5rem;
			top:3.5rem;
		}

		.ripple{
			width:5rem;
			height:2rem;
			border-radius:50px;
			background: #000;

			&::before{
				content: '';
				width:100%;
				height:100%;
				border-radius:50px;
				background: #000;
				position: absolute;
				left:50%;
				top:50%;
				transform: translate(-50%, -50%);
				z-index: -1;
				animation: zoomIn 6s infinite;
			}
		}

		.icon{
			width: 100%;
			height: 100%;
			fill:white;
			cursor:pointer;
		}
	}
	.ripple{

	}
	@keyframes zoomIn{
		0%{
			transform: translate(-50%, -50%) scale(1);
		}
		40%{
			transform: translate(-50%, -50%) scale(1);
		}
		50%{
			transform: translate(-50%, -50%) scale(1.5);
			opacity: 0.1;
		}
		50.01%{
			transform: translate(-50%, -50%) scale(1);
			opacity: 1;
		}
		60%{
			transform: translate(-50%, -50%) scale(1.5);
			opacity: 0.1;
		}
		60.01%{
			transform: translate(-50%, -50%) scale(1);
			opacity: 1;
		}
		100%{
			transform: translate(-50%, -50%) scale(1);
		}

	}

	@media only screen and (max-device-width: 1024px) and (orientation : portrait){

	}

</style>
