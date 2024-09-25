import SectionHeading from "./SectionHeading";

function AboutSection() {
    return (
        <section className="flex flex-col lg:flex-row gap-12 my-24 h-fit items-center max-w-screen-lg lg:mx-auto lg:p-5 mx-5">
            <img src="/about.svg" alt="About Ilustration" width={600} />
            <SectionHeading
                title="Leading healthcare providers"
                description="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. 
                To us, it’s not just work. We take pride in the solutions we deliver"
            />
        </section>
    )
}

export default AboutSection;
