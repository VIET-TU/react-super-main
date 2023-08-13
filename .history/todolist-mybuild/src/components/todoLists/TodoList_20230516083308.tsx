import { Todo } from '../../@types/todos.types'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
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

  const startEditTodo = (id: string) => {
    const findedTodo = todos.find((todo) => todo.id === id)
    if (findedTodo) {
      setCurrentTodo(findedTodo)
    }
  }

  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) {
        return { ...prev, name }
      }
      return prev
    })
  }

  return (
    <div className='p-[20px] rounded-lg bg-[#ccc] max-w-max mx-auto my-10'>
      <TaskInput addTodo={addTodo} currentTodo={currentTodo}></TaskInput>
      <TaskList handleDoneTodo={handleDoneTodo} todos={notdoneTodos} doneTaskList={false} />
      <TaskList handleDoneTodo={handleDoneTodo} todos={doneTodos} doneTaskList={true} />
    </div>
  )
}

export default TodoList
