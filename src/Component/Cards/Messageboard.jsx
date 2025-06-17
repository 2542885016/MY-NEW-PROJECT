
import { useEffect, useState } from "react";
import { Button, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

import './cards.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


// 💬 留言板
export default function MessageCard() {
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem("messages");
        return saved ? JSON.parse(saved) : [];
    });

    const [input, setInput] = useState("");

    const handleSubmit = () => {
        if (input.trim()) {
            const updated = [...messages, { text: input, time: new Date().toLocaleString() }];
            setMessages(updated);
            localStorage.setItem("messages", JSON.stringify(updated));
            setInput("");
        }
    };

    const deleteMessage = (index) => {
        const updated = messages.filter((_, i) => i != index)
        setMessages(updated)
        localStorage.setItem('messages', JSON.stringify(updated))
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission if inside a form
            handleSubmit(e); // Call the function to handle the Enter key

        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <Card className="widget-card w-full max-w-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-2xl">
                <CardContent className="widget-content p-4 space-y-3">
                    <h2 className="widget-title text-lg font-bold">💬 Message Board</h2>
                    <div className="widget-message-list space-y-2 max-h-40 overflow-y-auto text-sm">
                        {messages.map((msg, idx) => (
                            <div key={idx} className="widget-message border rounded p-1 text-muted-foreground" onKeyDown={handleKeyDown}  >
                                <p>{msg.text}</p>
                                <span className="text-xs text-right block">{msg.time}</span>
                                <div className="btn">
                                    <button className="delete-btn" onClick={() => deleteMessage(idx)}>
                                        <FontAwesomeIcon icon={faTrash} className="trash-icon" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="widget-footer flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            type="text"
                            className="widget-input flex-1 border rounded px-2 py-1 text-sm"
                            placeholder="Write something..."
                        />
                        <Button size="small" onClick={handleSubmit}>Send</Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}