import Vue from "vue";
import Vuex from "vuex";

import songService from "@/service/songService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songs: [],
    genre: [],
    songsWithSimilarChords: [],
    totalSongs: 0,
  },
  getters: {},
  mutations: {
    SET_SONGS(state, songs) {
      state.songs = songs;
    },
  },
  actions: {
    getSongs({ commit }, { chords, genre }) {
      let parsedChords = chords.replace(/\s/g, "");
      return songService
        .getSongs(parsedChords, genre)
        .then((res) => {
          commit("SET_SONGS", res.data);
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {},
});
