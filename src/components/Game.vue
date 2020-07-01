<template>
  <div class="game">
    <p class="game__description">{{ keyword.description }}</p>
    <p class="game__keyword">
      <span v-for="(item, index) in letters" :key="item.id" :class="`key key-${index + 1}`">{{ currentLetters[index] }}</span>
    </p>
    <div class="keyboard">
      <div class="keyboard-row">
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-1">A</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-2">Ą</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-3">B</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-4">C</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-5">Ć</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-6">D</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-7">E</div>
      </div>
      <div class="keyboard-row">
        <div class="keyboard-key keyboard-key-1">Ę</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-2">F</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-3">G</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-4">H</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-5">I</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-6">J</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-7">K</div>
      </div>
      <div class="keyboard-row">
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-1">L</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-2">Ł</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-3">M</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-4">N</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-5">Ń</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-6">O</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-7">Ó</div>
      </div>
      <div class="keyboard-row">
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-1">P</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-2">Q</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-3">R</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-4">S</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-5">Ś</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-6">T</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-7">U</div>
      </div>
      <div class="keyboard-row">
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-1">V</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-2">W</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-3">X</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-4">Y</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-5">Z</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-6">Ź</div>
        <div v-on:click="updateKeyword" class="keyboard-key keyboard-key-7">Ż</div>
      </div>
    </div>
    <div class="game__stat">
      <p class="letter-left">Letter left <span class="letter-left__num">{{ correct }}</span></p>
      <p class="error-rate">Error rate <span class="error-rate__num">{{ error }}</span></p>
    </div>
    <div class="game__buttons">
      <p v-on:click="removeHangman"><router-link to="/" class="btn-game btn-quit">Quit</router-link></p>
      <button v-on:click="reset" v-bind:class="{ 'btn-yet-again--show' : button.yetAgain }" class="btn-game btn-yet-again">Yet again</button>
      <div :class="{ 'game-success--show' : info.success }" class="game-info game-success">You guessed the word!</div>
      <div :class="{ 'game-error--show' : info.error }" class="game-info game-error">Game over! The solution was: <span class="game-error__keyword">{{ keyword.name }}</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Game',
    props: ['state'],
    data() {
      return {
        keyword: null,
        letters: null,
        currentLetters: [],
        correct: null,
        error: 0,
        hangmanMaxErrors: null,
        freeze: false,
        info: {
          success: false,
          error: false
        },
        button: {
          yetAgain: false
        }
      }
    },
    methods: {
      randomKeyword(){
        const random = Math.floor(Math.random() * this.state.keywords.length);
        return this.keyword = this.state.keywords[random];
      },
      getLetters(){
        return this.letters = this.keyword.name.split('')
      },
      getStats(){
        this.correct = this.keyword.name.length
        this.hangmanMaxErrors = this.keyword.name.length;
      },
      updateKeyword(e){
        const correct = this.letters.map((v, i) => v === e.target.textContent ? i : false).filter((v) => typeof(v) === 'number')

        if(correct.length > 0){
          if(this.freeze){
            return;
          }

          if(this.currentLetters.includes(e.target.textContent)){
            return;
          }
          correct.map(v => this.currentLetters[v] = e.target.textContent)
          this.correct -= correct.length;

          if(this.correct === 0 ){
            this.gameSuccess();
            this.freeze = true;
          }

          this.$forceUpdate();
        }
         else {
           if(this.freeze){
             return;
           }

          this.error +=1;
          if(this.error >= this.keyword.name.length){
            this.gameOver()
            this.error = this.keyword.name.length
            this.freeze = true;
          }
          this.$emit('createHangman', { hangmanMaxErrors: this.hangmanMaxErrors, error: this.error })
         }

         this.addActive(e)
      },
      gameOver(){
        this.info.error = true;
        this.button.yetAgain = true;
      },
      gameSuccess(){
        this.info.success = true;
        this.button.yetAgain = true;
      },
      reset(){
        this.randomKeyword()
        this.getLetters()
        this.getStats()
        this.removeHangman();
        this.removeActive()
        this.currentLetters = []
        this.error = 0;
        this.freeze = false;
        this.info.success = false;
        this.info.error = false;
        this.button.yetAgain = false;
      },
      removeHangman(){
        const bodies = ['head', 'backbone', 'armLeft', 'armRight', 'legLeft', 'legRight', 'eyeLeft', 'eyeRight', 'mouth']
        return this.state.hangman.map((v, i) => this.state.hangman[i][`${bodies[i]}`].value = false );
      },
      addActive(e){
        return e.target.classList.add('keyboard-key--active');
      },
      removeActive(){
        const remove = [...document.querySelectorAll('.keyboard-key--active')].map(v => v.classList.remove('keyboard-key--active'))
        this.$forceUpdate();
        return remove;
      }
    },
    beforeMount(){
      this.randomKeyword();
      this.getLetters();
      this.getStats();
    }
  }
</script>

<style lang="scss">

.game{
color: #514f4f;
font-weight: 400;
margin-top: 55px;
position: relative;
right: 65px;
margin-bottom: 60px;
}

.game__keyword{
display: flex;
flex-direction: row;
margin-top: 39px;
margin-left: 20px;

  .key{
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-transform: uppercase;
  width: 14px;
  height: 19px;

    &:before{
      content: "";
      width: 100%;
      height: 1px;
      background: #514f4f;
      display: block;
      position: absolute;
      bottom: 0;
    }
  &:nth-child(1n+2){
  margin-left: 14px;
  }
  }
}

.keyboard{
margin-top: 31px;
}

.keyboard-row{
display: flex;
flex-direction: row;

  &:nth-child(1n+2){
  margin-top: 6px;
  }

  .keyboard-key{
    width: 42px;
    height: 42px;
    background: #20e184;
    color: #514f4f;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    cursor: pointer;
    font-size: 14px;

    &:nth-child(1n+2){
    margin-left: 6px;
    }
  }
  .keyboard-key--active{
  position: relative;
    &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    border-radius: 5px;
    }
  }
}

.game__stat{
display: flex;
flex-direction: row;
margin-top: 26px;
font-size: 14px;

  .letter-left__num{
  font-weight: 900;
  color: #20e184;
  }

  .error-rate{
    margin-left: 28px;
    .error-rate__num{
    font-weight: 900;
    color: #eb4c4c;
    }
  }
}

.game__buttons{
display: flex;
flex-direction: column;
margin-top: 20px;

  .btn-game, .game-info{
    &:nth-child(1n+2){
    margin-top: 6px;
    }
  }

  .btn-quit {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  }

  .btn-yet-again {
  display: none;
  }

  .btn-quit, .btn-yet-again{
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
  width: 329px;

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

  .game-success{
  background: #20e184;
  border: none;
  font-family: 'Raleway', sans-serif;
  color: #514f4f;
  height: 57px;
  border-radius: 4px;
  font-size: 14px;
  position: relative;
  overflow-x: hidden;
  width: 329px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  display: none;
  }

  .game-success--show {
  display: block;
  }

  .game-error{
  background: #eb4c4c;
  border: none;
  font-family: 'Raleway', sans-serif;
  color: #514f4f;
  height: 98px;
  border-radius: 4px;
  font-size: 14px;
  position: relative;
  overflow-x: hidden;
  width: 329px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  line-height: 2.143;
  display: none;

    .game-error__keyword{
    font-weight: 900;
    }
  }
}

.game__buttons{
  .btn-yet-again--show{
    display: block;
  }

  .game-success--show{
  display: flex;
  }

  .game-error--show {
  display: flex;
  }
}


</style>
