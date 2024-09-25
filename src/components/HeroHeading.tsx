

function HeroHeading() {
    return (
        <section className="flex flex-col gap-5 h-full w-full lg:w-1/4 items-center text-center lg:items-start lg:text-start self-center">
            <h1 className="text-4xl font-extrabold">
                Virtual healthcare for you
            </h1>
            <p>
                Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
            </p>
            <button className="rounded-full border border-transparent bg-blue-400 w-fit py-3 px-7 text-white font-bold hover:text-blue-400 hover:border-blue-400 hover:border hover:bg-white transition">
                Consult Today
            </button>
        </section>
    )
}

export default HeroHeading;
