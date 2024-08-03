import React, { useState } from 'react';
import './Textform.css'; 

const Textform = (props) => {
  
  const [text,setText]=useState("")

  const handleUpperCase=()=>{
    let newText= text.toUpperCase();
    setText(newText);
  }

  const handleChange=(event)=>{
    setText(event.target.value)
  }
  
  const handleLowercase=()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  
  const handleClearText=()=>{
    setText("")
  }

  const handlespeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  return (
    <>
    <div className="text-form">
      <h3 className="text-form-heading">{props.heading}</h3>
      <div className="text-form-input">
        <textarea style={{width:"500px"}} rows={16} value={text} onChange={handleChange}  ></textarea>
        {/* <input
          type="text"
          placeholder="Enter text..."
          required
        /> */}
        <div className='btn-container'>
        <button onClick={handleUpperCase}>Convert to uppercase</button>        
        <button onClick={handleLowercase}>Convert to Lowercase</button>
        <button onClick={handleClearText}>Clear Text</button>
        <button onClick={handlespeak}>Speak</button>
        </div>
      </div>
    </div>
    <div className='text-form'>
    <h3>Your text summary</h3>
      <p>your text has {text.split(" ").length} words</p>
      <p>and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} minutes to read</p>
      <h2>PREVIEW</h2>
      <p>{text}</p>
    </div>
    </>
  );
};

export default Textform;
