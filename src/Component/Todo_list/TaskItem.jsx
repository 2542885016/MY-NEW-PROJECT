import { useState } from 'react'
import showConfetti from './../../utils/confetti.js'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './task.css'

export default function TaskItem({ task, setTasks }) {
    const [isEditing, setEditing] = useState(false)
    const [editText, setEditText] = useState(task.text)

    const toggleComplete = () => {
        setTasks(prev =>
            prev.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t)
        )
        if (!task.completed) {
            setTimeout(() => {
                requestAnimationFrame(showConfetti)
            }, 1000)
        }
    }

    const deleteTask = () => {
        setTasks(prev => prev.filter(t => t.id !== task.id))
    }

    const handleBlur = () => {
        setTasks(prev => prev.map(t => t.id === task.id ? { ...t, text: editText.trim() } : t))
        setEditing(false)
    }

    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`} data-id={task.id}>
            <input
                type="checkbox"
                className="task-checkbox"
                checked={task.completed}
                onChange={toggleComplete}
            />
            {isEditing ? (
                <input
                    className="edit-input"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleBlur}
                    onKeyDown={(e) => e.key === 'Tab' && handleBlur()}
                    autoFocus
                />
            ) : (
                <span className="task-text" onDoubleClick={() => setEditing(true)}>{task.text}</span>
            )}
            <button className="delete-btn" onClick={deleteTask}>
                <FontAwesomeIcon icon={faTrash} className="trash-icon" />
            </button>

        </li>
    )
}
