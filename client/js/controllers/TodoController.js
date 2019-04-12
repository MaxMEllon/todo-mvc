// TODO: [x] APIからデータを取得する
// TODO: [ ] 取得したデータに基づいて描画する

import TodoCollection from '../models/TodoModel.js'

const TodoController = {
  async render() {
    const todos = await TodoCollection.read()
    // ここでAPIから取得したデータが得られるはず
    console.log(todos)
  },
}

export default TodoController
