import { useEffect, useState } from 'react';
import GalleryCard from '../templates/galleryCard/galleryCard';
import './galleryPage.css'
import axios from 'axios';
import { apiUrl } from '../../environmentVariables';
import Loader from '../laoder/loader';
import { useRecoilState } from 'recoil';
import { eventsAtom } from '../store/atoms/eventsAtom';


function GalleryPage(){

    const [eventImages,setEventImages]=useState([]);
    const [isLoading,setLoading]=useState(true);
    const [eventsList,setEventsList]=useRecoilState(eventsAtom);
    
      async function getEvents(){
        const {data} = await axios.get(`${apiUrl}/admin/events`)
        // console.log(data)
        const imageList = data.map(event=>{return event.imageUrl})
        // console.log(imageList)
        setEventImages(imageList);
        setEventsList({eventList:data}) //set state so that other components dont have to fetch
        setLoading(false);
        console.log("server")
      }
    
      useEffect(()=>{
        if(eventsList.eventList.length>1){  //if evenets list has already been fetched before by some other component , no need to fetch it again
            const imageList = eventsList.eventList.map((event)=>{
                return event.imageUrl;
            })

            setEventImages(imageList);
            setLoading(false);
            console.log("local")
        }
        else{
            getEvents();
        }
       
        
      },[])

    
    if(isLoading){
        return <Loader></Loader>
    }
    else{
        return <>
    <div style={{display:"flex", gap:"2.5rem", flexWrap:"wrap", justifyContent:"space-evenly" }}>
      {eventImages.map((img,index)=>{return <GalleryCard key={index} imageUrl={img}></GalleryCard>})}
    {/* <GalleryCard imageUrl={"https://images.unsplash.com/photo-1496889050590-4db81f7fb62a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}></GalleryCard> */}
    </div>
    </>
    }
    
}

export default GalleryPage;