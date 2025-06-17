
import React from "react";
import "./Marquee.css";

export const ReviewCard = ({ img, name, username, body }) => {
    return (
        <>
            <figure className="reviewCard">
                <div className="reviewHeader">
                    <img className="rounded-full" width="32" height="32" alt={name} src={img} />
                    <div className="flex flex-col">
                        <figcaption className="reviewName">{name}</figcaption>
                        <p className="reviewUsername">{username}</p>
                    </div>
                </div>
                <blockquote className="reviewBody">{body}</blockquote>
            </figure>
        </>
    );
};
