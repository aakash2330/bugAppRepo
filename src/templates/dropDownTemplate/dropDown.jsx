import './dropdown.css'

export default function DropDown({title,eventList,clickFunction}){
    return <>
         <ul id="main" >
        <li>{title}
          <ul className="drop">
            <div id="sml">
            {eventList.map((event,index)=>{return  <li onClick={clickFunction} key={index}>{event}</li>})}
            </div>
          </ul>
        </li> 
      </ul> 
    </>
}