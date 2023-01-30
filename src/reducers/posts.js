
const reducer = (state=[],action) => { // state should be initialized always
    
    switch(action.type){
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...state,action.payload];
        default:
            return state;
    }
}
export default reducer;