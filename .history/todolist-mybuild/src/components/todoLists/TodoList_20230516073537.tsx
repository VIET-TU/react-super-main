import { Todo } from '../../@types/todos.types'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((pre) => [...pre, todo])
  }

  return (
    <div className='p-[20px] rounded-lg bg-[#ccc] max-w-max mx-auto my-10'>
      <TaskInput addTodo={addTodo}></TaskInput>
      <TaskList doneTaskList={false} />
      <TaskList doneTaskList={true} />
    </div>
  )
}

export default TodoList
