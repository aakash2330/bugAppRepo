import { atom } from "recoil";

export const eventsAtom= atom({
    key:"eventsAtom",
    default:{
        eventList:[
            { 
              title: "event",
              description: "description",
              imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          }
          ]
    }

})