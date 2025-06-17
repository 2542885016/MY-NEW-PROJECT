
import React from "react";
import Marquee from "react-fast-marquee";
import { ReviewCard } from "./ReviewCard";
import { reviews } from "./data";

import "./Marquee.css";

const firstRow = reviews.slice(0, 3);
const secondRow = reviews.slice(3);

export default function MarqueeDemo() {
    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden w-full py-8 space-y-4">
            <div className="marqueeWrapper">



                <Marquee pauseOnHover speed={50} gradient={true} gradientColor={[255, 255, 255]}>
                    {firstRow.map((review) => (
                        <div className="mx-4" key={review.username}>
                            <ReviewCard {...review} />
                        </div>
                    ))}
                </Marquee>
                <Marquee pauseOnHover speed={50} gradient={true} gradientColor={[255, 255, 255]} direction="right">
                    {secondRow.map((review) => (
                        <div className="mx-4" key={review.username}>
                            <ReviewCard {...review} />
                        </div>
                    ))}
                </Marquee>

                {/* 渐变虚化 */}
                <div className="marqueeGradientLeft"></div>
                <div className="marqueeGradientRight"></div>

            </div>
        </div>



    );
}
