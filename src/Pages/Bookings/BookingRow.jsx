import PropTypes from "prop-types";
import { RxCross1 } from "react-icons/rx";

const BookingRow = ({ booking, handleDelete }) => {

    const { _id, img, date, service, price } = booking;


    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle"><RxCross1 /></button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle h-16 w-16">
                        <img src={img} alt="img" />
                    </div>
                </div>
            </td>
            <td>{service}</td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;

BookingRow.propTypes = {
    booking: PropTypes.object,
    handleDelete: PropTypes.func
}