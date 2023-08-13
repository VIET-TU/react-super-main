import React from 'react'

const TaskInput = () => {
  return (
    <div className='mb-2'>
      <h1 className='mb-2 text-lg font-bold text-white text-[20px]'>Todo list typescript</h1>
      <form placeholder='enter your text'>
        <input className='p-2 mr-4 rounded-md outline-0' type='text' placeholder='caption gose here' />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}

export default TaskInput
