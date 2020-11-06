export const systems = {
  state: {
     system: {
       slogans: [
         'LEARN EVERY DAY',
         'INVEST IN IDEAS THAT MATTER',
         'TAKE IN THE GOOD AND INSPIRE',
         'BE MORDEST AND MOTIVATE',
         'THINK TWICE AND FAIL TRIPLE AND RISE',
         'CHALLENGE IS ALWAYS WELCOMED',
         'PHYSICAL HEALTH IS AS IMPORTANT AS MENTAL',
         'LIFE IS SHORT DO NOT REGRET'
       ]
    }
  },
  getters: {
    slogans: state => {
      return state.system.slogans
    }
  },
  mutations: {

  },
  actions: {

  }
}
