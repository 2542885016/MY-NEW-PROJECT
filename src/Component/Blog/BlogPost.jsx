export default function BlogPost({ post, onDelete, onEdit }) {
    return (
        <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold">{post.title}</h1>
                    <p className="text-sm text-gray-500">{post.date}</p>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(post)}
                        className="text-blue-600 hover:underline text-sm"
                    >
                        edit
                    </button>
                    <button
                        onClick={() => {
                            if (window.confirm("确定要删除这篇文章吗？")) {
                                onDelete(post.id);
                            }
                        }}
                        className="text-red-600 hover:underline text-sm"
                    >
                        delete
                    </button>
                </div>
            </div>

            <p className="mt-4 whitespace-pre-wrap">{post.content}</p>
        </div>
    );
}

// 这个组件用于显示单篇博客文章的内容，包含标题、日期、正文以及编辑和删除按钮。
// 它接收三个 props：post（文章内容）、onDelete（删除函数）和 onEdit（编辑函数）。
// 当点击编辑按钮时，会调用 onEdit 函数并传入当前文章；
// 当点击删除按钮时，会弹出确认对话框，如果用户确认，则调用 onDelete 函数并传入文章 ID。
// 文章的标题和日期会显示在页面顶部，正文内容会显示在下方。
// 样式使用了 Tailwind CSS 类来实现响应式布局和美观的外观。
// 注意：确保在使用此组件时，传入的 post 对象包含 title、date 和 content 属性，并且 onDelete 和 onEdit 函数已正确定义。
// 这样可以确保组件正常工作并提供良好的用户体验。
