export const game = {
  state: {
    username: "",
    isHost: false
  },
  getters: {

  },
  mutations: {
    setUsername (state, payload) {

    },
    setIsHost (state, payload) {

    }
  },
  actions: {
    signIn ({ commit }, payload) {
      firebase.auth().signIn(payload.username, payload.isHost)
        .then ( (respond) => {
          commmit(setUsername, respond.username);
        })
    }
    signOut ({ commit }, payload) {
      
    }
  }
}
