
import './ProfileCard.css'

export default function ProfileCard({title,description,icon,buttonFunction}){


    return (
      <button onClick={buttonFunction}>
    <div id="b">
   <div id="cardds">
   <div className="cardd">
     <div className="cardd-content">
       <div className="cardd-image">
         <i className={icon}></i>
       </div>
       <div className="cardd-info-wrapper">
         <div className="cardd-info">
           <i className={icon}></i>
           <div className="cardd-info-title">
             <h3>{title}</h3>  
             <h4>{description}</h4>
           </div>    
         </div>
       </div>
     </div>
   </div>
   </div>
   </div>
   </button>
   )
}