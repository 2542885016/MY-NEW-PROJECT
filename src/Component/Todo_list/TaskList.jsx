import TaskItem from './TaskItem'

import './task.css'

export default function TaskList({ tasks, setTasks }) {
    return (
        <ul id="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    setTasks={setTasks} />
            ))}
        </ul>
    )
}
