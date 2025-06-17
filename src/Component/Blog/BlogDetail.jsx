import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../../utils/blogData";

import "./blog.css";

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogData.find((blog) => blog.id === parseInt(id));

    if (!blog) {
        return <div>Blog not found</div>
    }

    return (
        <div className="blog-detail">
            <link to='/' className="back-link" >← return the list of Journal</link>
            <h1 className="blog-detail-title">{blog.title}</h1>
            <p className="blog-detail-date">{blog.data}</p>
            <p className="blog-detail-content">{blog.content}</p>
        </div>
    );
}

export default BlogDetail;
