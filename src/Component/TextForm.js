import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpclick = () => {
        //console.log("Upper case is handled");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case","success")
    }
    
    const handleLowclick = () => {
        //console.log("Upper case is handled");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case","success")
    }
    const clearText = ()=>{
        setText("")
        props.showAlert("Cleared!!","success")
    }

    const handleOnChange = (event) =>{
        //console.log("Handled onchange");
        setText(event.target.value)
    }
    // Arrow function
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text)
        setBtnText("Copied")
        props.showAlert("Copied","success")
    }

    const[text, setText] = useState("")
    const[btnText, setBtnText] = useState("Copy text")
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'darkgrey':'white'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>Convert to upperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowclick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearText}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>{btnText}</button>

    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Text count</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview summary</h2>
        <p>{text}</p>

    </div>
    </>
  )
}
