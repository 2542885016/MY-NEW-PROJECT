import { useState, useEffect } from "react";
import BlogEditor from "../Component/Blog/BlogEditor";
import BlogList from "../Component/Blog/BlogList";
import BlogPost from "../Component/Blog/BlogPost";

const STORAGE_KEY = 'my_blog_posts';

export default function BlogPage() {
    const [posts, setPosts] = useState(() => {
        // 先从localStorage拿数据，没就空数组
        const saved = localStorage.getItem(STORAGE_KEY)
        return saved ? JSON.parse(saved) : []
    });

    const [selectedPost, setSelectedPost] = useState(null);

    const handleSave = (newPost) => {
        const updatedPosts = posts.some(p => p.id === newPost.id)
            ? posts.map(p => (p.id === newPost.id ? newPost : p)) // 编辑
            : [newPost, ...posts]; // 新增

        setPosts(updatedPosts);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
        setSelectedPost(newPost); // 保存后选中当前文章
        setEditingPost(null); // 清除编辑状态
    };

    const [editingPost, setEditingPost] = useState(null);

    const handleEdit = (post) => {
        setEditingPost(post); // 传给 BlogEditor
    };

    const handleDelete = (id) => {
        const updated = posts.filter(p => p.id !== id)
        setPosts(updated)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        if (selectedPost && selectedPost.id === id) {
            setSelectedPost(null); // 删除后清除选中状态
        }
    };


    return (
        <div className="blog-page">
            {/* 页面标题 */}
            <h1 className="blog-title">My blog</h1>

            {/* 写文章 */}
            <BlogEditor onSave={handleSave} initialPost={editingPost} />

            {/* 显示单篇文章（带评论 & 图片） */}
            {selectedPost ? (
                <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} onEdit={handleEdit} onDelete={handleDelete} onSave={handleSave} initialPost={editingPost} />
            ) : (
                <BlogList posts={posts} onSelect={setSelectedPost} onEdit={handleEdit} onDelete={handleDelete} onSave={handleSave} initialPost={editingPost} />
            )}
        </div>
    );
}
