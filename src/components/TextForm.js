import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // Convert to Uppercase
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  // Convert to Lowercase
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  // Clear Text
  const handleClearText = () => {
    setText("");
  };

  // Remove Extra Spaces
  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };

  // Copy to Clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };

  // Handle Change
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Calculations
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const characters = text.length;
  const readingTime = (0.008 * words).toFixed(2);

  return (
    <>
      <div className="container my-4" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 className="mb-3">{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode === 'dark'?'gray':'white',color:props.mode === 'dark'?'white':'#042743'}}
          id="myBox"
          rows="8"
          placeholder="Enter your text here..."
        ></textarea>

        <div className="mt-3">
          <button
            className="btn btn-primary mx-1"
            onClick={handleUpperCase}
            disabled={text.length === 0}
          >
            Convert to Uppercase
          </button>

          <button
            className="btn btn-primary mx-1"
            onClick={handleLowerCase}
            disabled={text.length === 0}
          >
            Convert to Lowercase
          </button>

          <button
            className="btn btn-success mx-1"
            onClick={handleCopy}
            disabled={text.length === 0}
          >
            Copy Text
          </button>

          <button
            className="btn btn-warning mx-1"
            onClick={handleExtraSpaces}
            disabled={text.length === 0}
          >
            Remove Extra Spaces
          </button>

          <button
            className="btn btn-danger mx-1"
            onClick={handleClearText}
            disabled={text.length === 0}
          >
            Clear Text
          </button>
        </div>
      </div>

      <div className="container my-4" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2>Text Summary</h2>
        <p>
          Number of words: <b>{words}</b>
        </p>
        <p>
          Number of characters: <b>{characters}</b>
        </p>
        <p>
          Reading time: <b>{readingTime}</b> minutes
        </p>

        <h2 className="mt-3">Preview</h2>
        <div className="border p-3 rounded bg-light">
          {text.length > 0 ? text : "Enter somthing in ths textbox above to preview it here"}
        </div>
      </div>
    </>
  );
}
