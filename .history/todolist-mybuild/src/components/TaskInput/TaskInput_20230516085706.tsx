import React from 'react'
import { useState } from 'react'
import { Todo } from '../../@types/todos.types'

interface ITaskInputProps {
  currentTodo: Todo | null
  addTodo: (name: string) => void
  editTodo: (name: string) => void
}

const TaskInput = (props: ITaskInputProps) => {
  const { addTodo, currentTodo, editTodo } = props

  const [name, setName] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(name)
    setName('')
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (currentTodo) {
      editTodo(value)
    } else {
      setName(value)
    }
  }

  return (
    <div className='mb-2'>
      <h1 className='mb-4 text-lg font-bold text-white text-[20px] text-center'>Todo list typescript</h1>
      <form placeholder='enter your text' onSubmit={handleSubmit}>
        <input
          className='p-2 mr-4 rounded-md outline-0'
          type='text'
          placeholder='caption gose here'
          value={currentTodo ? currentTodo.name : name}
          onChange={onChangeInput}
        />
        <button type='submit' className='p-1 border-2 border-white rounded-md'>
          {currentTodo ? '✔️' : '➕'}
        </button>
      </form>
    </div>
  )
}

export default TaskInput
