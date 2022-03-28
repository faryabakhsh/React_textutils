import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();

    setText(newText)
    props.showAlert ("converted to upper case", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();

    setText(newText);
    props.showAlert ("converted to lower case", "success");
  };

  const handleInverseClick = () => {
    let newText = text.split("").reverse().join("");

    setText(newText);

    props.showAlert ("reversed", "success");
  };

  const handleClearClick = () => {
    let newText = ("");

    setText(newText);
    props.showAlert ("clear", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'hsl(242deg 74% 14%)'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#13566e':'white', color: props.mode==='dark'?'white':'hsl(242deg 74% 14%)'}}
          ></textarea>
        </div>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          convert to upper case
        </button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          convert to lower case
        </button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          clear all
        </button>
        <button disabled ={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleInverseClick}>
          inverse
        </button>
      </div>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'hsl(242deg 74% 14%)'}}>
        <h2>your text summary</h2>
        <p>
          {text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length}minute read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </>
  );
}
