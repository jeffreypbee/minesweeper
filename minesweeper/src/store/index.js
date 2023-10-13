import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameboard: [],
    revealed: [],
    flagged: [],
    numberOfMines: 0,
    gameWon: false,
    gameLost: false
  },
  getters: {
  },
  mutations: {
    toggleFlagged(state, payload) {
      const x = payload.x;
      const y = payload.y;
      if (state.flagged.some(e => e.x === x && e.y === y)) {
        state.flagged.splice(state.flagged.findIndex(f => f.x === x && f.y === y), 1);
      } else {
        state.flagged.push({x, y});
      }
    },
    revealSquare(state, payload) {

      // Reveal this square
      state.revealed.push(payload);

      // Check if player won the game
      if (state.gameboard.length - state.revealed.length == state.numberOfMines) {
        state.gameWon = true;
      }

      const x = payload.x;
      const y = payload.y;
      if (state.gameboard[x][y] === 0) {
        for (let i = x-1; i < x+2; i++) {
          if (i >= 0 && i < state.gameboard.length) {
            for (let j = y-1; j < y+2; j++) {
              if (j >= 0 && j < state.gameboard[i].length) {
                if (i !== x || j !== y) {
                  if (!state.revealed.some(e => e.x === i && e.y === j)) {
                    this.commit('revealSquare', {x: i, y: j});
                  }                  
                }
              }                
            }
          }            
        }
      }
    },
    createGameboard(state, payload) {
      // Clear game state
      state.gameboard = [];
      state.revealed = [];
      state.flagged = [];
      state.numberOfMines = 0;
      state.gameWon = false;
      state.gameLost = false;

      let arr = [];

      // Create two-dimensional array
      for (let i = 0; i < payload.rows; i++) {
        arr[i] = [];
          for (let j = 0; j < payload.columns; j++) {
            arr[i][j] = 0;
          }
      }

      // Calculate number of mines
      let mineCount = Math.floor(payload.rows * payload.columns / 8);
      state.numberOfMines = mineCount;
      console.log(mineCount);

      // Place mines in squares
      while (mineCount > 0) {
        let x = Math.floor(Math.random() * payload.rows);
        let y = Math.floor(Math.random() * payload.columns);
        if (arr[x][y] != 'X') {
          arr[x][y] = 'X';
          mineCount--;

          // Update neighboring squares' mine proximity count
          for (let i = x-1; i < x+2; i++) {
            if (i >= 0 && i < payload.rows) {
              for (let j = y-1; j < y+2; j++) {
                if (j >= 0 && j < payload.columns) {
                  if (arr[i][j] !== 'X') {
                    arr[i][j]++;
                  }
                }                
              }
            }            
          }
        }
      }

      // Update squares with mine proximity count


      state.gameboard = arr;
    }
  },
  actions: {
  },
  modules: {
  }
})
