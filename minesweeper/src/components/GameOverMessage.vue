<template>
  <div class="game_over_message">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
    props: ['message']
}
</script>

<style>
.game_over_message {
    position: absolute;
    width: 100%;
    height: 100px;
    top: calc(50% - 30%);
    background: linear-gradient(transparent, #0003, transparent);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>