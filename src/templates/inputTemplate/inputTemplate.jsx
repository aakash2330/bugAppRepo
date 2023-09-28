
import { useState } from 'react';
import './inputTemplate.css'

function InputTemplate({text,onInputChange}){

    const [inputValue,setInputValue]=useState();

    const handleInputchange = (e)=>{
        onInputChange(e.target.value);
    }


    return (
        <>
         <div className="webflow-style-input" style={{fontFamily:"'Space Mono', monospace"}}>
                            <input
                                autoComplete="false"
                                className="pp"
                                name={text}
                                placeholder={text}
                                onChange={handleInputchange}
                            />
                        </div>
        </>
    )
}

export default InputTemplate;