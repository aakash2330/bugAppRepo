
import './profilePage.css'
import ProfileCard from '../templates/profileCardTemplatee/profileCard'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

export default function ProfilePage(){

    const navigate = useNavigate();

    const [profileCardsState,setProfileCardsState]=useState([
        {  
            title:"Username",
            description:"Change Username",
            icon:"fa-solid fa-user"
        },
        {
            title:"Password",
            description:"Change Password",
            icon:"fa-solid fa-key"
        },
        {
            title:"Profile Picture",
            description:"Change Profile Picture",
            icon:"fa-solid fa-id-card"
        },
        {
            title:"Contact",
            description:"Change Contact",
            icon:"fa-solid fa-phone"
        },
        {
            title:"Email",
            description:"Change Email",
            icon:"fa-solid fa-envelope"
        },
    ]
        
        );

    return (
        
        <div id='profilePageCards' >
        {profileCardsState.map(card=>{
            return <ProfileCard key={card.title} icon={card.icon} title={card.title} description={`Change ${card.description}`} buttonFunction={()=>{console.log("click")}} ></ProfileCard>  
        })} 

        {localStorage.getItem("role")==="ADMIN"?
       
        <ProfileCard  key={"ManageEvents"} icon={"fa-solid fa-bars"} title={"Manage Events"} description={`Change ${"Manage Events"}`} buttonFunction={()=>{navigate("/admin")}} ></ProfileCard>
        :
        <ProfileCard key={"Others"} icon={"fa-solid fa-bars"} title={"Others"} description={`${"Coming Soon"}`} buttonFunction={()=>{console.log("click")}}></ProfileCard>}
    
        </div>
       
    )

}