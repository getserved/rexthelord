import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const paths = ({
  state: {
    path: {
      image: '/assets/dinasaur.svg'
    },
    bubbles: [
      {
        id: 'story1',
        text: 'Scroll to reveal the image',
        bubbleClass: 'bubble-bottom-left',
        isDefault: true,
        start: 0.00,
        end: 0.15
      },
      {
        id: 'story2',
        text: 'Take a chance to guess what is this',
        bubbleClass: 'bubble-bottom-right',
        isDefault: false,
        start: 0.15,
        end: 0.30
      },
      {
        id: 'story3',
        text: `Does it look like a frog? But it isn't`,
        bubbleClass: 'bubble-bottom-left',
        isDefault: false,
        start: 0.30,
        end: 0.40
      },
      {
        id: 'story4',
        text: 'A chameleon? Very close!',
        bubbleClass: 'bubble-top-right',
        isDefault: false,
        start: 0.40,
        end: 0.60
      },
      {
        id: 'story5',
        text: `Almost there! It's a Tyrannosaurus!`,
        bubbleClass: 'bubble-top-left',
        isDefault: false,
        start: 0.60,
        end: 0.80
      },
      {
        id: 'story6',
        text: `Do you wanna live with a T-Rex? You'll have a lot of fun`,
        bubbleClass: 'bubble-top-left',
        isDefault: false,
        start: 0.80,
        end: 1.00
      }
    ]
  },
  mutations: {

  }
})
