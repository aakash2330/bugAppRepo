import { atom } from "recoil";
import { string } from "zod";

export const eventCreationAtom=atom({
    key:"eventCreationAtom",
    default:{
        eventType:"",
        title:"",
        description:"",
        mediaURL:""        
    }
})