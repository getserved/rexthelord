<template>
  <div ref="website" class="website" @mouseover="showClip" @mouseout="hideClip">
    <a :href="url" target="_blank">
    <img ref="cover" class="cover" :src="require(`@/assets/images/${cover}`)"/>
    <video ref="clip" class="clip" muted loop v-if="clip">
      <source :src="require(`@/assets/videos/${clip}`)" type="video/mp4" >
    </video>
    </a>
  </div>
</template>

<script>
export default {
  name: 'website',
  props: {
    url: String,
    cover: String,
    clip: String
  },
  components: {

  },
  computed: {

  },
  methods: {
    showClip: function () {
      const clip = this.$refs.clip
      clip.classList.add('show')
      clip.play()
    },
    hideClip: function () {
      const clip = this.$refs.clip
      clip.classList.remove('show')
      clip.currentTime = 0
      clip.pause()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.website{
  flex: 0 45%;
  margin-top: 3rem;
  position: relative;
}

.cover{
  width: 100%;
  height: auto;
  cursor: pointer;
}

.clip{
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
  cursor: pointer;

  &.show{
    z-index: 1;
  }
}
</style>
