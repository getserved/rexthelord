<template>
  <div class="gameHeader">
    <section class="reset">
    </section>
    <section class="teams">
      <div class="team">
        <div class="teamName team-red" :class="{'myTurn': isMyTurn('red')}">
          RED
          <div class="score">
            {{scoreRed}}
          </div>
        </div>

      </div>
      <div class="pass" :class="'round-'+round" @dblclick="passRound">
        <span>PASS</span>
      </div>
      <div class="team">
        <div class="teamName team-blue" :class="{'myTurn': isMyTurn('blue')}">
          BLUE
          <div class="score">
            {{scoreBlue}}
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GameHeader',
  computed: {
    ...mapState({
      scoreRed: state => state.codenames.game.red.score,
      scoreBlue: state => state.codenames.game.blue.score,
      round: state => state.codenames.game.round,
      cover: state => state.codenames.game.cover
    })
  },
  methods: {
    isMyTurn: function (color) {
      return this.$store.state.codenames.game.round === color
    },
    passRound: function () {
      this.$store.commit('passRound')
    },
    getImgUrl (img) {
      var images = require.context('../../../assets/', false)
      return images('./' + img)
    },
    reset: function () {

    }
  },
  components: {
  },
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/deep/ .gameHeader{
  display: flex;
}

/deep/ .reset{
  margin: auto;
  display: flex;
}
/deep/ .resetBtn{
  margin: auto;
  margin-top: 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 15px;
  padding: .5rem 1rem;
  outline:none;
  cursor: pointer;

  &:hover{
    background: #000;
    color: white;
  }
}

/deep/ .teams{
  display: flex;
  flex-direction: rows;
  text-align: center;
  margin-top: 2rem;
}
/deep/ .team{
  flex: 1 1 0%;
}
/deep/ .teamName{
  width: 50%;
  margin: 0 auto;
  border-radius: 15px;
  padding: .5rem;
  color: white;
  opacity: .5;
}
/deep/ .myTurn{
  opacity: 1;
}
/deep/ .team-red{
  background-color: $color-red;
}
/deep/ .team-blue{
  background-color: $color-blue;
}
/deep/ .pass{
  margin: 0 auto;
  border-radius: 15px;
  padding: 0 2rem 0 2rem;
  color: white;
  border: 2px solid red;
  cursor: pointer;

  span{
    padding: 1rem 0;
    display: inline-block;
    vertical-align: middle;
  }

  &.round-red{
    background-color: $color-red;
    border-color: $color-blue;
  }

  &.round-blue{
    background-color: $color-blue;
    border-color: $color-red;
  }
}
</style>
