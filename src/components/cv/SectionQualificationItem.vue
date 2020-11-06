<template>
  <div class="sectionQualificationItem">
    <div class="skillset">
      {{name}}
    </div>
    <div class="skillLevel">
      <span class="levelspot" :class="{'qualified': isQualified(sk, level)}"  :key="sk" v-for="sk in 5">
      </span>
      <div>
        {{getLevelName}}
      </div>
    </div>
  </div>
</template>

<script>
const LEVEL_NAME = {
      'SKILLS': ['N/A', 'Basic', 'Average', 'Good', 'Very Good', 'Excellent'],
      'LANGUAGES': ['N/A', 'Basic', 'Average', 'Good', 'Superior', 'Native']
}

export default {
  name: 'sectionQualificationItem',
  props: {
    title: String,
    name: String,
    level: Number
  },
  components: {

  },
  computed: {
    getLevelName: function () {
      return LEVEL_NAME[this.title][this.level]
    }
  },
  methods: {
    isQualified: (k, level) => {
      return k <= level
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title{
    font-size: 1rem;
    font-weight: 700;
    display: block;
}

.skill{
    display: flex;
}
.skillset{
  flex: 1 1 0%;
  position: relative;

  &:before{
    content: "";
    width: 8px;
    height: 8px;
    background: black;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: -18px;
    transform: translate(-50%, -50%);
  }
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
