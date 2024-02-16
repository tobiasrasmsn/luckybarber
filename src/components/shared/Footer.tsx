import React from "react";
import logo from "../../assets/logo.webp";
const Footer = () => {
    return (
        <footer className="mt-20 mb-8 mx-8 md:mx-[7vw] flex flex-col md:flex-row justify-between items-center md:items-center">
            <img
                src={logo}
                alt="footer logo"
                className="mb-4 md:mb-0 w-[15vw]"
            />
            <div className="flex flex-col md:flex-row gap-20">
                <ul className="flex flex-col">
                    <h2 className="text-2xl">Navigasjon</h2>
                    <li>
                        <a href="#">Hjem</a>
                    </li>
                    <li>
                        <a href="#">Om oss</a>
                    </li>
                    <li>
                        <a href="#">Bestill time</a>
                    </li>
                </ul>
                <ul className="flex flex-col">
                    <h2 className="text-2xl">Personvern</h2>
                    <li>
                        <a href="#">Cookies</a>
                    </li>
                    <li>
                        <a href="#">Personvern</a>
                    </li>
                </ul>
                <ul className="flex flex-col">
                    <h2 className="text-2xl">Kontakt</h2>
                    <li>
                        <a href="#">Kontakt</a>
                    </li>
                    <li>
                        <a href="#">Sosialt</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
