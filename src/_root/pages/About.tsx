import barbershop from "../../assets/images/barbershop_long.webp";
import barbershopCompact from "../../assets/images/barbershop_compact.webp";

const About = () => {
    return (
        <div className="mx-[6vw]">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <img
                    src={barbershop}
                    alt="barbershop"
                    className="w-[100%] md:w-[50%] hidden lg:block rounded-md"
                />
                <img
                    src={barbershopCompact}
                    alt="barbershop"
                    className="w-[100%] md:w-[50%] block lg:hidden rounded-md"
                />
                <div>
                    <h2 className="text-4xl w-[100%] md:w-[50%]">Tittel</h2>
                    <p className="text-1xl">
                        Lucky Barber, Porsgrunns nyeste tilskudd til
                        barbersalonger, åpner dørene med løfte om kvalitet og
                        stil. Med et team av erfarne frisører tilbyr vi moderne
                        hårklipp og grooming for menn. Vårt mål er å gi hver
                        kunde en unik opplevelse og skreddersydd stil. Besøk oss
                        i hjertet av Porsgrunn for en oppfriskende ny look!
                        Velkommen til Lucky Barber – hvor tradisjon møter trend.
                        <br />
                        <br />
                        Lucky Barber, Porsgrunns nyeste tilskudd til
                        barbersalonger, åpner dørene med løfte om kvalitet og
                        stil. Med et team av erfarne frisører tilbyr vi moderne
                        hårklipp og grooming for menn. Vårt mål er å gi hver
                        kunde en unik opplevelse og skreddersydd stil. Besøk oss
                        i hjertet av Porsgrunn for en oppfriskende ny look!
                        Velkommen til Lucky Barber – hvor tradisjon møter trend.
                    </p>
                </div>
            </div>
            <div className="bg-secondary p-5 rounded-md flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mt-[100px] md:mt-[80px]">
                <div>
                    <h2 className="text-6xl">FINN OSS HER</h2>
                    <h3 className="text-xl">Storgata 134, 3915 PORSGRUNN</h3>
                </div>

                <iframe
                    className="w-[100%] md:w-[50%]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2046.5578776289226!2d9.650438977819565!3d59.13979672617681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464721889cd7ae93%3A0x6a5f605a20590364!2sLucky%20Barber%20Porsgrunn!5e0!3m2!1sen!2sno!4v1704208749074!5m2!1sen!2sno"
                    height="300"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default About;
