<template>
  <div class="cvSkills">
    <div class="icon-flex">
      <iconpanel icon="plan.svg" iconColor="rgb(31, 50, 100)"/>
    </div>
    <div class="skill-flex">
      <div class="title">
        <span>SKILLS</span>
      </div>
      <div class="skills">
        <sectionqualification
          title="SKILLS"
          :qualifications="cvSkills"
        />
      </div>
    </div>
  </div>
</template>

<script>
import IconPanel from './IconPanel.vue'
import SectionQualification from './SectionQualification.vue'

export default {
  name: 'cvSkills',
  computed: {
    cvSkills () {
      return this.$store.getters.cvSkills
    }
  },
  components: {
    iconpanel: IconPanel,
    sectionqualification: SectionQualification
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cvSkills{
  display: flex;
}
.icon-flex{
    width: 20px;
    position: relative;
    margin-right: .5rem;
}
.skill-flex{
  flex: 1 1 0%;
}
.title{
    font-size: 1rem;
    font-weight: 700;
    display: block;
}
.cvTitle{
    font-size: .8rem;
    display: block;
}
.skill{
    display: flex;
}
.skillset{
  flex: 1 1 0%;
}
.skillLevel{
  text-align: right;
  flex: 1 1 0%;
}
.levelspot{
  display: inline-block;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background: grey;
  margin: .1rem;
}
.qualified{
  background: black;

}
</style>
