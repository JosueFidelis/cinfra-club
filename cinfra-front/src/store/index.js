import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songs: [],
    genre: [],
    songsWithSimilarChords: [],
    totalSongs: 0,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
