import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameboard: [],
    revealed: []
  },
  getters: {
  },
  mutations: {
    revealSquare(state, payload) {
      state.revealed.push(payload);
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
      let arr = [];

      // Create two-dimensional array
      for (let i = 0; i < payload.rows; i++) {
        arr[i] = [];
          for (let j = 0; j < payload.columns; j++) {
            arr[i][j] = 0;
          }
      }

      // Calculate number of mines
      let mineCount = payload.rows / payload.columns * 10;

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
