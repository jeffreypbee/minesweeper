<template>
  <div class="gamesquare">
    {{ valueToDisplay }}
  </div>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    valueToDisplay() {
      if (this.value === 0) {
        return '';
      }
      return this.value;
    }
  }
}
</script>

<style>
.gamesquare {
    width: 30px;
    height: 30px;
    background-color: gray;
    margin: 1px;
}

.gamesquare:hover {
    cursor: pointer;
}
</style>