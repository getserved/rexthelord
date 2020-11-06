export const hero = {
  state: {
    videoppt: {
      video: `hero.mp4`,
      reverseVideo: `reverse.mp4`,
      theme: ``,
      image: ``,
      category: null,
      subTitle: null,
      start: 0,
      end: 0,
      preTime: 1.0,
      currentTime: 0,
      nextPlay: 0,
      nextStop: 0,
      scene: 0,
      looping: true,
      deltaScrl: 240,
      transitions: [{start: 3.0, end: 4.2},
                    {start: 7.0, end: 8.0},
                    {start: 10.8, end: 12.0},
                    {start: 16.8, end: 18.0},
                    {start: 18.0, end: 19.0},
                    {start: 19.0, end: 20.0},
                    {start: 20.0, end: 21.0},
                    {start: 21, end: 22.5},
                    {start: 23.5, end: 26.2},
                    {start: 29.10, end: 30.23},
                    {start: 33.10, end: 34.20},
                    {start: 37.00, end: 38.20},
                    {start: 41.0, end: 42.2},
                    {start: 45.0, end: 46.2},
                    {start: 49.0, end: 50.2},
                    {start: 53.0, end: 54.2},
                    {start: 57.0, end: 58.2},
                    {start: 61.0, end: 63.2},
                    {start: 66.0, end: 67.2}
                  ],

      reverseTrans: [
                    {start: 19.0, end: 19.8},
                    {start: 18.0, end: 18.8},
                    {start: 17.0, end: 17.8},
                    {start: 16.0, end: 16.8},
                    {start: 15.0, end: 15.8},
                    {start: 14.0, end: 14.8},
                    {start: 13.0, end: 13.8},
                    {start: 12.0, end: 12.8},
                    {start: 11.0, end: 11.8},
                    {start: 10.0, end: 10.8},
                    {start: 9.0, end: 9.8},
                    {start: 8.0, end: 8.8},
                    {start: 7.0, end: 7.8},
                    {start: 6.0, end: 6.8},
                    {start: 5.0, end: 5.8},
                    {start: 4.0, end: 4.8},
                    {start: 3.0, end: 3.8},
                    {start: 2.0, end: 2.8},
                    {start: 1.0, end: 1.8},
                    {start: 0.0, end: 0.8}
                  ],
      titles: [
              {title: 'Discover How Electrified Cities Will Look, Sound and Function', text: 'Imagine walking the streets of an active, urban metropolis. But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. You inhale fresher, cleaner air. The good news is that this could all happen. This scenario is an imminent possibility, thanks to transportation electrification, which is already having a fascinating impact on the landscapes of cities around the world. And there is much more to come. Urban centers that are wired, digitized and optimized for this new era will look and function differently than they do today, leveraging an underlying digital ecosystem to function at peak efficiency.'},
              {text: 'There are myriad benefits to transportation electrification. First, EVs send fewer carbon emissions into the air than combustion from fossil fuels, so there are potential clean-air improvements. And through job creation, there may be new revenue streams and business models for cities and states, even as gas-tax revenues ultimately decrease. But to make it all a reality, a progressive, conscientious approach to preparation is mandatory. '},
              {title: 'New streetscapes around the world', text: 'All around the world, cities are moving toward a future of emissions-free transportation in city centers. Seattle and Los Angeles, for example, are two American cities that have signed the Fossil-Fuel-Free Streets Declaration alongside Auckland, Barcelona, Cape Town, Copenhagen, London, Milan, Mexico City, Paris, Quito and Vancouver. They are pledging to procure only zero-emissions buses starting in 2025 and ensuring a major area of each city is zero-emissions by 2030.'},
              {text: 'But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. '},
              {text: 'But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. '},
              {text: 'But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. '},
              {text: 'But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. '},
              {text: 'But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. '},
              {text: 'But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. '},
              {text: 'But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. '},
              {text: 'But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. '},
              {text: 'But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. '},
              {text: 'But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. '},
              {text: 'But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. '},
              {text: 'But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. '},
              {text: 'But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. '},
              {text: 'But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. '},
              {text: 'But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. '},
              {text: 'But instead of your ears filling with noisy traffic and smelling the scent of fumes, you stroll quieter roads that are less congested with fewer cars. '}
            ]
    }
  },
  mutations: {
    setVideo (state, video) {
      state.videoppt.video = video
    },
    setLooping (state, looping) {
      state.videoppt.looping = looping
    },
    setScene (state, scene) {
      state.videoppt.scene = scene
    },
    setNextPlay (state, nextPlay) {
      state.videoppt.nextPlay = nextPlay
    },
    setNextStop (state, nextStop) {
      state.videoppt.nextStop = nextStop
    },
    setCurrentTime (state, currentTime) {
      state.videoppt.currentTime = currentTime
    },
    increaseScene (state) {
      state.videoppt.scene++
      return state.videoppt.scene
    },
    decreaseScene (state) {
      state.videoppt.scene--
      return state.videoppt.scene
    }
  }
}
