  import { useState } from "react"
  import React from 'react'
  import copy from 'copy-to-clipboard';



  export default function Textform(props) {
  const handleupperClick=()=>{

  let newtext=text.toUpperCase();
  setText(newtext);
  props.showAlert("Converted to Upper case","success")
  }
  const handlelowerClick=()=>{

  let newtext=text.toLowerCase();
  setText(newtext);
  props.showAlert("Converted to Lower case","success")
  }
  const handleclearClick=()=>{

  let newtext="";
  setText(newtext);
  props.showAlert("Cleared","success")
  }
  const copyToClipboard = () => {
  copy(text);
  props.showAlert("Copied to clipboard","success")

  }
  const handleChange=(e)=>{

  setText(e.target.value);
  }

  const [text, setText] = useState("");
  return (

  <div className="container"   style={{color: props.mode==='dark'?'white':'black' }}>
  <div className="container">
  <h1>Enter your text</h1>
  <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} id="myBox" rows="3" value={text} onChange={handleChange}></textarea>
        <button className="btn btn-success my-2 mx-2" onClick={handleclearClick}>Clear</button>
  <button className="btn btn-success my-3 mx-2" onClick={handleupperClick}>Convert to uppercase</button>
  <button className="btn btn-success my-3 mx-2" onClick={handlelowerClick}>Convert to lowerrcase</button>
  <button className="btn btn-success my-3 mx-2" onClick={copyToClipboard}>Copy to clipboard</button>
 

  </div>
    </div>
    <div className="container" >
      <h3>Your text summary</h3>
      <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
      <p>
    Minutes read <b>{0.008*text.split(" ").length}</b>
      </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter text to preview"}</p>
      </div>

    </div>
  )
  }
