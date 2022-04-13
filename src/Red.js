import store from "./ReduxExp/Redux/store"
import {Provider} from "react-redux"
import Message from "./ReduxExp/Message/Message"
import Counter from "./ReduxExp/Message/Counter"
let Red = ()=>{
    return <>
    
    <Provider store = {store}>
    <Counter/>
    <Message/>
    </Provider>
    
    </>
}
export default Red