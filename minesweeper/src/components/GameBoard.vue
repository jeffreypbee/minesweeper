<template>
  <div id="gameboard">
    <div v-for="(row, rowIndex) in gameBoard" :key="`gamerow-${rowIndex}`" class="gameboardrow">
        <GameSquare v-for="(column, columnIndex) in row" :key="`gamesquare-${rowIndex}-${columnIndex}`" />
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
        let arr = [];

        // creating two-dimensional array
        for (let i = 0; i < this.rows; i++) {
            arr[i] = [];
            for (let j = 0; j < this.columns; j++) {
                arr[i][j] = 0;
            }
        }

        this.gameBoard = arr;
    }
}
</script>

<style>
#gameboard {
    display: flex;
    flex-direction: column;
}

.gameboardrow {
    display: flex;
}
</style>