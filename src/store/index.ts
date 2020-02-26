import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [
      {
        id: 0,
        origin: "Person A",
        type: "E-Mail",
        subject: "Subject Sample A",
        content: "<h1>Hello World</h1>",
        date: "today"
      },
      {
        id: 1,
        origin: "Person B",
        type: "E-Mail",
        subject: "Subject Sample B",
        content: "<h1>Sample Text 2</h1>",
        date: "lastWeek"
      },
      {
        id: 2,
        origin: "Person C",
        subject: "Subject Sample C",
        type: "E-Mail",
        content: "<h1>Sample Text 3</h1>",
        date: "lastWeek"
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
