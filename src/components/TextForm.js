import React, { useState } from 'react'
export default function TextForm(props) {
    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text successfully converted to uppercase","success");
    };
    const handlechange = (event) => {
        setText(event.target.value);
    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text successfully converted to lowercase","success");
    }
    const clear=()=>{
        setText('');
        props.showAlert("Text cleared","success");        
    }
    const removeExtra = ()=>{
        let newText=text.replace(/\s+/g,' ').trim();
        setText(newText);
        props.showAlert("Extra space removed successfully","success");
    }
    const copy = ()=>{
        let copyText=document.getElementById("txtarea");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text successfully copied","success");
    }
    const [text, setText] = useState("");
    return (
        <div>
            <h1 className="text-center" style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control rounded-6" id="txtarea" rows="8" value={text} onChange={handlechange}></textarea>
                <hr />
                <button className="bt" onClick={upperCase}>Convert To Uppercase</button>
                <button className="bt" onClick={lowerCase}>Convert To lowercase</button>
                <button className="bt" onClick={clear}>Clear</button>
                <button className="bt" onClick={removeExtra}>Remove Extraspace</button>
                <button className="bt" onClick={copy}>Copy To Clipboard</button>
            </div>
            <hr />
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>
        </div>
    )
}