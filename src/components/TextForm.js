import { useState } from 'react'
export default function TextForm(props) {

    const convertUpperCase = () => {
        let upText = text.toUpperCase();
        setText(upText);
        props.notify("String Converted to UpperCase!", "Success");
    }

    const convertLowerCase = () => {
        let lowText = text.toLowerCase();
        setText(lowText);
        props.notify("String Converted to LowerCase!", "Success");
    }

    const convertSentanceCase = () => {
        let sentText = text.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        setText(sentText);
        props.notify("String Converted to SentanceCase!", "Success");
    }

    const removePunc = () => {
        let remPuncText = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').replace(/\s+/g, " ");
        setText(remPuncText);
        props.notify("Punctuations Remove From String!", "Success");
    }

    const clearText = () => {
        let clearText = '';
        setText(clearText);
        props.notify("Now TextArea is Clear!", "Success");
    }

    const newLineRemove = () => {
        let newString = text.replace(/(\r\n|\n|\r)/gm, ' ');
        setText(newString);
        props.notify("Line is Remove!", "Success");
    }

    const extraSpaceRemove = () => {
        let newText = text.replace(/\s+/g,' ').trim();
        setText(newText);
        props.notify("Extra Space is Remove!", "Success");
    }

    const copyText = () => {
        let copyText = document.getElementById("textarea");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.notify("Text Copied into Clipboard!", "Success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>{props.heading} </h2>
                <div className="mb-3">
                    <textarea className="form-control" id='textarea' value={text} style={{backgroundColor: props.mode==='dark'?'light':'dark'}} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-outline-info mx-2" onClick={convertUpperCase}>Convert To UpperCase</button>
                <button className="btn btn-outline-warning mx-2" onClick={convertLowerCase}>Convert To LowerCase</button>
                <button className="btn btn-outline-info mx-2" onClick={convertSentanceCase}>Convert To SentanceCase</button>
                <button className="btn btn-outline-warning mx-2" onClick={removePunc}>Remove Punctuation</button>
                <button className="btn btn-outline-info mx-2" onClick={newLineRemove}>New Line Remove</button>
                <button className="btn btn-outline-warning mx-2" onClick={extraSpaceRemove}>Extra Space Remove</button>
                <button className="btn btn-outline-info mx-2 mt-3" onClick={copyText}>Copy Text</button>
                <button className="btn btn-outline-warning mx-2 mt-3" onClick={clearText}>Clear Text</button>
            </div>
            <br />
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h3>Text Summary: </h3>
                <p>There are {text.split(' ').filter(function (n) { return n !== '' }).length} Words & {text.length} Characters!</p>
                <p>There is {0.008 * text.split(' ').length} Minutes To Read!</p>
                <p>There are {text.split(/\r\n|\r|\n/).length} Lines!</p>
            </div>
            <br />
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h3>Preview:</h3>
                <p>{text.length>0?text:"Enter Your Text In Above TextArea..!"}</p>
            </div>
        </>
    );
}
