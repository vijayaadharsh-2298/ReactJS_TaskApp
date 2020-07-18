import React, { useState } from 'react';
import { connect } from 'react-redux';

import '../styles/ContactsDashboard.css';

import ContactList from './ContactList';
import AddContact from './AddContact';
import { setContacts } from '../actions/contactAction';

const ContactDashboard = (props) => {
    const [form, setFormValue] = useState(false);

    const displayForm = () => {
        setFormValue(!form);
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-xs-4">
                    <div className="m-2 dashboard">
                    {   props.contacts.length > 0 ?
                        <div>
                        {
                                props.contacts.map((c) => (
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
                        form &&             
                        <div>
                            <AddContact showForm={displayForm}/>
                        </div>
                    }
                    </div>
                </div>
                <div className="col-xs-4">
                {
                    !form  && 
                    <button className="btn btn-success m-2 float-right" 
                    onClick={displayForm}
                    >Add Contact</button>
                }
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setContacts: (contacts) => dispatch(setContacts(contacts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDashboard);