import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from './ContactForm';
import { addContact } from '../actions/contactAction';

class AddContact extends Component {
    onsubmit = ({contactId, name, about}) => {
        this.props.addContact({contactId,name,about})
    }
    render(){
    return(
        <ContactForm addContact={this.onsubmit} showForm={this.props.showForm}/>
    )}
};

const mapDispatchToProps = (dispatch) => ({
    addContact: ({contactId, name, about}) => dispatch(addContact({contactId, name, about}))
})

export default connect(undefined, mapDispatchToProps)(AddContact);