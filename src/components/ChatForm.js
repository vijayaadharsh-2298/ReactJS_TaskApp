import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/ChatForm.css';
import { sendMessage } from '../actions/messageAction';

class ChatForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            contactId: this.props.contact ? this.props.contact.contactId : '',
            name: this.props.contact ? this.props.contact.name : '',
            to: '',
            message: ''
        }
    }
    onRecieverChange = (e) => {
        console.log('Hi')
        console.log(e.target.value)
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.sendMessage({senderId: this.state.contactId, to: this.state.to, message: this.state.message});
        this.props.history.push("/");
    }
    render(){
        return(
            <div className="chatForm">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group m-4">
                        <label>From: {this.state.name}</label>
                    </div>
                    <div className="form-group m-4">
                        <input className="form-control" placeholder="To"
                        value={this.state.to} onChange={(e)=>this.setState({to: e.target.value})} /> 
                    </div>
                    <div className="form-group m-4">
                        <textarea className="form-control" placeholder="Message"
                        value={this.state.message} onChange={(e)=>this.setState({message: e.target.value})}></textarea> 
                    </div>
                    <button className="btn btn-success m-4">Send</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        contactFullInfo: state.contacts,
        contact: state.contacts.find((c) => c.contactId.toString() === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: (id, message) => dispatch(sendMessage(id, message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatForm);