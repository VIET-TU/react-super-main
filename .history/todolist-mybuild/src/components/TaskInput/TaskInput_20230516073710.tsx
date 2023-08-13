import React from 'react'

interface ITaskInputProps {
  addTodo: (a: string) => void
}

const TaskInput = (porps: ITaskInputProps) => {
  return (
    <div className='mb-2'>
      <h1 className='mb-4 text-lg font-bold text-white text-[20px] text-center'>Todo list typescript</h1>
      <form placeholder='enter your text'>
        <input className='p-2 mr-4 rounded-md outline-0' type='text' placeholder='caption gose here' />
        <button type='submit' className='p-1 border-2 border-white rounded-md'>
          ➕
        </button>
      </form>
    </div>
  )
}

export default TaskInput
