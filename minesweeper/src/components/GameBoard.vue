<template>
  <div id="gameboard">
    <div v-for="(row, rowIndex) in $store.state.gameboard" :key="`gamerow-${rowIndex}`" class="gameboardrow">
        <GameSquare v-for="(column, columnIndex) in row" :key="`gamesquare-${rowIndex}-${columnIndex}`" :value="column" :x="rowIndex" :y="columnIndex" />
    </div>
    
  </div>
</template>

<script>
import GameSquare from '../components/GameSquare.vue'
export default {
    props: ['rows', 'columns'],
    data() {
        return {
            gameBoard: null
        }
    },
    components: {
        GameSquare
    },
    created() {
        this.$store.commit('createGameboard', {rows: this.rows, columns: this.columns});
    }
}
</script>

<style>
#gameboard {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: linear-gradient(to bottom, #0001, #0004);
    padding: 10px;
    border-radius: 20px;

}

.gameboardrow {
    display: flex;
}
</style>