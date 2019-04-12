// TODO: [x] APIからデータを取得する
// TODO: [x] 取得したデータに基づいて描画する

import TodoCollection from '../models/TodoModel.js'
import Todo from '../views/Todo.js'
import TodoForm from '../views/TodoForm.js'

const TodoController = {
  views: [],

  async create(name) {
    const todo = await TodoCollection.create(name)
    const view = new Todo({ id: todo.id, name: todo.name, done: todo.done })
    view.mount()
  },

  update(id, done) {
    TodoCollection.update(id, done)
  },

  async render() {
    const todos = await TodoCollection.read()
    this.views = todos.map(todo => {
      const view = new Todo({ ...todo })
      view.mount()
      return view
    })
    const form = new TodoForm()
    form.mount()
  },
}

export default TodoController
