<template>
  <div id="app">
    <header><h1>MINESWEEPER</h1></header>
    <aside id="newgame">
      <h2>New Game</h2>
    </aside>
    <main>
      <router-view/>
    </main>
    <aside id="instructions">
      <h2>Instructions</h2>
    </aside>
    <footer>Copyright &copy; 2023 Jeffrey Bee</footer>
  </div>
</template>

<style>
body {
  background-color: #333;
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
  grid-template-rows: 5% 1fr 5%;
  grid-template-areas: "header header header"
                        "newgame main instructions"
                        "footer footer footer";
  justify-content: center;
}

header {
  grid-area: header;
  border-bottom: 1px solid gray;
}

header h1 {
  grid-area: header;
  color: #eedd33;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin: 3px 5px;
}

main {
  grid-area: main;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 100%;
}

footer {
  grid-area: footer;
  text-align: center;
  color: gray;
  font-size: .8rem;
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

#newgame {
  grid-area: newgame;
}

#instructions {
  grid-area: instructions;
}
</style>
