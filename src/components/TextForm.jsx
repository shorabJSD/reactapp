import React, { useState } from 'react';

export default function TextForm(props){
    const [text, setText] = useState("Enter your text here");
    // console.log(text);
    // creating a function to make upperCase to lowerCase
    const handleToUppercase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has changed to uppercase.", "success");
    };
     // creating a function to make to lowerCase to upperCase; 
    const handleToLowercase = ()=>{
        let lower = text.toLowerCase();
        setText(lower);
        props.showAlert("Text has changed to lowercase.", "success");
    };
     // creating a function to copy text;
    const handleTextCopy = ()=>{
        let text = document.getElementById("myTextArea");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has copied.", "success");
    }
    // function, clear text into the textarea;
    const handleToClear = ()=>{
      setText("");
      props.showAlert("Text has cleared.", "success");
    }
    // space reomve model of text;
    const handleTextSapce = ()=>{
      let spaceRemover = text.split(/[ ]+/);
      setText(spaceRemover.join(" "));
      props.showAlert("Text has cleared the all extra spaces.", "success");
    }
    // onChange handle;
   const handleChangeText = (event)=>{
    setText(event.target.value);
    // console.log(event.target.value);
   }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="my-4">
        <h2 className='mb-5' style={{color:props.mode==='dark'?'white':'black'}}>{props.textFormTitle}</h2>
        <textarea className="form-control" onChange={handleChangeText} style={{color:props.mode==='dark'?'white':'black', backgroundColor:props.mode==="dark"?'#1e1e1e':"white"}}  value={text} id="myTextArea" rows="8"></textarea>
      </div>
      <div className="container my-3">
          <button disabled={text.length===0} onClick={handleToUppercase} onChange={handleChangeText}  className="btn btn-primary mx-2">to upercase</button>
          <button disabled={text.length===0} onClick={handleToLowercase} onChange={handleChangeText}  className="btn btn-secondary">to lowercase</button>
          <button disabled={text.length===0} onClick={handleToClear} onChange={handleChangeText}  className="btn btn-danger mx-2">clear</button>
          <button disabled={text.length===0} onClick={handleTextCopy} onChange={handleChangeText}  className="btn btn-success mx-2">Copy Text</button>
          <button disabled={text.length===0} onClick={handleTextSapce} onChange={handleChangeText}  className="btn btn-info mx-2">remove extra space</button>
      </div>
      <h1>Text:</h1>
      <p>{text.length>0?text:"Nothing to preview"}</p>
      <p className='text'> {text.split(" ").filter((ele)=>{return ele.length!=0}).length} Words: {text.length}</p>
    </div>
    </>
  )
}
