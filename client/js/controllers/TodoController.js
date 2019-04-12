// TODO: [x] APIからデータを取得する
// TODO: [x] 取得したデータに基づいて描画する

import TodoCollection from '../models/TodoModel.js'
import Todo from '../views/Todo.js'

const TodoController = {
  views: [],

  async render() {
    const todos = await TodoCollection.read()
    this.views = todos.map(todo => {
      const view = new Todo({ ...todo })
      view.mount()
      return view
    })
  },
}

export default TodoController
