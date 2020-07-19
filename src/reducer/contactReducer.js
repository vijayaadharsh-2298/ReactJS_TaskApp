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
        // case 'SET_CONTACTS':
        //         if(state.map((c) => {
        //             return c.contactId !== action.contactId
        //         })){
        //             return [
        //                 ...state,
        //                 action.contacts
        //             ];
        //         }
        //         break;
        default:
            return state;
    };
};