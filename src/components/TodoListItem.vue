<template>
  <li
    class="todo-item"
    :class="{ 'todo-item--done': todo.isCompleted }"
  >
    <div class="todo-item__checkbox">
      <input
        type="checkbox"
        :id="todo.id"
        :checked="todo.isCompleted"
        @change="updateIsComplete(todo)"
      />
      <label :for="todo.id" />
    </div>
    <div class="todo-item__content">
      <span class="todo-item__title">
        {{ todo.title }}
      </span>
      <span class="todo-item__date">
        {{ todo.createDate | formatDate }}
      </span>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import { Todo } from '../models/index'

@Component({
  filters: {
    formatDate(createdAt: Date) {
      return new Intl.DateTimeFormat('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(createdAt)
    }
  }
})

export default class TodoListItem extends Vue {
  @Prop({ type: Object, required: true })
  todo!: Todo

  @Action('updateTodo') updTodoState!: (updatedTodo: Todo) => void
  
  updateIsComplete(updatedTodo: Todo): void {
    const updTodo: Todo = {
      id: updatedTodo.id,
      title: updatedTodo.title,
      isCompleted: !updatedTodo.isCompleted,
      createDate: updatedTodo.createDate
    }

    this.updTodoState(updTodo)
  }
}
</script>

<style lang="scss">
  .todo-item__checkbox {
    position: relative;

    label {
      position: absolute;
      width: 22px;
      height: 22px;
      left: 0;
      top: 0;
      background-color: var(--bg-color);
      border: 1px solid var(--input-border-color);
      border-radius: 50%;
      cursor: pointer;
      &:after {
        content: "";
        position: absolute;
        width: 12px;
        height: 6px;
        left: 5px;
        top: 6px;
        border: 2px solid var(--bg-color);
        border-top: none;
        border-right: none;
        opacity: 0;
        transform: rotate(-45deg);
      }
    }
    input[type="checkbox"] {
      display: none;
      visibility: hidden;
    }
    input[type="checkbox"]:checked + label {
      background-color: var(--secondary-color);
      border-color: var(--secondary-color);
    }
    input[type="checkbox"]:checked + label:after {
      opacity: 1;
    }
  }

  .todo-item {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    &__content {
      padding-left: 8px;
      display: flex;
      flex-direction: column;
    }
    &__date {
      font-size: 10px;
      color: var(--secondary-text-color);
    }
    &__checkbox {
      width: 24px;
      height: 24px;
      background-color: var(--secondary-color);
      border-radius: 50%;
      border: none;
      appearance: none;
      cursor: pointer;
      &:checked {
        background-color: var(--secondary-color);
      }
    }
    &--done {
      .todo-item__title {
        color: var(--input-text-color);
        text-decoration: line-through;
      }
    }
  }
</style>
