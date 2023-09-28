import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './sidenav.css';
import { grey } from '@mui/material/colors';
import BugLogo from '../buGamersLogo/bugLogo';
import Glitch from '../glitch/glitch';
import {Link,BrowserRouter} from 'react-router-dom'
import {useNavigate} from "react-router-dom"


export default function TemporaryDrawer() {

  const username = localStorage.getItem("username");
  const navigate = useNavigate();
 
  const [navMenuState,setNavMenuState]=React.useState([
    'HOME', 'GALLERY', 'ABOUT', 'LOGIN'
  ])

  const [usernameState,setUsernameState] = React.useState()

  React.useEffect(()=>{
    setUsernameState(username)
  },[username])


  const [state, setState] = React.useState({
    left: false,
  });

  const handleLogout = ()=>{
    localStorage.removeItem("token");localStorage.removeItem("username")
    window.location.href = "/home";
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  

  const list = (anchor) => (
    
    <div id='drawer'>
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
        {localStorage.getItem("username")?
        <ListItemText style={{fontWeight:"bold"}} onClick={()=>{
              navigate(`/profile`)
            }} ><Glitch GlitchText={usernameState}></Glitch>
      </ListItemText> 
      :
      <></>}
      

        {navMenuState.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            {/* <ListItemText ><h1>{text}</h1></ListItemText> */}
            
            <ListItemText style={{fontWeight:"bold"}} onClick={()=>{
              navigate(`/${text.toLowerCase()}`)
            }} ><Glitch GlitchText={text}></Glitch></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Divider />
      <List>
        {['SOCIALS', 'GET IN TOUCH'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText><Glitch GlitchText={text}></Glitch></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}


        {localStorage.getItem("token")? <ListItem key={"LOGOUT"} disablePadding>
            <ListItemButton>
              <ListItemText onClick={handleLogout} ><Glitch GlitchText={"LOGOUT"}></Glitch></ListItemText>
            </ListItemButton>
          </ListItem>:<></>}
       


      </List>
    </Box>
    </div>
  );

  return (
    <>
    <div >
      {/* {['L'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button id="sideMenuOpener" onClick={toggleDrawer("left", true)}></Button>
          <Drawer id='draw'
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))} */}
        <React.Fragment key={"left"}>
          <Button id="sideMenuOpener" onClick={toggleDrawer("left", true)}></Button>
          <Drawer id='draw'
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
    </div>
        <div onClick={toggleDrawer("left", true)} style={{color:"green" , backgroundColor:"white"}}>
        <BugLogo></BugLogo>
        </div>
    </>
  );
}