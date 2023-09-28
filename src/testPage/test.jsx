import React, { useEffect, useState } from "react";
import './test.css'
import {  NavLink, useNavigate } from "react-router-dom";
import {useRecoilState} from 'recoil'
import {userAtom} from '../store/atoms/userAtom'
import LoginGuard from "../loginGuard/loginGuard";
import CardTemplate from "../templates/cardTemplate/cardTemplate";
import DropDown from "../templates/dropDownTemplate/dropDown";
import ButtonTemplate from "../templates/buttonTemplate/buttonTemplate";
// import { BASE_URL } from '../../config'

 function TestPage({children}) {
  const [userState,setUserState]=useRecoilState(userAtom);
  console.log(children)
  return (<div>

  </div>)
}

export default (TestPage);