import React, { useState } from 'react';

export default function Container(props) {
    const [textarea, setTextarea] = useState("");
    const [previewText, setPreviewText] = useState("");

    const handleOnChange = (event) => {
        let inputValue = event.target.value;
        let formattedValue = inputValue.replace(/\b\w/g, (char) => char.toUpperCase());
        setTextarea(formattedValue);
    }

    const handleOnClickLowerCase = () => {
        let newText = textarea.toLowerCase();
        setPreviewText(newText);
    }
    const handleOnClickUpperCase = () => {
        let newText = textarea.toUpperCase();
        setPreviewText(newText);
    }
    const handleOnClickClear = () => {
        let textarea = '';
        setTextarea(textarea);
        let newText = '';
        setPreviewText(newText);
    }

    return (
        <>
            <div style={{height: '76.3vh'}}>
                <div className="mb-3">
                    <h5 htmlFor="exampleFormControlTextarea1" className="form-label">{props.label}</h5>
                    <textarea className="form-control" value={textarea} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
                    <div className='d-flex justify-content-end'>
                        {textarea.trim().split(/\s+/).filter(word => word !== "").length} words and {textarea.length} characters
                    </div>
                </div>
                <div className='d-flex'>
                    <button className='btn btn-warning' onClick={handleOnClickLowerCase}>
                        Convert to LowerCase
                    </button>
                    <button className='btn btn-primary ms-2' onClick={handleOnClickUpperCase}>
                        Convert to UpperCase
                    </button>
                    <button className='btn btn-danger ms-2' onClick={handleOnClickClear}>
                        Clear
                    </button>
                </div>
                <div className="mt-3">
                    <h6>Preview:</h6>
                    <p style={{height: '30vh',border: '1px solid lightgray', padding: '10px', overflowY: 'scroll',borderRadius: '5px',backgroundColor : 'lightgray'}}>
                        {previewText}
                    </p>
                </div>
            </div>
        </>
    )
}
