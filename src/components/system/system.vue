<template lang="html">
	<div ref="system" class="system">
		<div class="container">
			<div class="title">My System</div>
			<div class="slogans">
				<div :key="k" v-for="(slogan, k) in slogans">
					<div class='slogan'>
						<span :key="i" v-for="(char, i) in slogan">
							{{char}}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/** Component */
export default {
	props: {

  },
	ready: function () {

	},
  mounted: function () {

  },
	computed: {
    slogans () {
			let slogans = this.$store.getters.slogans;
			let sloganChars = [];
			slogans.forEach((slogan, k) => {
				sloganChars.push(slogan.split(''));
				console.log(sloganChars);
			});
			return sloganChars
    }
  },
	methods: {

	}
};

</script>

<style lang="scss" scoped>
	.container{
		display: flex;
		flex-direction: column;
		text-align: center;
		padding: 2rem;
	}
	.title{
		font-size: 3rem;
		font-weight: 800;
	}
	.slogans{
		padding-top: 2rem;
		height: 100%;
		display: flex;
		flex-direction: column;
		margin: auto auto;
	}
	.slogan{
		font-size: 2rem;
		font-weight: bold;
		color: $color-blue;
		margin: 1rem;
	}

	span{
		opacity: 0;
	}
	.grid-prev-0 span {
		display: inline-block;
		min-width: 1rem;
		text-shadow: 0 0 0 whitesmoke;
		animation: smoky 3s 1s both;
	}

	.grid-prev-0 span:nth-child(even){
		animation-name: smoky-mirror;
	}

	@keyframes smoky {
  0% {
		transform:
      translate3d(15rem,-8rem,0)
      rotate(-40deg)
      skewX(70deg)
      scale(1.5);
    text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
    text-shadow: 0 0 40px whitesmoke;
  }
  60% {
		transform:
      translate3d(0,0,0)
      rotate(0deg)
      skewX(0deg)
      scale(1);
    opacity: 1;
  }
	to {
		opacity: 1;
	}
}

@keyframes smoky-mirror {
  0% {
		transform:
      translate3d(18rem,-8rem,0)
      rotate(-40deg)
      skewX(-70deg)
      scale(2);
     text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
    text-shadow: 0 0 40px whitesmoke; }
  60% {
		transform:
			translate3d(0,0,0)
			rotate(0deg)
			skewX(0deg)
			scale(1);
		opacity: 1;
  }
	to {
		opacity: 1;
	}
}

@for $item from 1 through 50 {
  span:nth-of-type(#{$item}){
    animation-delay: #{(1 + ($item/10))}s;
  }
}
	@media only screen and (max-device-width: 1024px) and (orientation : portrait){

	}

</style>
