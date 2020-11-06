<template>
  <div class="gamePanel">
    <div class="row" :key="i" v-for="(row, i) in cards">
      <div class="card" :data-color="col.color" :class="'team-'+col.color" :key="j" v-for="(col, j) in row" @dblclick="revealCard">
        <span class="cardName">{{col.word}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GamePanel',
  components: {
  },
  props: {

  },
  mounted () {

  },
  computed: {
    cards () {
      this.$store.commit('generateCards')
      return this.$store.state.codenames.game.cards
    }
  },
  methods: {
    revealCard: function (evt) {
      let card = evt.target.closest('.card')
      card.classList.add('reveal')
      this.score(card)
    },
    score: function (card) {
      let color = card.dataset.color
      if (color === 'red') {
        this.$store.commit('incrementScore', 'red')
      } else if (color === 'blue') {
        this.$store.commit('incrementScore', 'blue')
      } else if (color === 'white') {
        this.$store.commit('passRound')
      } else if (color === 'black') {
        this.$store.commit('gameover')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/deep/ .gamePanel{
  display: flex;
  flex-direction: column;
}
/deep/ .row{
  flex: 1 1 0%;
  display: flex;
}
/deep/ .card{
  flex: 1 1 0%;
  text-align: center;
  border-radius: 15px;
  background-color: white;
  min-height: 5rem;
  margin: 1rem;
  font-weight: 700;
  font-family: 'Montserrat';
  font-size: 1.5rem;
  display: flex;
  cursor: pointer;

  &:hover:not(.reveal){
    transition: all .5s ease-in-out;
    transform: translate(-2px, -2px);
    box-shadow: 5px 10px #888888;
  }

  span{
    margin: auto;
  }
}
/deep/ .team-red.reveal{
  background-color: $color-red;
  color: white;
}
/deep/ .team-blue.reveal{
  background-color: $color-blue;
  color: white;
}
/deep/ .team-black.reveal{
  background-color: $color-black;
  color: white;
}
/deep/ .team-white.reveal{
  background-color: transparent;
  color: #898989;
}
</style>
