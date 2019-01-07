import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sheet: [{
      id: 1,
      no: "1",
      team_id: 1,
      type: 0,
      chapter: "测试习题",
      text: "1+1=?",
      answer: 1,
      choices: [
        "2",
        "3",
        "4",
        "5"
      ]
    }, {
      id: 1,
      no: "2",
      team_id: 1,
      type: 1,
      chapter: "测试习题",
      text: "多选AC",
      answer: 1 | 4,
      choices: [
        "2",
        "3",
        "4",
        "5"
      ]
    }, {
      id: 1,
      no: "3",
      team_id: 1,
      type: 3,
      chapter: "测试习题",
      text: "1+1=2?",
      answer: 1,
      choices: [
        "2",
        "3",
        "4",
        "5"
      ]
    }],
    answers: [1, 1, 1]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    sheetData: state => {
      return {
        answers: state.answers,
        questions: state.sheet
      }
    }
  }
})