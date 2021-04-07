import State from '../States/State'


const ValReducer = (state=State,action) =>{
    switch(action.type){
        case "ADDVAL":
            console.log("Value Added");
            state = {...state,oldValue:state.oldValue+action.payload}
            break
        case "DELVAL":
            console.log("Value Deleted")
            break;
        default:
            break;
    }
    return state
}
export default ValReducer