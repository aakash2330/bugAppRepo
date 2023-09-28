import './loginPage.css'
import Glitch from '../glitch/glitch';
import React from 'react';
import axios from 'axios';
import ButtonTemplate from '../templates/buttonTemplate/buttonTemplate';
import { useNavigate } from 'react-router-dom';
import {useRecoilState} from 'recoil'
import {userAtom} from '../store/atoms/userAtom'
import TestPage from '../testPage/test';
import LoginGuard from '../loginGuard/loginGuard';
import { apiUrl } from '../../environmentVariables';


function LoginPage(){
    const navigate = useNavigate();

const [signInData,setSignInData]= React.useState({
    username:"",
    password:""
})

const [userState,setUserState]=useRecoilState(userAtom);

const handleLoginButton=async()=>{
    console.log({signInData});
    try{
    const {data} = await axios.post(`${apiUrl}/user/login`,{username:signInData.username,password:signInData.password});
        console.log(data)
        localStorage.setItem("token",data.token);localStorage.setItem("username",data.username);localStorage.setItem("role",data.role)
        if(data.role==="ADMIN"){
            setUserState({...userState,isAdmin:true,username:data.username})
        }
        
         navigate("/home")
    }
   catch(err){
    console.log(err)
   }
    
}

    return (
            <div id="loginForm">
                {/* <h1 data-value="LOGIN" name="LOGIN_TEXT" id="LOGIN_TEXT" >LOGIN</h1> */}
                <Glitch GlitchText="LOGIN" name="LOGIN_TEXT" id="LOGIN_TEXT"></Glitch>
                <br />
                <form>
                    <div className="container">
                        <div className="webflow-style-input">
                            <input
                                autoComplete="false"
                                className="pp"
                                name="email"
                                type="email"
                                placeholder="Email"
                             onChange={e=>setSignInData({...signInData,username:e.target.value})} 
                            />
                        </div>
                    </div>
                    <br />
                    <br />

                    <div className="webflow-style-input">
                        <input className="pp" type="password" placeholder="Password" 
                        onChange={e=>setSignInData({...signInData,password:e.target.value})} 
                        />
                    </div>
                    <br />
                    <br />
                    <button className="glow-on-hover" type="button" id="loginButton" onClick={handleLoginButton} >
                        LOGIN
                    </button>
                    <br />
                    <br />
                    <br />

                    <p data-value="Or Sign Up Using" id="orSignupUsing">
                        Or{" "}
                        <a id="signupLink">
                            <b> Sign Up </b>
                        </a>{" "}
                        Using
                    </p>
                </form>
                <br />
                <br />
                <div id="othersignups" >
      <div className='buttons-container'>
        <div className='button facebook'>
          <i id="facebook_button" className="fab fa-facebook-f "></i>
        </div>
        <div className='button twitter'>
          <i className="fab fa-twitter fa-2x"></i>
        </div>
        <div className='button instagram'>
          <i className="fab fa-instagram fa-2x"></i>
        </div>
       
      </div>
    </div>
            </div>



    )
}
export default LoginGuard(LoginPage);