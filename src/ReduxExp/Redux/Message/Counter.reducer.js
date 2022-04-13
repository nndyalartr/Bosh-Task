import {INCR, DECR} from "./Counter.action"
let initialvalue ={
    counter:0
}
let Counterreducer =(state=initialvalue,action)=>{
    switch(action.type){
        case INCR:
            return {counter: state.counter + 1}
        case DECR:
            return{counter:state.counter - 1}
        default:
            return state
    }
}
export {Counterreducer}