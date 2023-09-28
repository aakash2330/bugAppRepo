
import ButtonTemplate from '../buttonTemplate/buttonTemplate'
import InputTemplate from '../inputTemplate/inputTemplate'
import './cardTemplate.css'

export default function cardTemplateTemplate({children}){
    return <>
    <div id="b">
    <div className="cardTemplate">
    <div className="cardTemplate-content">
        {children?children:<>no children</>}
        </div></div>
        </div>
    </>
}