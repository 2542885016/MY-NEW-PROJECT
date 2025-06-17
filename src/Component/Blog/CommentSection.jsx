export default function CommentSection({ postId }) {
    const [comments, setComments] = useState(() => {
        Json.parse(localStorage.getItem(`comments-${postId}`)) || []
    })

    const [input, setinput] = useState('')

    const handleSubmit = () => {
        const newComments = [...comments, { text: input, date: new Date().toISOString() }]
        setComments(newComments)
        localStorage.setItem(`comments-${postId}`, JSON.stringify(newComments))
        setinput('')
    }


    return (
        <>
            <div className="mt-6">
                <h3 className="text-lg font-bold mb-2">Comment</h3>
                <textarea value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={handleSubmit}>comment: </button>
                <ul className="mt-2">
                    {comments.map((c, i) => (
                        <li key={i}>{c.text} <span className="text-xs text-gray-400">({new Date(c.date).toLocaleString()})</span></li>
                    ))}
                </ul>
            </div>
        </>
    )
}