import React, {Component} from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';
import Multiselect from 'react-widgets/lib/Multiselect';
import axios from 'axios';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: {}, 
            isResolve: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.promiseRequests = this.promiseRequests.bind(this);
    }

    promiseRequests() {
        let countQuery = 0;
        return new Promise( resolve => {
            axios
                .get('')
                .then(response => {
                    countQuery++;
                    this.setState({
                        posts: response.data
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

    saveChanges() {
        axios
            .post('', this.state.order)
    }

    handleChange(e){
        this.setState({
            orderData: {
                ...this.state.orderData,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.orderData);
    }

    render() {
        return(
            <div className="create container">
                <form onSubmit={this.handleSubmit}>
                            
                            <div className="form-group">    
                                <h5>Дата доставки:</h5>
                                <input type="date" className="form-control" name="date" value={this.state.orderData.date} onChange={this.handleChange}/>
                            </div>

                            <div className="form-group">
                                <h5>Время доставки (от/до):</h5>
                                <div className="form-row">  
                                    <input type="time" className="form-control col-2 ml-5px"/>
                                    <input type="time" className="form-control col-2 ml-5px"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <h5>Заказ :</h5>
                                <Multiselect
                                    data={['букет1', 'букет2', 'роза']}
                                />
                            </div>

                            <div className="form-group">
                                <h5>Сумма заказа:</h5>
                                <input type="text" className="form-control" placeholder="Сумма заказа" name="cost" value={this.state.orderData.cost} onChange={this.handleChange}/>
                            </div>

                            <div className="form-group">
                                <h5>Имя заказчика:</h5>
                                <input type="text" className="form-control" placeholder="Имя заказчика" name="customerName" value={this.state.orderData.customerName} onChange={this.handleChange}/>
                            </div>

                            <div className="form-group">
                                <h5>Номер телефона заказчика:</h5>
                                <input type="text" className="form-control" name="customerNumber" value={this.state.orderData.customerNumber} onChange={this.handleChange}/>
                            </div>

                            <div className="form-group">
                                <h5>Имя получателя:</h5>
                                <input type="text" className="form-control" placeholder="Имя получателя" name="recipientName" value={this.state.orderData.recipientName} onChange={this.handleChange}/>
                            </div>

                            <div className="form-group">
                                <h5>Номер телефона получателя:</h5>
                                <input type="text" className="form-control" name="recipientNumber" value={this.state.orderData.recipientNumber} onChange={this.handleChange}/>
                            </div>
                            
                            <div className="form-group">
                                <h5>Адрес получателя: </h5>
                                <DropdownList filter data={['Чапаева', 'Смоленская']} placeholder={"Улица"}/>
                                <br/>
                                <div className="form-flex-spb ml-5px form-row">
                                    <input className="form-control col-2 ml-5px pl-10px" name="title" type="text" placeholder="Дом"/>                                 
                                    <input className="form-control col-2 ml-5px pl-10px" name="title" type="text" placeholder="Подъезд"/>
                                    <input className="form-control col-2 ml-5px pl-10px" name="title" type="text" placeholder="Этаж"/>                   
                                    <input className="form-control col-2 ml-5px pl-10px" name="title" type="text" placeholder="Квартира"/>                             
                                </div>
                            </div>

                            <div className="form-group">
                            <h5>Способ оплаты: </h5>
                                <DropdownList filter data={['Карта', 'Наличные']}/>                                
                            </div>

                            <div className="form-group">
                                <h5 htmlFor="name">Примечание:</h5>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="note"  value={this.state.orderData.note} onChange={this.handleChange}></textarea>
                            </div>
                            <div className="create-button">
                                <button className="btn btn-primary">Создать</button>
                            </div>
                        </form>
            </div>
        )
    }
}

export default Edit;