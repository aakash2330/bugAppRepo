import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../laoder/loader';
import { apiUrl } from '../../environmentVariables';

export default function Guard({children}){

    const [isLoading,setLoading]=useState(true)
    const [isVerified,setVerification]=useState(false)

    useEffect(()=>{
        jwt();
    },[])

    async function jwt(){
        try{
            const {data} = await axios.post(`${apiUrl}user/verifyJwt`,null,{
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

    if(isLoading){
        return <>
        <Loader></Loader>
        </>
    }

    else if (isVerified){
        return children
    }

    else {
        return <>UNAUTHORIZED</>
    }
    
}