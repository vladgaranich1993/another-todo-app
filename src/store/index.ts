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
    updateTodo({ commit }, updTodo) {
      commit('updTodo', updTodo)
    }
  },
  mutations: {
    newTodo: (state, todo) => state.todos.unshift(todo),
    updTodo: (state, updTodo) => {
      const index = state.todos.findIndex(todo => todo.id === updTodo.id)
      if(index !== -1) {
        state.todos.splice(index, 1, updTodo)
      }
    }
  },
  getters: {
    completedTodos: state => state.todos.filter(todo => todo.isCompleted === true),
    currentTodos: state => state.todos.filter(todo => todo.isCompleted === false)
  },
})
