<template>
  <div class="cvWorkHistory">
    <div class="icon-flex">
      <iconpanel icon="work.svg" iconColor="rgb(31, 50, 100)"/>
    </div>
    <div class="work-flex">
      <sectionhistory title="WORK HISTORY" :histories="cvWorkHistories" />
    </div>
  </div>
</template>

<script>
import IconPanel from './IconPanel.vue'
import SectionHistory from './SectionHistory.vue'

export default {
  name: 'cvWorkHistory',
  computed: {
    cvWorkHistories () {
      return this.$store.getters.cvWorkHistories
    }
  },
  components: {
    iconpanel: IconPanel,
    sectionhistory: SectionHistory
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cvWorkHistory{
  display: flex;
}
.icon-flex{
    width: 20px;
    position: relative;
    margin-right: .5rem;
}
.work-flex{
  flex: 1 1 0%;
}
</style>
