import React ,{useState} from 'react'

export default function container(props) {
    const handleOnChange = (event) => {
        setTextarea(event.target.value);
    }
    const handleOnClick = () => {
        let newText = textarea.toUpperCase();
        setTextarea(newText);
    }

    const [textarea, setTextarea] = useState(" ");

    return (
        <>
            <div style={{height: '76.3vh'}}>
                <div className="mb-3">
                    <h5 htmlFor="exampleFormControlTextarea1" className="form-label">{props.label}</h5>
                    <textarea className="form-control" value={textarea} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <div>
                    <button className='btn btn-primary' onClick={handleOnClick}>Convert to UpperCase</button>
                </div>
            </div>
        </>
    )
}
