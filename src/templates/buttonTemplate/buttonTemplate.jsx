import './buttonTemplate.css'

function ButtonTemplate({text,clickFunction}){
    return (
        <>
        <button className="glow-on-hover" type="button" onClick={clickFunction}>
                        {text}
            </button>
        </>
    )
}

export default ButtonTemplate;