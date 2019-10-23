import React, {Component} from 'react';
import {Link} from "react-router-dom";

class OneOrder extends Component{

    constructor(props) {
        super(props);
    }

  render() {
    return (
        <tr className="text-center">
            <td>
                {this.props.order.date}
            </td>
            <td className="text-center">
                {this.props.order.time}
            </td>
            <td className="text-center">
                {this.props.order.orderList}
            </td>
            <td className="text-center">
                {this.props.order.orderPrice}
            </td>
            <td className="text-center">
                {this.props.order.customer}
            </td>
            <td className="text-center">
                {this.props.order.customerNumber}
            </td>
            <td className="text-center">
                {this.props.order.receiver}
            </td>
            <td className="text-center">
                {this.props.order.receiverNumber}
            </td>
            <td className="text-center">
                {this.props.order.address}
            </td>
            <td className="text-center">
                {this.props.order.paymentMethod}
            </td>
            <td className="text-center">
                {this.props.order.notes}
            </td>
            <td className="text-center">
                <Link to={'/edit/' + 1}>
                    <i className="fas fa-edit"></i>
                </Link>
            </td>
            <td className="text-center">
                <i className="fas fa-trash-alt"></i>
            </td>
        </tr>
      )
    }
}

export default OneOrder;
