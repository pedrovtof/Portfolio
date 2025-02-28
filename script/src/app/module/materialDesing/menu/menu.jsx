"use client";
import * as React from 'react';
import {printf} from "../../../global/globalFunctions"
import { useThemeContext } from '../../materialDesing/theme/theme'

import { 
    Brightness4,
    Language
} from '@mui/icons-material'

import {
    Button,
    Menu,
    MenuItem,
    Box,
    IconButton 
} from '@mui/material'

import LanguageIcon from '@mui/icons-material/Language'


function menuFormat(data) {
    
    if(data.typeMenu==="theme"){
        return <Brightness4/>
    }
    if(data.typeMenu==="language"){
        return <LanguageIcon/>
    }
    else{return null}
}

const MenuDropDown = (
    valuesInput,
) => {

    const { darkMode, toggleTheme } = useThemeContext()
    const { setLanguage } = valuesInput
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget)
    }
  
    const handleClose = () => {
      setAnchorEl(null)
    }

    const changeTheme = (e)=>{
        if ((e === "Light" && darkMode) || (e === "Dark" && !darkMode)) {
            toggleTheme()
            handleClose()
        }
        else if ((e === "Claro" && darkMode) || (e === "Escuro" && !darkMode)) {
            toggleTheme()
            handleClose()
        }
        else if ((e === "Oscuro" && !darkMode)) {
            toggleTheme()
            handleClose()
        }
        else{
            handleClose()
        }
    }

    const changeLanguage = (e) => {
        if(Language === e){
            return handleClose()
        }
        else if(Language != e){
            setLanguage(e)
            return handleClose()
        }else{
            handleClose()
        }
    }

    return (
        <>            
            {
                valuesInput.typeMenu==="theme"?
                    <Box className={valuesInput.componentStyleButton.Class_ButtonAppBar_box}>
                        <IconButton 
                            className={valuesInput.componentStyleButton.Class_ButtonAppBar}
                            onClick={handleMenu}
                        >
                            {menuFormat(valuesInput)}
                        </IconButton>  
                        <Menu
                            id="menu-appbar-theme"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >  
                            {
                                valuesInput.textContent.map((item, index)=>{
                                    return(
                                        <MenuItem key={index} onClick={()=>changeTheme(item)}>
                                            {item}
                                        </MenuItem>
                                    )
                                })
                            }
                        </Menu>
                    </Box>
                :null
            }
            {
                valuesInput.typeMenu==="language"?
                    <Box className={valuesInput.componentStyleButton.Class_ButtonAppBar_box}>
                        <IconButton 
                            className={valuesInput.componentStyleButton.Class_ButtonAppBar}
                            onClick={handleMenu}
                        >
                            {menuFormat(valuesInput)}
                        </IconButton>
                        <Menu
                            id="menu-appbar-language"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >  
                            {
                                valuesInput.textContent.map((item, index)=>{
                                    return(
                                        <MenuItem key={index} onClick={()=>changeLanguage(item)}>
                                            {item}
                                        </MenuItem>
                                    )
                                })
                            }
                        </Menu>
                    </Box>
                :null
            }
        
        </>
    );

   
    
}



export default MenuDropDown;

    