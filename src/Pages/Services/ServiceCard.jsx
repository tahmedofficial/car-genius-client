import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between">
                    <p className="text-orange-500">Price: ${price}</p>
                    <div>
                        <Link to={`/checkout/${_id}`}>
                            <button className="text-orange-500 btn">Book Now<FaArrowRight /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object
}