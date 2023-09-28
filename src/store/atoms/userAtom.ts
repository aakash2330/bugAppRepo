import { atom } from "recoil";
import { string } from "zod";

export const userAtom=atom({
    key:"userState",
    default:{
        isAdmin:false,
        username:"",
    }
})