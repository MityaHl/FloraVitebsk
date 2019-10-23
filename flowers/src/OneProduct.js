import React, {Component} from 'react';
import {Link} from "react-router-dom";

class OneProduct extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <tr>
                <td className="text-center product-name">
                {this.props.orderType.name}
            </td>
            <td className="text-center fa-product">
                <Link to={'/edit/' + 1}>
                    <i className="fas fa-edit"></i>
                </Link>
            </td>
            <td className="text-center fa-product">
                <i className="fas fa-trash-alt"></i>
            </td>
        </tr>
        )
    }

}

export default OneProduct;