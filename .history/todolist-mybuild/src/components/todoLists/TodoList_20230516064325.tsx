import TaskInput from '../TaskInput'
import TaskList from '../TaskList'

const TodoList = () => {
  return (
    <div className='p-[20px]'>
      <TaskInput></TaskInput>
      <TaskList />
    </div>
  )
}

export default TodoList
