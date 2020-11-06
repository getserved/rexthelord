<template>
  <div class="history">
    <div class="main-flex">
      <div class="title">
        <span>{{title}}</span>
      </div>
      <div class="histories">
        <div :key="k" class="work" v-for="(history, k) in histories">
          <sectionhistoryitem
              :title="history.title"
              :subtitle="history.subtitle"
              :location="history.location"
              :startDate="history.startDate"
              :endDate="history.endDate"
              :descriptions="history.descriptions"
          />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import SectionHistoryItem from './SectionHistoryItem.vue'

export default {
  name: 'sectionHistory',
  props: {
    title: String,
    histories: Array
  },
  components: {
    sectionhistoryitem: SectionHistoryItem
  },
  computed: {

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
}
.work-flex{
  flex: 1 1 0%;
}
.title{
    font-size: 1rem;
    font-weight: 700;
    display: block;
}
.work{
    position: relative;
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
