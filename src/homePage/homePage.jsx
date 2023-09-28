
import { useEffect, useState } from 'react';
import './homePage.css'
import axios from 'axios';
import { apiUrl } from '../../environmentVariables';
import Loader from '../laoder/loader';
import { useRecoilState } from 'recoil';
import { eventsAtom } from '../store/atoms/eventsAtom';

function HomePage(){

  const [pageNum,setPageNum]=useState(0);
  const [isLoading,setLoading]=useState(true);

  // const [events,setEvents]=useState([
  //   { 
  //     title: "event",
  //     description: "description",
  //     imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  // }
  // ]);
 
  const [events,setEvents]=useRecoilState(eventsAtom);
  

  async function getEvents(){
    const {data} = await axios.get(`${apiUrl}/admin/events`)
    // console.log(data)
    setEvents({eventList:data});  //set state so that other components dont have to fetch
    setLoading(false)
  }

  useEffect(()=>{
    if(events.eventList.length>1){ //if evenets list has already been fetched before by some other component , no need to fetch it again
      console.log("local")
      setLoading(false)
    }
    else{
      getEvents();
      console.log("server")
    }
    
  },[])

if(isLoading){
  return <Loader></Loader>
}
  
 else return (
        <>
       <main>
    <article data-index="0" data-status="active">
      {/* <!-- <div  className="article-image-section article-section" [ngStyle]="{'background-image': 'url(' +homeComponentState.backgroundImageUrl + ')'} "> --> */}
         <div  className="article-image-section article-section" >
        <div className="screen">  
            <div className="screen-image" style={{backgroundImage:`url(${events.eventList[pageNum].imageUrl})`}} ></div> 
            {/* background image here */}
      </div>
      </div>
      <div className="article-description-section article-section">
        <p >
        {events.eventList[pageNum].description}
        </p>
      </div>
      <div className="article-title-section article-section">
        <h1 id='title' >{events.eventList[pageNum].title}</h1>
        <i className="fa-light fa-plus-large"></i>
      </div>
      <div className="article-nav-section article-section">
        <button className="article-nav-button" onClick={()=>{setPageNum((prev)=>{return prev>0?prev-1:0})}}  type="button" >
            <a  className="arrow left" ></a>
        </button>
        <button className="article-nav-button" onClick={()=>{setPageNum((prev)=>{return prev<events.eventList.length-1?prev+1:events.eventList.length-1})}} type="button"  >
            <a  className="arrow right" ></a>
        </button>
      </div>
   </article>
  </main>

 
  
        </>
    )
}

export default HomePage;