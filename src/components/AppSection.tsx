import SectionHeading from "./SectionHeading";

function AppSection() {
    return (
        <section className="flex flex-col lg:flex-row gap-12 my-40 h-fit items-center max-w-screen-lg lg:mx-auto lg:p-5 mx-5">
            <SectionHeading
                title="Download our mobile apps"
                description="Our dedicated patient engagement app and web portal allow you to access information instantaneously 
                (no tedeous form, long calls, or administrative hassle) and securely"
            />
            <img src="/app.svg" alt="About Ilustration" width={600} />
        </section>
    )
}

export default AppSection;