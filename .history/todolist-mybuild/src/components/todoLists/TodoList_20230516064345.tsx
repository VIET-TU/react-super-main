import TaskInput from '../TaskInput'
import TaskList from '../TaskList'

const TodoList = () => {
  return (
    <div className='p-[400px] rounded-lg bg-[#ccc]'>
      <TaskInput></TaskInput>
      <TaskList />
    </div>
  )
}

export default TodoList
