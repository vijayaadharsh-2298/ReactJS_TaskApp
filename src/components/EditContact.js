import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editContact } from '../actions/contactAction';
import ContactForm from '../components/ContactForm';

class EditContact extends Component {
    editContact = ({contactId, name, about}) => {
        this.props.editContact(contactId, {name , about});
        this.props.history.push("/")
    }
    render(){
        return(
            <div>
                <ContactForm contact={this.props.contact} addContact={this.editContact}/>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    contact: state.contacts.find((contact) => contact.contactId.toString() === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    editContact: (id, updates) => dispatch(editContact(id, updates))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);