import { useState } from "react";
import axios from "axios";
const App=()=>{
    const[image,setImage]=useState("")
    const handleInputImage=(e)=>{
        setImage(e.target.files[0])
    }
    const handleSubmit=async()=>{
        const formData=new FormData();
        formData.append("file",image);
        formData.append("upload_preset","Prashant patel");
        const response=await axios.post("https://api.cloudinary.com/v1_1/dinqyeur3/image/upload",formData);
        console.log(response.data);
        console.log(response.data.url);
        document.getElementById("myimg").src=response.data.url;
    }
    return(
        <>
        <h1>Upload Image</h1>
        Upload Img: <input type="file" onChange={handleInputImage} />
        <button onClick={handleSubmit}>Upload</button>
        <img src="" id="myimg" />
        </>
    )
}
export default App;