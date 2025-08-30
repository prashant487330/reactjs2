import { useSelector,useDispatch } from "react-redux";
import { colorChange } from "./colorSlice";
const App=()=>{
    const ourcolor=useSelector(state=>state.mycolor.color);
    const dispatch=useDispatch();
    return(
        <>
        <h1>Welcome to my App</h1>
        <button onClick={()=>{dispatch(colorChange())}}>Change</button>
        <div style={{width:"500px",height:"300px",backgroundColor:ourcolor}}>

        </div>
        </>
    )
}
export default App;