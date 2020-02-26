import Vue from 'vue';
import Vuex from 'vuex';
import { Tag } from '@/model/Tag'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    conversations: [{
        name: "Herr Meier",
        messages: [
          {
            id: 0,
            origin: "Herr Meier",
            type: "E-Mail",
            subject: "Subject Sample A",
            content: "<h1>Hello World</h1>",
            date: "today",
            tags: [
              { name: "Mindestlohn" },
              { name: "Schwangerschaft" }
            ] as Tag[]
          },
          {
            id: 1,
            origin: "Ich",
            type: "E-Mail",
            subject: "Subject Sample B",
            content: "<h1>Sample Text 2</h1>",
            date: "lastWeek",
            tags: [
              { name: "Mindestlohn" },
              { name: "Schwangerschaft" }
            ] as Tag[]
          },
          {
            id: 2,
            origin: "Herr Meier",
            subject: "Subject Sample C",
            type: "E-Mail",
            content: "<h1>Sample Text 3</h1>",
            date: "lastWeek",
            tags: [
              { name: "Mindestlohn" },
              { name: "Schwangerschaft" }
            ] as Tag[]
          }
        ]
    }],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
