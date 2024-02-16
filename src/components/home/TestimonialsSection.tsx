import ScrollingText from "../shared/ScrollingText";
import freshCut from "../../assets/images/freshcut.webp";
import freshCut2 from "../../assets/images/freshcut2.webp";
import freshCut3 from "../../assets/images/freshcut3.webp";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
//806F61
const TestimonialsSection = () => {
    function detectDeviceType() {
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            return "Blad gjennom ved å dra med fingeren.";
        } else {
            return "Blad gjennom ved å dra med museknappen.";
        }
    }

    const instructionText = detectDeviceType();
    return (
        <div className="mx-8 md:mx-[7vw] mt-20">
            <div className="h-[100%] bg-secondary mt-14 pb-8 rounded-2xl">
                <div>
                    <ScrollingText
                        text=" Stol på resultat ~ Stol på resultat ~ "
                        speed={45}
                    />
                </div>
                <div className="px-5 my-6 ">
                    <Carousel className="cursor-grab">
                        <CarouselContent>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3 h-[370px]">
                                <div
                                    className="bg-red-100 h-[100%] w-[100%] bg-cover rounded-xl p-5 flex justify-between flex-col"
                                    style={{
                                        backgroundImage: `url(${freshCut})`,
                                    }}
                                >
                                    <div className="flex justify-between w-[100%]">
                                        <h2>Aleksander</h2>
                                        <h3>24 år</h3>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <div
                                    className="bg-red-100 h-[100%] w-[100%] bg-cover rounded-xl p-5 flex justify-between flex-col"
                                    style={{
                                        backgroundImage: `url(${freshCut2})`,
                                    }}
                                >
                                    {" "}
                                    <div className="flex justify-between w-[100%]">
                                        <h2>Aleksander</h2>
                                        <h3>24 år</h3>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <div
                                    className="bg-red-100 h-[100%] w-[100%] bg-cover rounded-xl p-5 flex justify-between flex-col"
                                    style={{
                                        backgroundImage: `url(${freshCut3})`,
                                    }}
                                >
                                    {" "}
                                    <div className="flex justify-between w-[100%]">
                                        <h2>Aleksander</h2>
                                        <h3>24 år</h3>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <div
                                    className="bg-red-100 h-[100%] w-[100%] bg-cover rounded-xl p-5 flex justify-between flex-col"
                                    style={{
                                        backgroundImage: `url(${freshCut})`,
                                    }}
                                >
                                    {" "}
                                    <div className="flex justify-between w-[100%]">
                                        <h2>Aleksander</h2>
                                        <h3>24 år</h3>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <div
                                    className="bg-red-100 h-[100%] w-[100%] bg-cover rounded-xl p-5 flex justify-between flex-col"
                                    style={{
                                        backgroundImage: `url(${freshCut})`,
                                    }}
                                >
                                    {" "}
                                    <div className="flex justify-between w-[100%]">
                                        <h2>Aleksander</h2>
                                        <h3>24 år</h3>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <div
                                    className="bg-red-100 h-[100%] w-[100%] bg-cover rounded-xl p-5 flex justify-between flex-col"
                                    style={{
                                        backgroundImage: `url(${freshCut})`,
                                    }}
                                >
                                    {" "}
                                    <div className="flex justify-between w-[100%]">
                                        <h2>Aleksander</h2>
                                        <h3>24 år</h3>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <div
                                    className="bg-red-100 h-[100%] w-[100%] bg-cover rounded-xl p-5 flex justify-between flex-col"
                                    style={{
                                        backgroundImage: `url(${freshCut})`,
                                    }}
                                >
                                    {" "}
                                    <div className="flex justify-between w-[100%]">
                                        <h2>Aleksander</h2>
                                        <h3>24 år</h3>
                                    </div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                    <p className="mt-2">{instructionText}</p>
                </div>
                {/* <div className="flex flex-row justify-between relative h-[100%] px-8 gap-8 mt-4">
                    <div className="bg-freshCut bg-cover w-[50%] lgplus:w-[40%] h-[400px] rounded-2xl hidden lg:block" />
                    <div className="w-[60%]">
                        <h2 className="text-2xl">Aleksander</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ea eligendi quis aliquam vero voluptatibus
                            fugiat nam provident iure ducimus, consequatur rerum
                            doloremque laudantium voluptatem repellendus. Eaque
                            nulla dolore aspernatur sint?
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default TestimonialsSection;
