<template>
  <div class="home">
    <GameBoard rows="10" columns="10" />
  </div>
</template>

<script>
import GameBoard from '../components/GameBoard.vue'

export default {
  name: 'HomeView',
  components: {
    GameBoard
  }
}
</script>
