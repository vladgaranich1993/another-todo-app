<template>
  <ul v-show="todos" class="todo__list">
    <todo-list-item
      v-for="todo in todos"
      :key="todo.id" :todo="todo"
    />
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import TodoListItem from './TodoListItem.vue'

@Component({
  components: {
    TodoListItem
  }
})

export default class TodoList extends Vue {
  @Prop({ type: Array, required: true })
  todos!: TodoListItem
}
</script>

<style lang="scss">
  .todo__list {
    padding: 15px 0 0 0;
    border-top: 1px solid var(--divider-color);
    list-style: none;
  }
</style>
