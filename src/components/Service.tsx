import { serviceItems } from "../data/DATA";
import ServiceItem from "./ServiceItem";

function Service() {
    return (
        <section className="flex justify-center h-fit flex-col gap-12 mt-24">
            <div className="flex flex-col self-center max-w-xl items-center gap-3">
                <h1 className="text-3xl font-bold">
                    Our Service
                </h1>
                <img src="/devider.svg" className="max-w-20" />
            </div>
            <p className="max-w-screen-lg self-center text-center mx-10 opacity-75">
                We provide to you the best choiches for you.
                Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors
                you can consult with us which type of service is suitable for your health
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl self-center sm:mx-32 md:mx-9 mx-4 justify-items-center gap-y-10">
                {serviceItems.map((item) => (
                    <ServiceItem key={item.title} {...item} />
                ))}
            </div>
        </section>
    )
}

export default Service;
