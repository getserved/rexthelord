<template>
  <div class="sectionQualification">
    <div class="main-flex">
      <div class="qualifications">
        <div :key="k" class="qualification" v-for="(qualification, k) in qualifications">
          <qitem
            :title="title"
            :level="qualification.level"
            :name="qualification.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionQualificationItem from './SectionQualificationItem.vue'

export default {
  name: 'sectionQualification',
  props: {
    title: String,
    qualifications: Array
  },
  components: {
    qitem: SectionQualificationItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cvSkills{
  display: flex;
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
