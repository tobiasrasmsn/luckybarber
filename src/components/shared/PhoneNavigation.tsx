import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const PhoneNavigation = () => {
    // State to handle visibility
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        const body = document.body;
        const html = document.documentElement;

        // Recalculate the maximum height each time the user scrolls
        const height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        const heightWithMargin = height - 1200;
        if (window.scrollY > 200 && window.scrollY < heightWithMargin) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
    return (
        <header
            className={`fixed flex md:hidden w-screen px-[6vw] h-[80px] top-[98svh] -translate-y-full z-10 justify-center ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none "
            }`}
        >
            <nav className="w-[100%] rounded-md flex items-center px-4 bg-background/30 backdrop-blur-md">
                <ul className="flex flex-row w-[100%] justify-between items-center">
                    <li>
                        <a href="#" className="text-xl text-foreground">
                            Hjem
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-xl text-foreground">
                            Om oss
                        </a>
                    </li>
                    <li>
                        <Button>Bestill time</Button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default PhoneNavigation;
