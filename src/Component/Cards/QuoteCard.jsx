// src/components/Widgets.jsx
import { useEffect, useState } from "react";
import { Button, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { getQuote } from "@/apis/quote";

import './cards.css'


// 📖 每日一句
export default function QuoteCard() {
    const [quote, setQuote] = useState("Loading quote...");
    const [quoteCategory, setQuoteCategory] = useState("literature");

    const fetchQuote = async () => {
        const newQuote = await getQuote(quoteCategory);
        setQuote(newQuote);
    };

    useEffect(() => {
        fetchQuote();
    }, [quoteCategory]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="widget-card w-full max-w-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-2xl">
                <CardContent className="widget-content p-4 space-y-3">
                    <h2 className="widget-title text-lg font-bold">📖 Daily one sentence</h2>
                    <p className="widget-text text-sm italic text-muted-foreground">{quote}</p>
                    <div className="widget-footer flex justify-between items-center">
                        <Button onClick={fetchQuote} variant="contained" size="small">One more</Button>
                        <select
                            className="widget-select text-sm rounded border px-1 py-0.5"
                            value={quoteCategory}
                            onChange={(e) => setQuoteCategory(e.target.value)}
                        >
                            <option value="literature">Literature</option>
                            <option value="programming">Programming</option>
                            <option value="fun">Fun</option>
                        </select>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}