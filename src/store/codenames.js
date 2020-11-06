export const codenames = {
  state: {
    game: {
      cover: `codenames.jpg`,
      round: '',
      first: '',
      red: {
        name: '',
        score: 0
      },
      blue: {
        name: '',
        score: 0
      },
      rows: 5,
      columns: 5,
      wins: 7,
      blacks: 1,
      cards: [
        {

        }
      ],
      words: [
        'Innocent',
        'Pineapple',
        'Toy',
        'Africa',
        'Iron',
        'Dog',
        'Reason',
        'Herb',
        'Love',
        'Bridge',
        'Fly',
        'Ocean',
        'Red',
        'Alert',
        'Pikachu',
        'Wall',
        'Ball',
        'Heavey',
        'Church',
        'Austin',
        'Violin',
        'Round',
        'Note',
        'Carry',
        'Banana',
        'Rare',
        'Vibrate',
        'Bear',
        'Torch',
        'Califonia',
        'Dream',
        'Disney',
        'Coin',
        'Beautiful',
        'Write',
        'Believe',
        'Window',
        'String',
        'Horse',
        'Short',
        'Grass',
        'Moon',
        'Cold',
        'Sky',
        'Clear',
        'Master',
        'Australia',
        'Travel',
        'Flower',
        'Spider',
        'Hard',
        'Eyes',
        'Ice',
        'Go',
        'Princess'
      ],
      generateColors: function (map, board, num, tag) {
        for (let i = 0; i < num; i++) {
          let numMap = map.length
          let id = Math.floor(Math.random() * numMap)
          let newColor = map[id]
          board[newColor.row][newColor.col] = tag
          map.splice(id, 1)
        }
      }
    }
  },
  getters: {
    words: state => {
      return state.game.words
    }
  },
  mutations: {
    passRound (state) {
      let curRound = state.game.round
      if (curRound === 'red') {
        state.game.round = 'blue'
      } else {
        state.game.round = 'red'
      }
    },
    incrementScore (state, color) {
      state.game[color].score++
    },
    gameover (state) {
      console.log(state)
    },
    generateCards (state) {
      let newCards = []
      let words = state.game.words
      let rows = state.game.rows
      let cols = state.game.columns
      let numWords = words.length
      let numCards = []
      if (numCards < numWords) {
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            if (j === 0) {
              newCards[i] = []
            }
            numWords = words.length
            let id = Math.floor(Math.random() * numWords)
            newCards[i].push({'word': words[id], x: i, y: j, 'color': 'white'})
            words.splice(id, 1)
          }
        }
      }
      state.game.cards = newCards
      return state.game.cards
    },
    generateBoard (state) {
      let isRedGoFirst = (Math.random() > 0.5)
      let nums = state.game.wins

      let rows = state.game.rows
      let cols = state.game.columns
      let reds = nums
      let blues = nums
      let blacks = state.game.blacks
      let map = []
      let cards = state.game.cards
      let board = [...Array(rows)].map(() =>
                          Array(cols).fill(null).map(() =>
                          `white`))
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          map.push({'row': i, 'col': j})
        }
      }

      if (isRedGoFirst) {
        reds++
      } else {
        blues++
      }

      state.game.generateColors(map, board, reds, 'red')
      state.game.generateColors(map, board, blues, 'blue')
      state.game.generateColors(map, board, blacks, 'black')

      board.map((rows, x) => {
        rows.map((cell, y) => {
          cards[x][y].color = cell
        })
      })

      state.game.round = isRedGoFirst ? 'red' : 'blue'
      state.game.board = board
      state.game.first = state.game.round

      return board
    }
  },
  actions: {

  }
}
