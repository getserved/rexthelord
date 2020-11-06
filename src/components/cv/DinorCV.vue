<template>
  <div class="dinorCV">
    <div class="leftPanel">

    </div>
    <div class="mainPanel">
      <cvheader/>
      <cvskills/>
      <cvworkhistory/>
      <cveducation />
      <cvlanguages />

    </div>
    <div class="rightPanel">
    </div>
  </div>
</template>

<script>
import cvHeader from './cvHeader.vue'
import cvSkills from './cvSkills.vue'
import cvWorkHisotry from './cvWorkHisotry.vue'
import cvEducation from './cvEducation.vue'
import cvLanguages from './cvLanguages.vue'

export default {
  name: 'DinorCV',
  components: {
    cvheader: cvHeader,
    cvskills: cvSkills,
    cvworkhistory: cvWorkHisotry,
    cveducation: cvEducation,
    cvlanguages: cvLanguages
  },
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dinorCV{
  position: relative;
  display: flex;
}

.leftPanel{
  flex: 0.2 1 0%;
  background: rgb(31, 56, 100);
}
.mainPanel{
  flex: 1 1 0%;
  padding: .5rem;
}

</style>
