<template>
  <div class="gameBoard">
    <div class="container">
      <div class="board" :class="'first-'+first">
        <div class="row" :key="i" v-for="(row, i) in board">
          <div class="cell" :class="'team-'+col" :key="j" v-for="(col, j) in row">
            <span class="cardName"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameBoard',
  components: {
  },
  props: {

  },
  mounted () {

  },
  computed: {
    board () {
      this.$store.commit('generateBoard')
      return this.$store.state.codenames.game.board
    },
    first () {
      return this.$store.state.codenames.game.first
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/deep/ .container{
  display: flex;
  flex-direction: row;
}
/deep/ .board{
  width: auto;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 5px;
}
/deep/ .row{
  display: flex;
}
/deep/ .cell{
  text-align: center;
  border-radius: 10px;
  background-color: white;
  width: 30px;
  height: 30px;
  margin: .2rem;
  font-weight: 700;
  font-family: 'Montserrat';
  font-size: 1.5rem;
  display: flex;
  cursor: pointer;

  span{
    margin: auto;
  }
}
/deep/ .team-red{
  background-color: $color-red;
}
/deep/ .team-blue{
  background-color: $color-blue;
}
/deep/ .team-black{
  background-color: $color-black;
}
/deep/ .first-red{
  border-color: $color-red;
}
/deep/ .first-blue{
  border-color: $color-blue;
}
</style>
