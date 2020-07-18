import React, { Component } from 'react';
import uuid from 'uuid-random';

import '../styles/ContactForm.css';

class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state = {
                contactId: props.contact ? props.contact.contactId : uuid(),
                name: props.contact ? props.contact.name : '',
                about: props.contact ? props.contact.about : '',
                error: '',
                isSubmit: true,
                isEditEnabled: !!props.contact
        };
    };

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({name}))
    }

    validateName = () => {
        if(!this.state.name | this.state.name.length < 3)
        {
            return this.setState({error: 'Please enter valid name'})
        }

        this.setState({error: '', isSubmit: false})
    }

    // validateAbout = () => {
    //     if(!this.state.about | this.state.about.length < 10){
    //         return this.setState({aboutError: 'Please enter valid description with minimun 50 letters'})
    //     }

    //     this.setState({aboutError: ''})
    // }

    onAboutChange = (e) => {
        const about = e.target.value;
        this.setState(() => ({about}))
    }

    onAddContact = (e) => {
        e.preventDefault();
        this.props.addContact({
            contactId: this.state.contactId,
            name: this.state.name,
            about: this.state.about
        });
        this.setState({
            name: '',
            about: ''
        });
        if(!this.state.isEditEnabled){
            this.props.showForm();
        }
        
    }

    render(){
        return(
            <form onSubmit={this.onAddContact} className="contactForm">
                <div className="form-group m-2">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" 
                    value={this.state.name} 
                    onChange={this.onNameChange}
                    onBlur={this.validateName}
                    />
                </div>
                {
                    this.state.error && <div className="alert alert-danger m-2">{this.state.error}</div>
                }
                <div className="form-group m-2">
                    <label htmlFor="about">About</label>
                    <textarea className="form-control"
                    value={this.state.about}
                    onChange={this.onAboutChange}
                    onBlur={this.validateAbout}
                    ></textarea>
                </div>
                <button className="btn btn-primary m-2 mb-2"
                disabled={ this.state.isSubmit }
                >{ this.state.isEditEnabled ? 'Update Contact' : 'Add Contact'}</button>
            </form>
        )
    }
}

export default ContactForm;