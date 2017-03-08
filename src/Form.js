import React, {Component} from 'react';
import './Form.css';

class Form extends Component {

    static state = {
        name: '',
        email: ''
    }

    handleNameChange(e) {
        let newValue = e.target.value
        localStorage.setItem('name', newValue)
        this.setState({
            name: newValue
        })
    }

    handleEmailChange(e) {
        let newValue = e.target.value
        localStorage.setItem('email', newValue)
        this.setState({
            email: newValue
        })
    }

    clear() {
        localStorage.clear()
        this.setState({
            name: '',
            email: ''
        })
    }

    loadData(key) {
        return localStorage.getItem(key)
    }

    render() {
        return (
            <form action="/my-handling-form-page" method="post">
                <div>
                    <label>Name:</label>
                    <input type="text" id="name" name="user_name" value={this.loadData('name') ? this.loadData('name') : ''} onChange={e => this.handleNameChange(e)}/>
                </div>
                <div>
                    <label>E-mail:</label>
                    <input type="email" id="mail" name="user_mail" value={this.loadData('email') ? this.loadData('email') : ''} onChange={e => this.handleEmailChange(e)}/>
                </div>
                <div className="button">
                    <button type="submit">Send your message</button>
                    <button onClick={() => this.clear()}>Clear</button>
                </div>
            </form>
        )
    }
}

export default Form;