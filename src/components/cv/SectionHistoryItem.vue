<template>
  <div class="historyItem">
    <div class="title">
      {{title}}
    </div>
    <div class="period">
      <span class="startDate">{{startDate}} -</span>
      <span class="endDate">{{endDate}}</span>
    </div>
    <div class="subtitle">
        <span class="subtitle">{{subtitle}}</span>
        <span class="location" v-if="location">, {{location}}</span>
    </div>
    <ul class="description">
      <li :key="k" v-for="(description, k) in descriptions">
        {{description}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sectionHistoryItem',
  props: {
    title: String,
    subtitle: String,
    location: String,
    startDate: String,
    endDate: String,
    descriptions: Array
  },
  components: {

  },
  computed: {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title{
    font-size: 1rem;
    font-weight: 700;
    display: block;
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
.historyItem{
    position: relative;
}
.period{
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    font-size: .8rem;
    font-weight: 700;
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
