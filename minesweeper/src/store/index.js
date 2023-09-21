import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameboard: []
  },
  getters: {
  },
  mutations: {
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
      console.log(mineCount);

      // Place mines in squares
      while (mineCount > 0) {
        let x = Math.floor(Math.random() * payload.rows);
        console.log(x);
        let y = Math.floor(Math.random() * payload.columns);
        console.log(y);
        if (arr[x][y] != 'X') {
          arr[x][y] = 'X';
          mineCount--;
        }
      }

      state.gameboard = arr;
    }
  },
  actions: {
  },
  modules: {
  }
})
