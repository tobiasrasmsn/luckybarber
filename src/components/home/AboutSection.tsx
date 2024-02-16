import { Button } from "../ui/button";

import { aboutText } from "@/constants";
import { Separator } from "../ui/separator";
const AboutSection = () => {
    return (
        <section className="relative mt-20 flex flex-row justify-between items-start gap-8 h-[100%] lg:h-[500px] mx-8 md:mx-[7vw]">
            <div className="relative flex flex-col w-[100%] lg:w-[50%] h-[100%]">
                <h2 className="text-5xl md:text-7xl mb-4 whitespace-nowrap">
                    Hvor Kvalitet <br /> Møter Komfort
                </h2>
                <p className="w-[100%] lg:w-[488px] mb-8">{aboutText}</p>
                <Separator className="w-[100%] h-[2px] lg:w-[488px] rounded-sm mb-4 lg:mb-0 bg-[#1C1713]" />

                <div className="mt-auto flex flex-col justify-between gap-3 w-[100%] lg:w-[488px]">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row justify-start items-center gap-3">
                            <h2 className="text-5xl">17</h2>
                            <p>År med erfaring</p>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-3">
                            <h2 className="text-5xl">542</h2>
                            <p>Fornøyde kunder</p>
                        </div>
                    </div>
                    <Button className="w-[100%] lg:w-[488px] text-lg h-14 hover:bg-[#659EAA] hover:text-background">
                        Bestill time
                    </Button>
                </div>
            </div>
            <div className="bg-barberer bg-cover w-[35%] lgplus:w-[50%] h-[500px] rounded-2xl hidden lg:block" />
        </section>
    );
};

export default AboutSection;
