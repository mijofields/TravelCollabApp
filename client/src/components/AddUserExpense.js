import React, { Component } from 'react';




export default class AddUserExpense extends React.Component {

    //need constructor to handle the data being passed in from this form 
    constructor(props) {
        super(props)

        this.state = {
            
        }
        this.handleChange = this.handleChange.bind(this)
    } 

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    

    render() {



        return (

            <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">
                    <i class="material-icons  mdl-list__item-avatar">person</i>user id: {this.props.friend}</span>
                <span class="mdl-list__item-secondary-action">
                    <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="list-switch-1">
                        <input type="checkbox" id="list-switch-1" class="mdl-switch__input" />
                    </label>
                    {/* amount entry */}
                    <div class="form-group">
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input"
                                type="text"
                                name="username"
                                onChange={this.handleChange} />
                            <label className="mdl-textfield__label" htmlFor="username">their</label>
                        </div>
                    </div>

                </span>


            </li>
        )
    }
}