<template>
  <div id="app">
    <header>
      <h1>MINESWEEPER</h1>
      <nav>
        <button @click="newGame()">New Game</button>
      </nav>
    </header>
    
    <GameOverMessage v-if="$store.getters.gameLost" message="Game Over" />
    <GameOverMessage v-if="$store.getters.gameWon" message="You Win" />

    <main>
      <router-view/>
    </main>
    
    <footer></footer>
  </div>
</template>

<script>
import GameOverMessage from './components/GameOverMessage.vue'

export default {
  components: {
    GameOverMessage
  },
  methods: {
    newGame() {
      this.$store.commit('createGameboard', {rows: 10, columns: 10});
    }
  }
}
</script>

<style>
body {
  background-color: #171125;
  background-image: linear-gradient(to bottom, #33114400, #553344ff);
  background-attachment: fixed;
  color: #eee;
  height: 100%;
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header header header"
                        ". main ."
                        "footer footer footer";
  justify-content: center;
}

header {
  grid-area: header;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  grid-area: header;
  font-family: Impact;
  font-weight: 800;
  font-style: italic;
  font-size: 2.5rem;
  color: #eedd33;
  margin: 3px 5px;
  padding: 0px 7px;
  background: linear-gradient(to bottom, yellow, goldenrod);
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

nav button {
  background: linear-gradient(to bottom, yellow, goldenrod);
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-weight: bold;
  color: #553344;
}

nav button:hover {
  cursor: pointer;
}

main {
  grid-area: main;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

footer {
  grid-area: footer;
  color: #111;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: .8rem;
  padding: 3px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

aside h2 {
  margin: 2px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.gradientbg {
  background: linear-gradient(to bottom, #0003, #0006);
  padding: 10px;
  border-radius: 20px;
}
</style>
