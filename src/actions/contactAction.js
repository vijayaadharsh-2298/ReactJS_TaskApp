const contactStateAtDefault = {
    contactId: 0,
    name: '',
    about: ''
}

const addContact = ({contactId, name, about} = contactStateAtDefault) => {
    return{
        type: 'ADD_CONTACT',
        contact : {
            contactId,
            name,
            about
        }
    }
}

const removeContact = (id) => {
    return{
        type: 'REMOVE_CONTACT',
        id
    }
}

const editContact = (id, updates) => {
    return{
        type: 'EDIT_CONTACT',
        id,
        updates
    }
}

const setContacts = (contacts) => {
    return{
        type: 'SET_CONTACTS',
        contacts
    }
}

export { addContact, removeContact, editContact, setContacts }