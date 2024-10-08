import ServiceCard from "./ServiceCard";
import useServices from "../../hooks/useServices";

const Services = () => {

    const services = useServices();

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl text-orange-600">Our Services</h3>
                <h3 className="text-5xl">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;