<template lang="html">
	<div ref="fullscreen" class="fullscreen" @click="toggleFullscreen">
    <simple-svg width="100%" height="100%" custom-class-name="expand-icon" :src="require(`@/assets/rectangular.svg`)" />
    <span class="collapse-icon" :class="{'collapsed': collapsed}">
      <simple-svg width="50%" height="50%" custom-class-name="icon" :src="require(`@/assets/compress.svg`)" />
    </span>
	</div>
</template>

<script>
import { SimpleSVG } from 'vue-simple-svg';
import { mapState, mapMutations } from 'vuex'

/** Component */
export default {
	components:	{
		'simple-svg': SimpleSVG
	},
  mounted: function () {

  },
	computed: {
    ...mapState({
      collapsed: state => state.grids.layout.collapsed
    })
	},
	methods: {
    ...mapMutations(['toggleCollapsed']),
    toggleFullscreen: function (e) {
      this.toggleCollapsed()
      this.$parent.toggleScreen(e)
    }
	}
};

</script>

<style lang="scss" scoped>
/deep/ .collapse-icon{
  opacity: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  transition: opacity 1s ease-out;
  display: inline-block;

  .icon{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
/deep/ .collapsed{
  opacity: 0;
}

</style>
