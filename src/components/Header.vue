<template>
  <header class="header">
    <h1 class="header__title">Hangman</h1>
    <Hangman v-bind:state="state" />
  </header>
</template>

<script>
import Hangman from './Hangman.vue';

export default {
  name: 'Header',
  props: ['state'],
  components: {
    Hangman
  }
}
</script>

<style lang="scss">
.header{
position: relative;
  .header__title{
  text-align: center;
  color: #514f4f;
  font-weight: 900;
  font-size: 65px;
  margin-top: 105px;
  }
}

</style>
