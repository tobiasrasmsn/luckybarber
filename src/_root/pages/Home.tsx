import AboutSection from "@/components/home/AboutSection";
import BarbersSection from "@/components/home/BarbersSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

import barbershop_long from "../../assets/images/barbershop_long.webp";
import barbershop_compact from "../../assets/images/barbershop_compact.webp";

const Home = () => {
    return (
        <div
            className="bg-background dark 
        "
        >
            <div className="mx-8 md:mx-[7vw]">
                <img
                    src={barbershop_compact}
                    alt="Lucky Barber fra innsiden"
                    className="md:hidden block rounded-2xl w-[100%]"
                />
                <img
                    src={barbershop_long}
                    alt="Lucky Barber fra innsiden"
                    className="md:block hidden rounded-2xl w-[100%] mt-14"
                />
            </div>

            <AboutSection />
            <TestimonialsSection />
            <BarbersSection />
        </div>
    );
};

export default Home;
