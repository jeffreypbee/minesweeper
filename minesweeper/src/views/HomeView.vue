<template>
  <div class="home">
    <GameBoard rows="30" columns="30" />
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
