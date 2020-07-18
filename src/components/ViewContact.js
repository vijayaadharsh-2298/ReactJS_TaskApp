import React from 'react';
import { connect } from 'react-redux';

import '../styles/ViewContact.css';

const ViewContact = (props) => {
    const onClick = (e) => {
        props.history.push("/");
    }
    return(
        <div>
            <div className="card m-2">
                    <div className="card-header bg-secondary">Below listed details of contact - {props.contact.contactId}</div>
                    <div className="card-body bg-light">
                        <div>
                            <label className="m-2">Name:</label>
                            {props.contact.name}
                        </div>
                        <div>
                            <label className="m-2">About:</label> 
                            {props.contact.about}
                        </div>
                    </div>
            </div>
            <h4 className="container">Sent Messages</h4>
            <br />
            {
                props.message.map((msg) => {
                    if(msg !== undefined){
                        if(msg.senderId.toString() === props.match.params.id)
                        {
                            return(
                                <div key={msg.senderId + "i"} className="container">
                                    <div className="card">
                                        <div className="card-body">
                                        <label>To: {msg.to}</label>
                                        <p>Message: {msg.message}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                            // console.log('Sender', msg.senderId);
                            // console.log('To: ', msg.to)
                            // console.log('Message: ', msg.message)
                        } else return null;
                    }else return null;
                })
            }
            <button className="btn btn-primary float-right m-4" onClick={onClick}>Okay</button>
        </div>
    )
};

const mapStateToProps = (state, props) => {
    return{
        contact: state.contacts.find((c) => c.contactId.toString() === props.match.params.id),
        message: state.messages
    }
};

export default connect(mapStateToProps)(ViewContact);