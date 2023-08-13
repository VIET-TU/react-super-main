const TaskList = () => {
  return (
    <div className='mt-5 text-blue-500'>
      <div className='mb-4 unfinish'>
        <h2 className='mb-2 text-lg font-bold text-white text-[20px]'>Chưa hoàn thành</h2>
        <div className='tasks '>
          <div className='flex justify-between task'>
            <div className='flex gap-2'>
              <input type='checkbox' name='' id=' ' />
              <span>Hoc bai</span>
            </div>
            <div className='flex gap-1'>
              <button>✏️</button>
              <button>🗑️</button>
            </div>
          </div>
        </div>
      </div>
      <div className='finish'>
        <h2 className='mb-2 text-lg font-bold text-white text-[20px]'>Hoàn thành</h2>
        <div className='tasks '>
          <div className='flex justify-between task'>
            <div className='flex gap-2'>
              <input type='checkbox' name='' id=' ' />
              <div className='relative'>
                <span>Hoc bai</span>
                <div className='absolute h-[1px] bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
              </div>
            </div>
            <div className='flex gap-1'>
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
