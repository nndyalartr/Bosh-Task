
import {GmAction, GnAction} from "../Redux/Message/Message.action"
import {useDispatch, useSelector}  from "react-redux"
import './sty.css'
let Message=()=> {
    let dispatch = useDispatch();
    let message = useSelector((state)=>{
      return state.msg
    })
  
    
    let gmHandler=()=>{
        dispatch(GmAction());
    }
    let gnHandler=()=>{
        dispatch(GnAction());
    }
  return <div className="try">
    <h5>welcome message is : {message.msg}</h5>
    <button onClick={gmHandler}>Good Mrng</button>
    <button onClick={gnHandler}> good nyt</button>
  </div>;
}

export default Message;
