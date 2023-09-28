import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../laoder/loader';
import { apiUrl } from '../../environmentVariables';


const AuthGuard = (WrappedComponent) => {  // will check from the http request whether the token is verified or not? and will then return either the component
                                          // or UNAUTHORIZED  

   
    const GuardedComponent = (props) => {
        
    const [isLoading,setLoading]=useState(true)
    const [isVerified,setVerification]=useState(false)


    useEffect(() => {

        async function checkJwt(){ // http request to check jwt
          try{
            const {data} = await axios.post(`${apiUrl}/user/verifyJwt`,null,{
                headers : {
                    authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
    
            if(data.role=="ADMIN"){
                setVerification(true);
            }
           
        }catch(error){
            console.log("error")
            localStorage.removeItem("token");localStorage.removeItem("username")

        }
        finally {
            setLoading(false)
        }
        }

        checkJwt();
          
             
    }, []);

    if(isLoading){
      return <>
     <Loader></Loader>
      </>
  }

  else if (isVerified){
      return <WrappedComponent {...props} />; // return the captured component if token is valid
    }
   else {
    return <><h1>UNAUTHORIZED</h1></>
    }
  };

  return GuardedComponent;
};

export default AuthGuard;