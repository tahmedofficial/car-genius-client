import PropTypes from "prop-types";

const BookingRow = ({ booking }) => {

    const { img, date, service, price } = booking;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
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
    booking: PropTypes.object
}