<template>
  <div class="works">
    <div class="container">
      <div class="title">ONE PAGE WEBSITE I DEVELOPED</div>
      <div class="websites">
        <website :url="website.url" :cover="website.cover" :clip="website.clip" :key="k" v-for="(website, k) in websites"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Website from './website.vue'

export default {
  name: 'works',
  components: {
    website: Website
  },
  computed: {
    ...mapState({
      websites: state => state.works.websites.lists
    })
  },
  props: {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/deep/ .container{
  padding: 2rem 0;
}
/deep/ .websites{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
/deep/ .title{
  font-weight: 800;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
}
</style>
