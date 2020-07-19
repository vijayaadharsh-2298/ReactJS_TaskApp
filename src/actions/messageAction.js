const sendMessage = (id, message) => {
    return{
        type: 'SEND_MESSAGE',
        id,
        message
    }
};

 const setMessage = (message) => {
     return{
         type: 'SET_MESSAGE',
         message
     }
 }

export {sendMessage, setMessage };