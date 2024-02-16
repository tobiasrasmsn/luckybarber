import logo_long from "../../assets/logo_long.svg";
import logo_compact from "../../assets/logo_compact.svg";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <header className="my-8 dark bg-background mx-8 md:mx-[7vw]">
            <motion.img
                initial={{ top: "-850px" }}
                animate={{ top: "0px" }}
                transition={{
                    duration: 1,
                    type: "spring",
                }}
                src={logo_compact}
                alt="logo"
                className="md:hidden block relative"
                draggable="false"
            />
            <motion.img
                initial={{ top: "-850px" }}
                animate={{ top: "0px" }}
                transition={{
                    duration: 1,
                    type: "spring",
                }}
                src={logo_long}
                alt="logo"
                className="md:block hidden relative"
                draggable="false"
            />
            <nav className="mt-4">
                <ul className="flex flex-row justify-between items-center">
                    <li>
                        <Link
                            to="/"
                            className="text-xl font-normal hover:italic"
                        >
                            Hjem
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/About"
                            className="text-xl font-normal hover:italic"
                        >
                            Om oss
                        </Link>
                    </li>
                    <li>
                        <Button className="text-xl font-normal p-5 hover:bg-[#659EAA] hover:text-background">
                            <Link to="/Book">Bestill time</Link>
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
