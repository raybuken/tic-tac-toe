

export const optionReducer = (state = null, action) => {
    console.log(action)
    switch(action.type){
        case 'play':
            return 1;
        case 'about':
            return 2;
        default:
            return state
    }
}