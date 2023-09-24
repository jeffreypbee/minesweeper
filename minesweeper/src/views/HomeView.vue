<template>
  <div class="home">
    <GameBoard rows="25" columns="25" />
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
