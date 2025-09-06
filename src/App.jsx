import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {addTask,taskDelete,taskComplete,taskInComplete} from "./todoSlice";
const App=()=>{
    const[txtval,setTxtVal]=useState("");
    const myTask=useSelector(state=>state.mytodo.task);
    const dispatch=useDispatch();
    console.log(myTask);

    let sno=0;
    const ans=myTask.map((key)=>{
      sno++;
      return(
        <>
        <tr>
            <td>{sno}</td>
            <td>
                {key.status ?(<>
                <span style={{color:"red",textDecoration:"line-through"}}>{key.work}</span>
                </>):(<>
                {key.work}
                </>)}
            </td>
            <td>
                <button onClick={()=>{dispatch(taskDelete({id:key.id}))}}>Delete</button>
            </td>
            <td>
                <button onClick={()=>{dispatch(taskComplete({id:key.id}))}}>Complete</button>
            </td>
            <td>
                <button onClick={()=>{dispatch(taskInComplete({id:key.id}))}}>InComplete</button>
            </td>
        </tr>
        </>
      )
    })
    return(
        <>
        <h1>TO DO APP:-</h1>
        <hr />
        Enter Your Task : <input type="text" value={txtval} onChange={(e)=>{setTxtVal(e.target.value)}} />
        <button onClick={()=>{dispatch(addTask({id:Date.now(),work:txtval,status:false}))}}>Add Task</button>
        <hr />
        <table>
            <tr>
                <th>Sno.</th>
                <th>Your task</th>
                <th></th>
                <th></th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default App;