import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../laoder/loader';
import { apiUrl } from '../../environmentVariables';


const LoginGuard = (WrappedComponent) => {  // will check from the http request whether the token is verified or not? and will then return either the component
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
    
            if(data.role){
                setVerification(true);
            }
    
            console.log(data.role)
           
        }catch(error){
            console.log("error")
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
    return <><h1>ALREADY LOGGED IN</h1></>
      
    }
   else {
    return <WrappedComponent {...props} />; // return the captured component if token is valid
    }
  };

  return GuardedComponent;
};

export default LoginGuard;