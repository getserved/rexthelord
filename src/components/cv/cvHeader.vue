<template>
  <div class="cvHeader">
    <div class="title">
      <span class="cvName" v-text="cvHeader.name">
      </span>
      <span class="cvTitle" v-text="cvHeader.title">
      </span>
    </div>
    <cvinfo />
    <div class="cvSummary" v-text="cvHeader.summary">
    </div>
  </div>
</template>

<script>
import cvInfo from './cvInfo.vue'

export default {
  name: 'cvHeader',
  computed: {
    cvHeader () {
      return this.$store.getters.cvHeader
    }
  },
  components: {
    cvinfo: cvInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cvHeader{
  padding-bottom: 1rem;
}
.cvName{
    font-size: 2rem;
    font-weight: 700;
    display: block;
}
.cvTitle{
    font-size: 1.5rem;
    display: block;
}

</style>
