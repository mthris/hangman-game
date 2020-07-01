<template>
  <div class="hangman">
    <div class="hangman__top">
      <span class="hangman__top-line-1"></span>
      <span class="hangman__top-line-2"></span>
      <span class="hangman__top-line-3"></span>
    </div>
    <div class="hangman-body">
      <div v-if="state.hangman[0].head.value" class="hangman-head">
        <div class="hangman-head-eyes">
          <div v-if="state.hangman[6].eyeLeft.value" v-bind:class="'hangman-head-eye-left'"></div>
          <div v-if="state.hangman[7].eyeRight.value" class="hangman-head-eye-right"></div>
        </div>
        <div v-if="state.hangman[8].mouth.value" class="hangman-mouth"></div>
      </div>
      <div v-if="state.hangman[1].backbone.value" class="hangman-backbone">
        <div class="hangman-arms">
          <div v-if="state.hangman[2].armLeft.value" class="hangman-arms__left"></div>
          <div v-if="state.hangman[3].armRight.value" class="hangman-arms__right"></div>
        </div>
        <div class="hangman-legs">
          <div v-if="state.hangman[4].legLeft.value" class="hangman-legs__left"></div>
          <div v-if="state.hangman[5].legRight.value" class="hangman-legs__right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hangman',
  props: ['state']
}
</script>

<style lang="scss">
.hangman{
position: absolute;
right: 114px;
top: 48px;
}

.hangman__top{
position: relative;

  .hangman__top-line-1{
  width: 29px;
  height:1px;
  background: #cfcfcf;
  display: block;
  }

  .hangman__top-line-2{
  width: 24px;
  height:1px;
  background: #cfcfcf;
  display: block;
  transform: rotate(-35deg);
  position: absolute;
  left: 8px;
  top:6px;
  }

  .hangman__top-line-3{
  width: 1px;
  height:84px;
  display: block;
  position: absolute;
  right: 15px;
  top: 11px;
  border-left: 1px solid #cfcfcf;
  }
}
.hangman-body{
position: absolute;
top: 95px;
left: -21px;
}

.hangman-head{
width: 65px;
height: 65px;
border-radius: 50%;
background: #ffffff;
border: 1px solid #cfcfcf;
position: relative;

  .hangman-mouth {
  height: 5px;
  width: 17px;
  background: #cfcfcf;
  position: absolute;
  bottom: 15px;
  left: 25px;
  transform: skewY(-30deg) rotate(30deg);
  }
}

.hangman-head-eyes{
display: flex;
flex-direction: row;
justify-content: space-between;
position: absolute;
right: 18px;
top: 19px;
width: 17px;

  .hangman-head-eye-left{
  width: 7px;
  height: 13px;
  border-radius: 50%;
  background: #cfcfcf;
  }

  .hangman-head-eye-right{
  width: 7px;
  height: 13px;
  border-radius: 50%;
  background: #cfcfcf;
  }
}

.hangman-backbone{
width: 1px;
height: 67px;
background: #cfcfcf;
position: relative;
left: 35px;

  .hangman-arms{
    &__left{
    width: 34px;
    height: 1px;
    background: #cfcfcf;
    transform: rotate(-45deg);
    position: relative;
    left: -29px;
    top: 38px;
    }

    &__right{
    width: 34px;
    height: 1px;
    background: #cfcfcf;
    transform: rotate(45deg);
    position: relative;
    left: -4px;
    top: 37px;
    }
  }

  .hangman-legs{
    &__left{
    width: 36px;
    height: 1px;
    background: #cfcfcf;
    transform: rotate(-60deg);
    position: relative;
    left: -26px;
    top: 79px;
    }
    &__right{
    width: 36px;
    height: 1px;
    background: #cfcfcf;
    transform: rotate(60deg);
    position: relative;
    left: -8px;
    top: 79px;
    }
  }
}

</style>
