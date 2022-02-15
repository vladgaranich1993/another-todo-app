<template>
  <div id="app" class="container">
    <h1 class="todo__title">
      To Do List
    </h1>
    <main>
      <button
        @click="collapseToggle"
        class="todo__collapse-button"
        :disabled="!completedTodos.length"
      >
        <svg
          width="12" height="12" viewBox="0 0 24 24"
          fill="#ccc"
          :style="[ isCollapsed ? { 'transform': 'rotate(0deg)' } : { 'transform': 'rotate(90deg)' } ]"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
        </svg>
      </button>
      <span class="todo__done-counter">
        {{ completedTodos.length }} Done
      </span>
      <todo-list
        v-show="completedTodos.length"
        :class="{ 'collapsed': isCollapsed }"
        :todos="completedTodos"
      />
      <todo-list
        v-show="currentTodos.length"
        :todos="currentTodos"
      />
    </main>
    <footer>
      <add-todo />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import TodoList from './components/TodoList.vue'
import AddTodo from './components/AddTodo.vue'
import { Todo } from './models/index'
import './styles/main.css'

@Component({
  components: {
    TodoList,
    AddTodo,
  },
})
export default class App extends Vue {
  @Getter('currentTodos') currentTodos!: Array<Todo>
  @Getter('completedTodos') completedTodos!: Array<Todo>

  isCollapsed = false

  collapseToggle(): void {
    this.isCollapsed = !this.isCollapsed
  }
}
</script>

<style lang="scss">
.todo__title {
  margin-top: 35px;
  margin-bottom: 16px;
  font-size: 28px;
  font-weight: var(--font-weight-bold);
}

.todo__done-counter {
  margin-left: 13px;
  color: var(--ghost-text-color);
}

.todo__collapse-button {
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
}

.collapsed {
  display: none;
  visibility: hidden;
}
</style>