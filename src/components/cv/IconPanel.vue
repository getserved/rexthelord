<template>
  <div class="iconPanel" :style="{'color': iconColor}">
    <simple-svg
      :src="require(`@/assets/${icon}`)"
      width="100%"
      height="100%"
    />
    <div class="icon-line">
    </div>
  </div>
</template>

<script>
const IMAGE_URLS = {
  'SKILLS': '../assets/plan.svg'
}

export default {
  name: 'cvHeader',
  props: {
    icon: String,
    iconColor: String
  },
  computed: {
    getIconURL: function () {
      return IMAGE_URLS[this.icon]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.iconPanel{
  line-height: 0;
}
.icon-line{
  width: 1px;
  height: 100%;
  background: black;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.icon{
  display: block;
  width: 16px;
  height: 16px;
  background-size: contain;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
/deep/ svg path{
  fill: currentColor;
}

</style>
