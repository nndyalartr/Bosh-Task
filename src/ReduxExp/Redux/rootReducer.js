import { combineReducers } from "redux";
import { MessageReducer } from "./Message/Message.reducer";
import { Counterreducer } from "./Message/Counter.reducer";
let rootReducer = combineReducers({counter:Counterreducer, msg:MessageReducer})
export {rootReducer} 