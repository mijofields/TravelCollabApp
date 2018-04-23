import React, { Component } from 'react';


// import '../css/ExpenseItem.css';
import Checkout from './Checkout';


export default class ExpenseItem extends React.Component {
    render() {

        

        return (
            <div className="Expense-item mdl-cell mdl-cell--4-col mdl-card mdl-shadow--4dp">
                <div className="mdl-card__title">
                    <li>amount owed $: {this.props.amount}</li>
                    <li>to user with ID: {this.props.owedTo}</li>

                    {/* <Checkout
                        name={'Pay back user ' + this.props.owedTo}
                        description={'Paying back a friend for: ' + this.props}
                        amount={this.props.amount * 100}
                    /> */}
                    <Checkout
                        name={'The Road to learn React'}
                        description={'Only the Book'}
                        amount={1}
                    />


                    

                </div>
            </div>
        )
    }
}