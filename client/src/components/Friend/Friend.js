import React, {Component} from 'react';
import axios from 'axios';


class Friend extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: ''
        }
    }

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    handleSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        axios({
            url: "/user/" + username,
            method: "POST"            
        })
        .then((response) => {
            this.setState({ 
                username: ''
            })         
            console.log("Response: ", response.data); 
            document.getElementById('foo').reset();            
        })
        .catch((err) => {            
            console.log("Error Find Friend: ", err.response.data);            
        });
      
    };

    render(){
        return (

            <div className="text-center">
                <h1 className="h3 mb-3 font-weight-normal">Find Friend</h1>

                    <form className="form-signin" onSubmit={this.handleSubmit} id="foo">

                        <label htmlFor="find-friend" className="sr-only">Find Friend:</label>
                            <input 
                                type="text" 
                                placeholder="username"  
                                className="form-control" 
                                name="username"
                                value={this.state.value} 
                                onChange={this.handleChange} />          

                    <input className="btn btn-lg btn-primary btn-block" type="submit" value="Find Friend" />
                </form>
                </div>


        );
    }
}

export default Friend;








  



