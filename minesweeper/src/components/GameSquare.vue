<template>
  <div class="gamesquare" :class="{revealed : revealed}" @click="revealSquare">
    <span v-if="revealed">{{ valueToDisplay }}</span>
  </div>
</template>

<script>
export default {
  props: ['x', 'y', 'value'],
  computed: {
    valueToDisplay() {
      if (this.value === 0) {
        return '';
      }
      return this.value;
    },
    revealed() {
      return this.isInArray(this.$store.state.revealed);
    }
  },
  methods: {
    revealSquare() {
      const x = this.x;
      const y = this.y;
      this.$store.commit('revealSquare', {x, y});
    },
    isInArray(array) {
      const x = this.x;
      const y = this.y;
      return array.some(e => e.x === x && e.y === y);
    }
  },
}
</script>

<style>
.gamesquare {
    width: 30px;
    height: 30px;
    background-color: gray;
    margin: 1px;
}

.gamesquare.revealed {
  background-color: white;
}

.gamesquare:hover {
    cursor: pointer;
}
</style>