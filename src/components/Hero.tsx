import HeroHeading from "./HeroHeading";

function Hero() {
    return (
        <section className="flex justify-center gap-16 lg:gap-40 h-fit p-10 md:p-36 flex-col lg:flex-row">
            <HeroHeading />
            <img
                src="/hero.svg"
                alt="Hero Ilustration"
                width={600}
                className="mx-auto lg:mx-0"
            />
        </section>
    )
}

export default Hero;
