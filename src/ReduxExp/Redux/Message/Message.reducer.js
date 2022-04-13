import {GM, GN} from "./Message.action"
let initialMessage={
    msg : "Hellow Buddy....."
}
let MessageReducer = (state=initialMessage,action)=>{
    switch(action.type){
        case GM:
            return{msg:"hellow good morning"}
        case GN:
            return{msg:"hellow gud night"}
        default:
            return state
    }
}
export {MessageReducer} 
