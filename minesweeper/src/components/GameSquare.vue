<template>
  <div class="gamesquare" :class="{revealed : revealed}" @click="revealSquare()" @contextmenu.prevent="toggleFlagged()">
    <div v-if="flagged"><font-awesome-icon icon="fa-solid fa-flag" /></div>
    <div v-if="revealed" :style="{color: color}">{{ valueToDisplay }}</div>
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
    },
    flagged() {
      return this.isInArray(this.$store.state.flagged);
    },
    color() {
      switch(this.value) {
        case 1: return 'cyan';
        case 2: return 'lime';
        case 3: return 'yellow';
        case 4: return 'orange';
        case 5: return 'red';
        case 6: return 'purple';
        case 7: return 'pink';
        default: return 'red';
      }
    }
  },
  methods: {
    toggleFlagged() {
      if (!this.revealed && !this.$store.getters.gameOver) {
        const x = this.x;
        const y = this.y;
        this.$store.commit('toggleFlagged', {x, y});
      }      
    },
    revealSquare() {
      if (!this.flagged && !this.$store.getters.gameOver) {
        const x = this.x;
        const y = this.y;
        this.$store.commit('revealSquare', {x, y});
      }      
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
    border: 1px solid transparent;
    background: linear-gradient(to bottom, yellow, goldenrod);
    margin: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #553344;
    font-weight: bold;
    font-size: 1.2rem;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, .5);
}

.gamesquare.revealed {
  border: 1px solid transparent;
  background: unset;
}

.gamesquare:hover:not(.revealed) {
    cursor: pointer;
}

</style>