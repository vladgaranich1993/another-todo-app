export interface Todo {
  id: number,
  title: string,
  createDate: Date,
  isCompleted: boolean
}

export interface State {
  todos: Array<Todo>
}
