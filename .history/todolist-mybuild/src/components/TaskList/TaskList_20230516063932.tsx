import React from 'react'

const TaskList = () => {
  return (
    <div>
      <h2>Hoàn thành</h2>
      <div className='tasks '>
        <div className='task'>
          <input type='checkbox' name='' id=' ' />
          <span>Hoc bai</span>
          <div className=''>
            <button>✏️</button>
            <button>🗑️</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskList
