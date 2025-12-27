import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = (event)=>{
        // console.log("Uppercase was clocked" + text);
        let newTex = text.toUpperCase();
        setText(newTex)
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here")

  return (
    <div>
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
      <button className="btn btn-primary" onClick={handleUpClick}>Convart to UpperCase</button>
    </div>
  );
}
