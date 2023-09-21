<template>
  <div class="gamesquare">
    {{ value }}
  </div>
</template>

<script>
export default {
  props: ['value']
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