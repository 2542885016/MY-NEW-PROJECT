import React from 'react'
import './blogCard.css'

export default function BlogCard({ post }) {
    return (
        <>
            <div className={` ${style.card} 
                        rounded-xl shadow-md p-4 
                        hover: shadow-lg transition`}
            >
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-sm text-gray-500">{post.date}</p>
                <p className="mt-2">{post.summary}</p>

            </div>
        </>
    )
}