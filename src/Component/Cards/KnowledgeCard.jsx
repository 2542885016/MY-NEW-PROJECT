// src/components/Widgets.jsx
import { useEffect, useState } from "react";
import { Button, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { getFact } from "@/apis/knowledge";

import './cards.css'



// 🧠 每日知识
export default function KnowledgeCard() {
    const [fact, setFact] = useState("Loading fact...");

    const fetchFact = async () => {
        const newFact = await getFact();
        setFact(newFact);
    };

    useEffect(() => {
        fetchFact();
    }, []);


    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="widget-card w-full max-w-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-2xl">
                <CardContent className="widget-content p-4 space-y-3">
                    <h2 className="widget-title text-lg font-bold">🧠 Daily Fact</h2>
                    <p className="widget-text text-sm text-muted-foreground">{fact}</p>
                    <div className="widget-footer">
                        <Button onClick={fetchFact} size="small" variant="outlined">Refresh
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
