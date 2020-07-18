const message = []

export default (state = message, action) => {
    switch(action.type){
        case 'SEND_MESSAGE':
            return [
                ...state,
                action.id,
                action.message
            ]
        default:
            return state;
    }
}