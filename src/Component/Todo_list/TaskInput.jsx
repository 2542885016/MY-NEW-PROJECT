import { useState } from 'react'
import './task.css'

export default function TaskInput({ setTasks }) {
    const [input, setInput] = useState('')

    const handleAdd = () => {
        const text = input.trim()
        if (!text) return
        setTasks(prev => [...prev, { text, completed: false, id: Date.now() }])
        setInput('')
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleAdd()
    }

    return (
        <div className="input-container">
            <label htmlFor="input-task" className="to">List:</label>
            <input
                id="input-task"
                type="text"
                placeholder="input task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleAdd}>add task</button>
        </div>
    )
}
