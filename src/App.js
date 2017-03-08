import React, {Component} from 'react';
import Form from './Form';

class App extends Component {

    state = {
        name: '',
        email: ''
    }

    componentDidMount() {
        let name = localStorage.getItem('name');
        let email = localStorage.getItem('email');

        this.setState({
            name: name ? name : '',
            email: email ? email : ''
        })
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

    render() {
        return (
            <div>
                <Form name={this.state.name}
                      email={this.state.email}
                      onNameChange={e => this.handleNameChange(e)}
                      onEmailChange={e => this.handleEmailChange(e)}
                      onClear={() => this.clear()}/>
            </div>
        )
    }
}

export default App;
