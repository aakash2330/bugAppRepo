import CardTemplate from "../templates/cardTemplate/cardTemplate";
import ButtonTemplate from "../templates/buttonTemplate/buttonTemplate";
import DropDown from "../templates/dropDownTemplate/dropDown";
import { useNavigate } from 'react-router-dom';
import {useRecoilState} from 'recoil'
import { eventCreationAtom } from "../store/atoms/eventCreationAtom";
import InputTemplate from "../templates/inputTemplate/inputTemplate";
import axios from "axios";
import { apiUrl } from '../../environmentVariables';
import AuthGuard from "../authGuard/authGuard";



 function AdminPageContent(){

    const navigate = useNavigate();

    const [event,setEvent]=useRecoilState(eventCreationAtom);
    async function submitEvent(){
        console.log(event)
        const {title,description,mediaURL}=event;
        try{
            const {data} = await axios.post(`${apiUrl}/admin/createEvent` ,{title,description,imageUrl:mediaURL},
            {
                headers : {
                    authorization : `Bearer ${localStorage.getItem('token')}`
                }
            }
            )
            console.log(data);
            navigate("/home")

        }
        catch (err){console.log(error)}
       
    }

    return <>
    <CardTemplate>
            <h1 style={{color:"mediumslateblue"}}>{event.eventType}</h1>  
            <InputTemplate text="Title" onInputChange={(input)=>{setEvent({...event,title:input})}} ></InputTemplate>
            <InputTemplate text="Description" onInputChange={(input)=>{setEvent({...event,description:input})}} ></InputTemplate>
            <InputTemplate text="Poster Link" onInputChange={(input)=>{setEvent({...event,mediaURL:input})}} ></InputTemplate>
            <br/>
            <ButtonTemplate text="Create Event" clickFunction={()=>{
                submitEvent();
            }}></ButtonTemplate>
    </CardTemplate>
    </>
}

export default AuthGuard(AdminPageContent)