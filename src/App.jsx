// redux toolkit----
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./counterSlice";
const App=()=>{
    const mycount=useSelector(state=>state.mycounter.count);
    const dispatch=useDispatch();
    return(
        <>
        <h1>Welcome to my App</h1>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <h1>Count:{mycount}</h1>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        </>
    )
}
export default App;