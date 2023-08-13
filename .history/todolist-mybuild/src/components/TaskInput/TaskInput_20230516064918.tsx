import React from 'react'

const TaskInput = () => {
  return (
    <div className=''>
      <h1 className='text-lg font-bold text-white'>Todo list typescript</h1>
      <form placeholder='enter your text'>
        <input type='text' placeholder='caption gose here' />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}

export default TaskInput
