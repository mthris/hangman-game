<template>
  <div class="menu">
    <router-link class="btn-start-game" to="/board">Start game </router-link>
    <p class="btn-mode">{{ state.mode }}</p>
  </div>
</template>

<script>
  export default {
    props: ['state'],
    name: 'Menu'
  }
</script>

<style lang="scss">
  .menu{
  display: flex;
  flex-direction: column;
  max-width: 330px;
  margin-top: 99px;
  position: relative;
  right: 66px;
  }

  .btn-start-game, .btn-mode {
  background: #cfcfcf;
  border: none;
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  color: #514f4f;
  height: 57px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;

    &:after{
    content: '';
    position: absolute;
    left:0;
    bottom: 0;
    height: 4px;
    width: 100%;
    background: #c0c0c0;
    }
  &:nth-child(2){
  margin-top: 6px;
  }

  }

  .btn-mode{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  }
</style>
