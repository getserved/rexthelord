<template>
  <div class="cvEducation">
    <div class="icon-flex">
      <iconpanel icon="book.svg" iconColor="rgb(31, 50, 100)"/>
    </div>
    <div class="education-flex">
      <sectionhistory title="EDUCATION" :histories="cvEducation" />
    </div>
  </div>
</template>

<script>
import IconPanel from './IconPanel.vue'
import SectionHistory from './SectionHistory.vue'

export default {
  name: 'cvEducation',
  computed: {
    cvEducation () {
      return this.$store.getters.cvEducation
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
.cvEducation{
  display: flex;
  position: relative;
}
.icon-flex{
    width: 20px;
    position: relative;
    margin-right: .5rem;
}
.education-flex{
  flex: 1 1 0%;
}
.edu{
  position: relative;
}
.title{
    font-size: 1rem;
    font-weight: 700;
    display: block;
}
.period{
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    font-size: .8rem;
    text-align: right;
    transform: translateX(calc(-100% - 40px));
}
.startDate{
    display: block;
}
.endDate{
    display: block;
}
</style>
