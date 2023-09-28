import './cardTemplate.css'
import InputTemplate from '../templates/inputTemplate/inputTemplate';
import ButtonTemplate from '../templates/buttonTemplate/buttonTemplate';

function CardTemplate(props){
    return (
        <>
        <div id="b">
        <div className="card">
        <div className="card-content" style={{display:'flex' , flexDirection:'column' , gap:"4rem"}}> 
        
        </div>
        </div>
        </div>
        </>
    )
}

export default CardTemplate;