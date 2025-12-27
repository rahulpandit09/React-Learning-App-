import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clocked" + text);
        let newTex = text.toUpperCase();
        setText(newTex)
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clocked" + text);
        let newTex = text.toLocaleLowerCase();
        setText(newTex)
    }

    const handleClearClick = ()=>{
        // console.log("Uppercase was clocked" + text);
        let newTex = '';
        setText(newTex)
    }


    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("")

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="15"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convart to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convart to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="contaoner my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length }Minutes read</p>
        <h1>Preview</h1>
        <p>{text}</p>

    </div>
    </>
  );
}
