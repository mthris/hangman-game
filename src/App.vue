<template>
  <div id="app">
    <div class="container">
      <Header v-bind:state="state" />
      <router-view v-on:createHangman="createHangman" v-bind:state="state"></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return {
      state: {
        hangman: [
          {
            head: {
              value: false
            }
          },
          {
            backbone: {
              value: false
            }
          },
          {
            armLeft: {
              value: false
            }
          },
          {
            armRight: {
              value: false
            }
          },
          {
            legLeft: {
              value: false
            }
          },
          {
            legRight: {
              value: false
            }
          },
          {
            eyeLeft: {
              value: false
            }
          },
          {
            eyeRight: {
              value: false
            }
          },
          {
            mouth: {
              value: false
            }
          }
        ],
        keywords: [
          {
            id: 1,
            description: 'Character',
            name: 'GERALT',
            letters: 6
          },
          {
            id: 2,
            description: 'Superhero',
            name: 'BATMAN',
            letters: 6
          },
          {
            id: 3,
            description: 'Person',
            name: 'TRUMP',
            letters: 5
          },
          {
            id: 4,
            description: 'Websites',
            name: 'YOUTUBE',
            letters: 7
          },
          {
            id: 5,
            description: 'Food',
            name: 'PIEROGI',
            letters: 7
          },
          {
            id: 6,
            description: 'Food',
            name: 'SPAGHETTI',
            letters: 9
          },
          {
            id: 7,
            description: 'National capitals',
            name: 'CANBERRA',
            letters: 8
          },
          {
            id: 8,
            description: 'National capitals',
            name: 'BERLIN',
            letters: 6
          },
          {
            id: 9,
            description: 'Person',
            name: 'ARMSTRONG',
            letters: 9
          },
          {
            id: 10,
            description: 'Person',
            name: 'GATES',
            letters: 5
          },
          {
            id: 11,
            description: 'Person',
            name: 'ZUCKERBERG',
            letters: 10
          },
          {
            id: 12,
            description: 'It',
            name: 'FILE',
            letters: 4
          },
          {
            id: 13,
            description: 'Superhero',
            name: 'SUPERMAN',
            letters: 8
          },
          {
            id: 14,
            description: 'Places',
            name: 'HOSTEL',
            letters: 6
          },
          {
            id: 15,
            description: 'The vehicle',
            name: 'BUS',
            letters: 3
          },
          {
            id: 16,
            description: 'Occupation',
            name: 'DOCTOR',
            letters: 6
          },
          {
            id: 17,
            description: 'Occupation',
            name: 'TEACHER',
            letters: 7
          },
          {
            id: 18,
            description: 'Sport',
            name: 'FOOTBALL',
            letters: 8
          },
          {
            id: 19,
            description: 'Sport',
            name: 'BASKETBALL',
            letters: 10
          },
          {
            id: 20,
            description: 'Sport',
            name: 'BOXING',
            letters: 6
          },
          {
            id: 21,
            description: 'Animal',
            name: 'TIGER',
            letters: 5
          },
          {
            id: 22,
            description: 'Animal',
            name: 'ELEPHANT',
            letters: 8
          },
          {
            id: 23,
            description: 'Games',
            name: 'GOTHIC',
            letters: 6
          }
        ],
        mode: 'Normal'
       }
      }
    },
  methods: {
    createHangman(stat){
      const bodies = ['head', 'backbone', 'armLeft', 'armRight', 'legLeft', 'legRight', 'eyeLeft', 'eyeRight', 'mouth']
      return this.state.hangman.map((v, i) => {
        const body = bodies[i];
        return i < Math.floor(this.state.hangman.length / (stat.hangmanMaxErrors - stat.error)) - 1 ? (this.state.hangman[i][`${body}`].value = true) : false;
      })
    }
  }
}
</script>

<style>
*{
padding: 0;
margin: 0;
}

html, body {
width: 100%;
height: 100%;
}

body{
font-family: 'Raleway', sans-serif;
background: #f0f0f0;
font-weight: 400;
}

.container{
max-width: 450px;
margin: 0 auto;
}

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;900&display=swap');


</style>
