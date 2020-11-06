<template>
  <div class="cvLanguages">
    <div class="icon-flex">
      <iconpanel icon="global.svg" iconColor="rgb(31, 50, 100)"/>
    </div>
    <div class="lang-flex">
      <div class="title">
        <span>LANGUAGE</span>
      </div>
      <div class="langs">
        <sectionqualification
          title="LANGUAGES"
          :qualifications="cvLanguages"
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
    cvLanguages () {
      return this.$store.getters.cvLanguages
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
.cvLanguages{
  display: flex;
}
.icon-flex{
    width: 20px;
    position: relative;
    margin-right: .5rem;
}
.lang-flex{
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
