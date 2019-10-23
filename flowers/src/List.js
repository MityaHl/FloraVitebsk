import React, {Component} from 'react';
import axios from 'axios';
import OneOrder from './OneOrder';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: [], 
            isResolve: false
        }

        this.promiseRequests = this.promiseRequests.bind(this);
        this.showPosts = this.showPosts.bind(this);
    }

    promiseRequests() {
        let countQuery = 0;
        return new Promise( resolve => {
            axios
                .get('https://flora-vitebsk.herokuapp.com/getOrders')
                .then(response => {
                    countQuery++;
                    this.setState({
                        orders: response.data
                    });
                    if(countQuery == 1) resolve();
                });
        })
    }

    componentWillMount() {
        this.promiseRequests()
            .then(() => {
                this.setState({
                    isResolve: true
                });
            })
    }

    showPosts() {
        return(
            this.state.orders.map((order, index) => (
                <OneOrder order={order}/>
            ))
        )
    }


    render() {
        return(
            <div>
                <div className="search container">
                    <div className="row  justify-content-around">
                        <input className="form-control col-9" type="text" placeholder="Номер телефона заказчика"/>
                        <button type="button" className="btn btn-warning col-2">Найти</button>
                    </div>
                </div>
                 <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr className="text-center">
                            <th>
                                Дата
                            </th>
                            <th>
                                Время
                            </th>
                            <th>
                                Заказ
                            </th>
                            <th>
                                Сумма
                            </th>
                            <th>
                                Заказчик
                            </th>
                            <th>
                                Телефон заказчика
                            </th>
                            <th>
                                Получатель
                            </th>
                            <th>
                                Телефон получателя
                            </th>
                            <th>
                                Адрес
                            </th>
                            <th>
                                Оплаты
                            </th>
                            <th>
                                Примечания
                            </th>
                            <th>
                                Изменение
                            </th>
                            <th>
                                Удаление
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.showPosts()
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List;