import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/ContactsDashboard.css';

import ContactList from './ContactList';
import AddContact from './AddContact';
import { setContacts } from '../actions/contactAction';
import globalStore from '../store/globalStore';
import { setMessage } from '../actions/messageAction';

class ContactDashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            form: false
        }
    };

    store = globalStore();

    displayForm = () => {
        this.setState({
            form: this.state.form ? false : true
        })
    }

    render(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-xs-4">
                    <div className="m-2 dashboard">
                    {   this.props.contacts.length > 0 ?
                        <div>
                        {
                                this.props.contacts.map((c) => (
                                <div key={c.contactId}>
                                    <ContactList contactId={c.contactId} name={c.name} about={c.about} />
                                </div>
                            ))
                        }
                        </div> :
                        <p>No Contacts to display</p>
                    }
                    </div>
                </div>    
                <div className="col-xs-4">
                    <div>
                    {
                        this.state.form &&             
                        <div>
                            <AddContact showForm={this.displayForm}/>
                        </div>
                    }
                    </div>
                </div>
                <div className="col-xs-4">
                {
                    !this.state.form  && 
                    <button className="btn btn-success m-2 float-right" 
                    onClick={this.displayForm}
                    >Add Contact</button>
                }
                </div>
            </div>
        </div>
    )}     
};

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
        messages: state.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setContacts: (contacts) => dispatch(setContacts(contacts)),
        setMessage: (message ) => dispatch(setMessage(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDashboard);