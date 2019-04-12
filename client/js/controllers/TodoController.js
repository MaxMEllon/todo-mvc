// TODO: [x] APIからデータを取得する
// TODO: [ ] 取得したデータに基づいて描画する

import TodoCollection from '../models/TodoModel.js'
import Todo from '../views/Todo.js'

const TodoController = {
  views: [],

  async render() {
    const todos = await TodoCollection.read()
    this.views = todos.map(todo => {
      const view = new Todo({ id: todo.id, name: todo.name, done: todo.done })
      view.mount()
      return view
    })
  },
}

export default TodoController
