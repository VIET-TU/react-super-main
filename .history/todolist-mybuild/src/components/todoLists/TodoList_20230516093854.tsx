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
    const todosString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todosString || '[]')
    const newTodoObj = [...todosObj, todo]
    localStorage.setItem('todos', newTodoObj)
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

  const finishEditTodo = () => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === (currentTodo as Todo).id) {
          return currentTodo as Todo
        }
        return todo
      })
    })
    setCurrentTodo(null)
  }

  const deleteTodo = (id: string) => {
    if (currentTodo) {
      setCurrentTodo(null)
    }

    setTodos((prev) => {
      const findedIndexTodo = prev.findIndex((todo) => todo.id === id)
      if (findedIndexTodo > -1) {
        const result = [...prev]
        result.splice(findedIndexTodo, 1) // delete 1 elem in array
        return result
      }
      return prev
    })
  }

  return (
    <div className='p-[20px] rounded-lg bg-[#ccc] max-w-max mx-auto my-10'>
      <TaskInput
        editTodo={editTodo}
        addTodo={addTodo}
        currentTodo={currentTodo}
        finishEditTodo={finishEditTodo}
      ></TaskInput>
      <TaskList
        handleDoneTodo={handleDoneTodo}
        todos={notdoneTodos}
        doneTaskList={false}
        startEditTodo={startEditTodo}
        deleteTodo={deleteTodo}
      />
      <TaskList
        handleDoneTodo={handleDoneTodo}
        todos={doneTodos}
        doneTaskList={true}
        startEditTodo={startEditTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default TodoList
