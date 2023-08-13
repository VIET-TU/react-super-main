import { Todo } from '../../@types/todos.types'

interface ITaskList {
  doneTaskList?: boolean
  todos: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
}
const TaskList = (props: ITaskList) => {
  const { doneTaskList, todos, handleDoneTodo, startEditTodo } = props

  const onChangeCheckbox = (idTodo: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDoneTodo(idTodo, e.target.checked)
  }

  return (
    <div className='mt-5 text-blue-500'>
      <div className=''>
        <h2 className='mb-2 text-lg font-bold text-white text-[20px]'>
          {doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}
        </h2>
        <div className='tasks '>
          {todos.map((todo) => (
            <div key={todo.id} className='flex justify-between task'>
              <div className='flex gap-2'>
                <input type='checkbox' name='' id=' ' checked={todo.done} onChange={onChangeCheckbox(todo.id)} />
                <div className='relative'>
                  <span>{todo.name}</span>
                  <div
                    className={
                      todo.done
                        ? 'absolute w-full h-[2px] bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        : ''
                    }
                  ></div>
                </div>
              </div>
              <div className='flex gap-1'>
                <button onClick={(e) => startEditTodo(todo.id)}>✏️</button>
                <button>🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TaskList
