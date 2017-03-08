import React, {Component} from 'react';
import './Form.css';

class Form extends Component {

    render() {
        return (
            <form action="/my-handling-form-page" method="post">
                <div>
                    <label>Name:</label>
                    <input type="text" id="name" value={this.props.name} onChange={this.props.onNameChange}/>
                </div>
                <div>
                    <label>E-mail:</label>
                    <input type="email" id="mail" value={this.props.email} onChange={this.props.onEmailChange}/>
                </div>
                <div className="button">
                    <button type="submit">Send your message</button>
                    <button onClick={this.props.onClear}>Clear</button>
                </div>
            </form>
        )
    }
}

export default Form;