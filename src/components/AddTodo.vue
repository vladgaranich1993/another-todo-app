<template>
  <div class="add-todo">
    <form
      class="add-todo__form"
      @submit.prevent="onSubmit"
    >
      <input
        class="add-todo__input"
        type="text" v-model="title"
        placeholder="A new To Do Item..."
      >
      <button
        class="add-todo__button"
        :disabled="!title"
        type="submit"
      >
        Add Item
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action } from 'vuex-class'

@Component
export default class AddTodo extends Vue {
  title = ''

  @Action('addTodo') addNewTodo!: (title: string) => void

  onSubmit(): void {
    this.addNewTodo(this.title)
    this.title = ''
  }
}

</script>

<style lang="scss">
  .add-todo {
    &__form {
      display: flex;
    }
    &__input {
      margin-right: 16px;
      padding: 10px 12px 12px;
      flex: 1 0 auto;
      box-shadow: var(--box-shadow);
      border: 1px solid var(--input-border-color);
      border-radius: 4px;
      font-weight: var(--font-weight-regular);
      color: var(--primary-text-color);
      &::placeholder {
        color: var(--input-text-color);
      }
      &:focus {
        outline: none;
        border: 1px solid var(--primary-color);
      }
    }
    &__button {
      padding: 12px 15px;
      border-radius: 4px;
      border: 1px solid var(--accent-color);
      background: var(--primary-color);
      color: var(--button-text-color);
      cursor: pointer;
      font-weight: var(--font-weight-medium);
      &:hover {
        background: var(--secondary-color);
      }
      &:disabled {
        background: var(--bg-color-disabled);
        border: 1px solid var(--disabled-button-color);
        cursor: not-allowed;
      }
    }
  }
</style>