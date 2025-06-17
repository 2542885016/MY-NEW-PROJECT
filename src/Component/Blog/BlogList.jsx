import React from 'react'
import './blog.css'

export default function BlogList({ posts = [], onSelect, onEdit, onDelete }) {
    if (!Array.isArray(posts)) {
        return <p>Error: posts should be an array but got {typeof posts}</p>;
    }

    return (
        <div className="blog-container">
            <h1 className='blog-title'> My Journal</h1>
            <p>Welcome to my blog! Here are some of my latest posts:</p>

            {posts.length === 0 ? (
                <p>No posts yet. Create one!</p>
            ) : (
                <ul className="blog-list">
                    {posts.map((post) => (
                        <li
                            key={post.id}
                            className="blog-item relative group hover:bg-gray-50 p-4 rounded-md transition-all"
                        >
                            {/* 点击整个区域进入预览 */}
                            <div onClick={() => onSelect(post)} style={{ cursor: 'pointer' }}>
                                <h2 className='blog-item-title'>{post.title}</h2>
                                <p className='blog-item-data'>{new Date(post.date).toLocaleString()}</p>
                                <p className='blog-item-snippet'>{post.content.substring(0, 60)}...</p>
                            </div>

                            {/* ✏️🗑️按钮区 */}
                            <div className="mt-2 flex gap-2 absolute top-2 right-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onEdit(post)
                                    }}
                                    className="text-yellow-600 border border-yellow-500 px-2 py-1 text-sm rounded hover:bg-yellow-100"
                                >
                                    ✏️ Edit
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onDelete(post.id)
                                    }}
                                    className="text-red-600 border border-red-500 px-2 py-1 text-sm rounded hover:bg-red-100"
                                >
                                    🗑️ Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
