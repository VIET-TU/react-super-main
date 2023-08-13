import { Todo } from '../../@types/todos.types'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const doneTodos = todos.filter((todo) => todo.done)
  const notdoneTodos = todos.filter((todo) => !todo.done)

  const addTodo = (name: string): void => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((pre) => [...pre, todo])
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  return (
    <div className='p-[20px] rounded-lg bg-[#ccc] max-w-max mx-auto my-10'>
      <TaskInput addTodo={addTodo}></TaskInput>
      <TaskList handleDoneTodo todos={notdoneTodos} doneTaskList={false} />
      <TaskList handleDoneTodo todos={doneTodos} doneTaskList={true} />
    </div>
  )
}

export default TodoList
