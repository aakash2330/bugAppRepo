import { useEffect } from "react";
import AuthGuard from "../authGuard/authGuard";
import CardTemplate from "../templates/cardTemplate/cardTemplate";
import ButtonTemplate from "../templates/buttonTemplate/buttonTemplate";
import DropDown from "../templates/dropDownTemplate/dropDown";
import { useNavigate } from 'react-router-dom';
import {useRecoilState} from 'recoil'
import { eventCreationAtom } from "../store/atoms/eventCreationAtom";

function AdminPage(){

    const navigate = useNavigate();
    const [newEvent,setNewEvent]=useRecoilState(eventCreationAtom)

        return (<div>
           <CardTemplate>
            <h1 style={{color:"mediumslateblue"}}>CREATE EVENT HERE .</h1>
            <p style={{fontSize:"medium"}} >SELECT EVENT TYPE .</p>

            <DropDown title={"Select"} eventList={["E-sports" , "Meetup" , "Exhibition"]} 
            clickFunction={(e)=>{

                setNewEvent({...newEvent,eventType:e.target.innerText})
                navigate("/admin1")

            }}>
            </DropDown>
            </CardTemplate>
  </div>)
        
}

export default AuthGuard(AdminPage);