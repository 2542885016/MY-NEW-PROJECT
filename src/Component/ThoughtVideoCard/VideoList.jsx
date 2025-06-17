import ThoughtVideoCard from "./ThoughtVideoCard";

const videoData = [
    {
        coverImage: "public/1.jpg",
        thoughtText: "Thought 1",
    },
    {
        coverImage: "public/2.jpg",
        thoughtText: "Thought 2",
    },
    {
        coverImage: "public/3.jpg",
        thoughtText: "Thought 3",
    },
    {
        coverImage: "public/4.jpg",
        thoughtText: "Thought 4",
    },


];

/*
alert("🚨 VideoList 被加载了！");
console.log("🐛 VideoList component 正在运行");
*/

export default function VideoList() {
    return (
        <div className="flex flex-wrap gap-6 justify-center p-4">
            {videoData.map((video, index) => (
                <ThoughtVideoCard
                    key={index}
                    coverImage={video.coverImage}
                    thoughtText={video.thoughtText}
                />
            ))}


        </div>
    );
}
