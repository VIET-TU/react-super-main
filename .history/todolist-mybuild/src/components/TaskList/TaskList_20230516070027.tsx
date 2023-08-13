import React from 'react'

const TaskList = () => {
  return (
    <div>
      <div className='unfinish'>
        <h2>Chưa hoàn thành</h2>
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
      <div className='finish'>
        <h2 className='mb-4 text-lg font-bold text-white text-[20px]'>Hoàn thành</h2>
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
    </div>
  )
}

export default TaskList
