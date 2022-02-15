import Vue from 'vue'
import Vuex from 'vuex'
import { State } from '../models'

Vue.use(Vuex)

const state: State = {
  todos: [
    {
      id: 1,
      title: 'Todo1',
      isCompleted: true,
      createDate: new Date(Date.UTC(2020, 11, 20))
    },
    {
      id: 2,
      title: 'Todo2',
      isCompleted: false,
      createDate: new Date(Date.UTC(2018, 6, 20))
    },
    {
      id: 3,
      title: 'Todo3',
      isCompleted: false,
      createDate: new Date()
    }
  ]
};

export default new Vuex.Store({
  state,
  actions: {
    async addTodo({ commit }, title) {
      const res = { id: Math.random(), title, isCompleted: false, createDate: Date.now() }
      commit('newTodo', res)
    },
  },
  mutations: {
    newTodo: (state, todo) => state.todos.unshift(todo),
  },
  getters: {
    completedTodos: state => state.todos.filter(todo => todo.isCompleted === true),
    currentTodos: state => state.todos.filter(todo => todo.isCompleted === false)
  },
})
