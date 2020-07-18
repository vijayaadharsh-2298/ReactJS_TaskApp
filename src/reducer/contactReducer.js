const defaultStateOfContact = []

export default (state = defaultStateOfContact, action ) => {
    switch(action.type){
        case 'ADD_CONTACT':
            return[
                ...state,
                action.contact
            ]
        case 'REMOVE_CONTACT':
            return state.filter((contact) => contact.contactId !== action.id);
        case 'EDIT_CONTACT':
            return state.map((contact) => {
                if(contact.contactId === action.id){
                    return{
                        ...contact,
                        ...action.updates
                    };
                }else{
                    return contact
                };
            });
        case 'SET_CONTACTS':
            return [
                ...state,
                action.contacts
            ];
        // case 'SEND_MESSAGE':
        //     return state.map((contact) => {
        //         if(contact.contactId === action.id){
        //             return{
        //                 ...contact,
        //                 messages: [
        //                     ...contact.messages,
        //                     action.message
        //                 ]
        //             }
        //         }else{
        //             return null
        //         }
        //     })
        default:
            return state;
    };
};