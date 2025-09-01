// color change program using redux toolkit---
import { useSelector,useDispatch } from "react-redux";
import { colorChange } from "./colorSlice";
import { useState } from "react";
const App=()=>{
    const [txtval,setTxtVal]=useState("")
    const ourcolor=useSelector(state=>state.mycolor.color);
    const dispatch=useDispatch();
    return(
        <>

        
        <h1>Welcome to my App</h1>
        Enter Color: <input type="text" onChange={(e)=>{setTxtVal(e.target.value)}} />
        <br />
        <button onClick={()=>{dispatch(colorChange(txtval))}}>Change</button>
        <div style={{width:"500px",height:"300px",backgroundColor:ourcolor}}>

        </div>
        </>
    )
}
export default App;