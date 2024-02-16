import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ScrollingTextProps {
    text: string;
    speed: number;
}

const ScrollingText = ({ text, speed }: ScrollingTextProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [singleContentWidth, setSingleContentWidth] = useState(0);

    // Function to measure and update content width
    const updateContentWidth = () => {
        if (containerRef.current) {
            const firstChild = containerRef.current.children[0] as HTMLElement;
            setSingleContentWidth(firstChild.offsetWidth);
        }
    };

    useEffect(() => {
        updateContentWidth(); // Update on mount
        window.addEventListener("resize", updateContentWidth); // Update on window resize

        return () => {
            window.removeEventListener("resize", updateContentWidth); // Clean up listener
        };
    }, []); // Empty dependency array ensures this effect runs only on mount and unmount

    const scrollVariants = {
        animate: {
            x: [0, -singleContentWidth],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: speed, // Adjust based on desired speed
                    ease: "linear",
                },
            },
        },
    };
    return (
        <div className="flex flex-row gap-8 whitespace-nowrap overflow-hidden relative w-[100%] ">
            <motion.div
                className="whitespace-nowrap flex"
                ref={containerRef}
                variants={scrollVariants}
                animate="animate"
            >
                <h2 className="text-[13vw] leading-none mt-4">{text}</h2>
                <h2 className="text-[13vw] leading-none mt-4">{text}</h2>
            </motion.div>
        </div>
    );
};

export default ScrollingText;
