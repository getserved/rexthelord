<template>
  <div ref="codenames" class="codenames">
    <div class="header">
      <span ref="playBtn" class="playBtn init" @click="initGame">
        PLAY
      </span>
      <gameHeader ref="gameHeader" class="init"/>
    </div>
    <div class="body">
      <img ref="coverImg" class="coverImg init" :src="require( `../../../assets/images/${this.cover}`)" />
      <gamePanel ref="gamePanel" class="init"/>
      <gameBoard ref="gameBoard" class="init"/>
    </div>
  </div>
</template>

<script>
import GameHeader from './gameHeader.vue'
import GamePanel from './gamePanel.vue'
import GameBoard from './gameBoard.vue'
import { mapState } from 'vuex'

export default {
  name: 'CodeNames',
  components: {
    gameHeader: GameHeader,
    gamePanel: GamePanel,
    gameBoard: GameBoard
  },
  computed: {
    ...mapState({
      cover: state => state.codenames.game.cover
    })
  },
  props: {

  },
  methods: {
    initGame: function () {
      this.$refs.codenames.querySelectorAll('.init').forEach((init) => {
        init.classList.remove('init')
      })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.codenames{
  display: flex;
  flex-direction: column;
}
/deep/ .init{
  opacity:0;
  transition: opacity 5s ease-out;
}
/deep/ .header{
  display: flex;
  flex-direction: column;
  height: 10rem;
  flex: 1 1 0%;
  margin-top: 2rem;
}

/deep/ .playBtn{
  margin: auto auto;
  cursor: pointer;
  background-color: $color-red;
  font-size: 2rem;
  font-weight: 700;
  font-family: "Montserrat";
  padding: 1rem 2rem;
  color: white;
  border-radius: 15px 0 15px 0;
  opacity: 0;
  display: none;

  &.init{
    display: block;
    opacity: 1;
  }
}

/deep/ .body{
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
}
/deep/ .coverImg{
  margin: auto;
  opacity: 0;
  transition: opacity .5s ease-out;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);

  &.init{
    display: block;
    opacity: 1;
  }
}

</style>
