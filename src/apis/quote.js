// src/apis/quote.js
import axios from "axios";

export async function getQuote(category = "literature") {
    const quotes = {
        literature: [
            "To be, or not to be, that is the question.",
            "It was the best of times, it was the worst of times.",
            "A reader lives a thousand lives before he dies."
        ],
        programming: [
            "Talk is cheap. Show me the code.",
            "First, solve the problem. Then, write the code.",
            "Code never lies, comments sometimes do."
        ],
        fun: [
            "Why don’t scientists trust atoms? Because they make up everything!",
            "I'm not lazy, I'm just on energy-saving mode.",
            "404: Joke not found."
        ]
    };




    // 模拟网络延迟
    return new Promise((resolve) => {
        setTimeout(() => {
            const options = quotes[category] || quotes.literature;
            const random = options[Math.floor(Math.random() * options.length)];
            resolve(random);
        }, 500);
    });
}
