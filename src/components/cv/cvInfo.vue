<template>
  <div class="cvInfo">
    <div class="info">
      <div class="mobile">
        <simple-svg
          :src="require(`@/assets/call.svg`)"
          width="1.5rem"
          height="1.5rem"
        />
        <span class="cvMobile" v-text="cvInfo.mobile"></span>
      </div>
      <div class="mail">
        <simple-svg
          :src="require(`@/assets/mail.svg`)"
          width="1.5rem"
          height="1.5rem"
        />
        <span class="cvEmail" v-text="cvInfo.mail">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cvInfo',
  computed: {
    cvInfo () {
      return this.$store.getters.cvInfo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cvInfo{
  padding: 1rem 0;
}

/deep/ svg{
  vertical-align: middle;
  margin-right: .2rem;
}

.mobile{
  padding: .2rem 0;
}
.mail{
  padding: .2rem 0;
}

</style>
