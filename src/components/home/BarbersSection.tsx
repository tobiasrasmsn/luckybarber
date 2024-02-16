import React from "react";
import barber1 from "../../assets/images/barber1.webp";
import barber2 from "../../assets/images/barber2.webp";
import barber3 from "../../assets/images/barber3.webp";
import barber1_landscape from "../../assets/images/barber1_landscape.webp";
import barber2_landscape from "../../assets/images/barber2_landscape.webp";
import barber3_landscape from "../../assets/images/barber3_landscape.webp";
import { Separator } from "../ui/separator";
const BarbersSection = () => {
    return (
        <section className="mt-20 mx-8 md:mx-[7vw]">
            <h2 className="text-5xl md:text-7xl mb-6">Våre barberere</h2>
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="w-[100%] lg:w-[25vw]">
                    <img
                        src={barber2_landscape}
                        alt="Janas"
                        className="w-[100%] rounded-2xl lg:hidden block"
                    />
                    <img
                        src={barber2}
                        alt="Janas"
                        className="w-[100%] rounded-2xl lg:block hidden"
                    />
                    <div className="flex flex-row justify-between items-center w-100% mt-4">
                        <h3 className="text-2xl">Janas</h3>
                        <p className="text-primary-foreground decoration-primary underline">
                            4 år med saksa
                        </p>
                    </div>
                </div>
                <Separator className="w-[100%] h-[2px] lg:w-[488px] rounded-sm mb-4 lg:mb-0 bg-[#1C1713] block md:hidden" />
                <div className="w-[100%] lg:w-[25vw]">
                    <img
                        src={barber1_landscape}
                        alt="Karolina"
                        className="w-[100%] rounded-2xl lg:hidden block"
                    />
                    <img
                        src={barber1}
                        alt="Karolina"
                        className="w-[100%] rounded-2xl lg:block hidden"
                    />
                    <div className="flex flex-row justify-between items-center w-100% mt-4">
                        <h3 className="text-2xl">Karolina</h3>
                        <p className="text-primary-foreground decoration-primary underline">
                            8 år med saksa
                        </p>
                    </div>
                </div>
                <Separator className="w-[100%] h-[2px] lg:w-[488px] rounded-sm mb-4 lg:mb-0 bg-[#1C1713] block md:hidden" />
                <div className="w-[100%] lg:w-[25vw]">
                    <img
                        src={barber3_landscape}
                        alt="Henrik"
                        className="w-[100%] rounded-2xl lg:hidden block"
                    />
                    <img
                        src={barber3}
                        alt="Henrik"
                        className="w-[100%] rounded-2xl lg:block hidden"
                    />
                    <div className="flex flex-row justify-between items-center w-100% mt-4">
                        <h3 className="text-2xl">Henrik</h3>
                        <p className="text-primary-foreground decoration-primary underline">
                            5 år med saksa
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BarbersSection;
