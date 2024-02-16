import Navbar from "../components/shared/Navigation";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router-dom";
import PhoneNavigation from "@/components/shared/PhoneNavigation";
import Shadow from "@/components/shared/Shadow";
const RootLayout = () => {
    return (
        <div className="w-full">
            <Shadow />
            <Navbar />

            <section>
                <Outlet />
            </section>

            <Footer />
            <PhoneNavigation />
        </div>
    );
};

export default RootLayout;
