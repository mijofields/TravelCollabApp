import React from 'react';
// import '../css/ExpenseItem.css';
import Checkout from './Checkout';


export default class Expense extends React.Component {
    
    render() {

        return (
            
            <tr>
                <td className="mdl-data-table__cell--non-numeric">{this.props.expense}</td>
                <td>${this.props.total}</td>
                <td>${this.props.amount}</td>
                <td><Checkout
                        name={this.props.expense}
                        description={'Settle Up'}
                        amount={this.props.amount * 100}
                    /> </td>
            </tr>
        )
    }
}