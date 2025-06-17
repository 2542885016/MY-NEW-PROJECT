//功能：新增或编辑博客文章的组件
import { useState, useEffect } from 'react'

export default function BlogEditor({ onSave, initialPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if (initialPost) {
            setTitle(initialPost.title);
            setContent(initialPost.content);
            setDate(initialPost.date || new Date().toISOString());
        } else {
            setDate(new Date().toISOString());
            setTitle('');
            setContent('');
        }
    }, [initialPost]);

    const handleSave = () => {
        const newPost = {
            id: initialPost?.id || Date.now(), // 保留原 id 或生成新 id
            title,
            content,
            date,
        };

        onSave(newPost);

        // 重置状态（仅限新增，不影响编辑状态）
        if (!initialPost) {
            setTitle('');
            setContent('');
            setDate(new Date().toISOString());
        }
    };

    return (
        <div className="blog-editor">
            <h2 className="text-lg font-bold mb-2">
                {initialPost ? 'edit this' : 'create new one'}
            </h2>

            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="标题"
                className="border p-2 mb-2 w-full"
            />

            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="正文内容..."
                className="border p-2 mb-2 w-full"
            />

            <button
                onClick={handleSave}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                {initialPost ? 'save' : 'post'}
            </button>
        </div>
    );
}
