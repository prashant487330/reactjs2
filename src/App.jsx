import { useState } from "react";
import axios from "axios";
const App=()=>{
    
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