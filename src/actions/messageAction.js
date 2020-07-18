const sendMessage = (id, message) => {
    return{
        type: 'SEND_MESSAGE',
        id,
        message
    }
};

export {sendMessage };