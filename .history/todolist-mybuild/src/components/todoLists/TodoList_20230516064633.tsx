import TaskInput from '../TaskInput'
import TaskList from '../TaskList'

const TodoList = () => {
  return (
    <div className='p-[20px] rounded-lg bg-[#ccc] max-w-max mx-auto mx-4'>
      <TaskInput></TaskInput>
      <TaskList />
    </div>
  )
}

export default TodoList
