import {useDispatch,useSelector} from "react-redux"
import {incrAction, decrAction} from "../Redux/Message/Counter.action"
let Counter = ()=>{
    let counter = useSelector((state) => {
        return state.counter;
    })
    let dispatch = useDispatch();
    let incrHandler=()=>{
        dispatch(incrAction())
    }
    let decrHandler = ()=>{
        dispatch(decrAction())
    }
    return <>
    <pre>{JSON.stringify(Counter)}</pre>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h3>Counter :{counter.counter} </h3>
                <button className="btn btn-warning mr-5" onClick={decrHandler}>Decr</button>
                <button className="btn btn-primary" onClick={incrHandler}>Incr</button>

            </div>
        </div>
    </div>
    </>
}
export default Counter