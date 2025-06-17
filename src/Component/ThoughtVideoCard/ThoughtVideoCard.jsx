import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./ThoughtVideoCard.css";

export default function ThoughtVideoCard({
    coverImage,
    thoughtText = "这段视频给我很多启发……",
    title = "视频标题",
    description = "视频描述",
    date = "2023-10-01",
    duration = "00:00",
    author = "作者名",
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="video-card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={coverImage}
                alt="video cover"
                className={`video-image ${hovered ? "blurred" : ""}`}
            />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ x: 180, y: 180, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        exit={{ x: 180, y: 180, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 140, damping: 20 }}
                        className="thought-overlay"
                    >
                        <p className="thought-text">{thoughtText}</p>
                        <h3 className="video-title">{title}</h3> {/* 新增标题 */}
                        <span className="video-date">{date}</span> {/* 新增日期 */}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
