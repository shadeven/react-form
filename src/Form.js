import React, {Component} from 'react';
import './Form.css';

class Form extends Component {

    render() {
        return (
            <form action="/my-handling-form-page" method="post">
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" type="text" id="name" value={this.props.name} onChange={this.props.onNameChange}/>
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input className="form-control" type="email" id="mail" value={this.props.email} onChange={this.props.onEmailChange}/>
                </div>
                <button className="btn btn-default" type="submit">Send your message</button>
                <button className="btn btn-default" onClick={this.props.onClear}>Clear</button>
            </form>
        )
    }
}

export default Form;