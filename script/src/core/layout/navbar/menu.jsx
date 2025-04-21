import React                from "react"
import { useThemeContext }  from '../../theme/theme'
import { 
    Brightness4,
    Language
}                           from '@mui/icons-material'
import {
    Button,
    Menu,
    MenuItem,
    Box,
    IconButton,
    NoSsr
}                           from '@mui/material'
import LanguageIcon         from '@mui/icons-material/Language'
import { useRouter }        from 'next/router'


const MenuDropDown = (valuesInput) => {

    const { darkMode, toggleTheme } = useThemeContext()
    const [anchorEl, setAnchorEl]   = React.useState(null)

    const router    = useRouter()
    const open      = Boolean(anchorEl)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEl(null)
    }

    const changeTheme = (e)=>{

        if ((e === "Light" && darkMode) || (e === "Dark" && !darkMode)) {
            toggleTheme()
        }

        if ((e === "Claro" && darkMode) || (e === "Escuro" && !darkMode)) {
            toggleTheme()
        }

        if ((e === "Oscuro" && !darkMode)) {
            toggleTheme()
        }

        handleClose()
    }
  
    const changeLanguage = (e) => {

        if (e === "Portugues"){
           router.push(router.pathname, router.asPath, { locale: 'pt-BR' })
        }

        if (e === "Espanhol"){
            router.push(router.pathname, router.asPath, { locale: 'es' })
        }
        
        if (e === "English"){
            router.push(router.pathname, router.asPath, { locale: 'en' })
        }

        handleClose()
    }

    return (
        <React.Fragment>  
            <NoSsr>          
                {
                    valuesInput.typeMenu === "theme" ?
                        <Box 
                            className={valuesInput.componentStyleButton.Class_ButtonAppBar_box}
                        >
                            <IconButton 
                                    className   ={valuesInput.componentStyleButton.Class_ButtonAppBar}
                                    onClick     ={handleClick}
                                >
                                <Brightness4
                                    className   ={valuesInput.componentStyleButton.Class_ButtonAppBarIcon}
                                />
                            </IconButton>  
                            <Menu
                                id          ="menu-appbar-theme"
                                anchorEl    ={anchorEl}
                                open        ={open}
                                onClose     ={handleClose}
                            >
                            {
                                valuesInput.textContent.map((item, index)=>{
                                    return(
                                        <MenuItem 
                                            key     ={index} 
                                            onClick ={()=>changeTheme(item)}
                                        >
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
                    valuesInput.typeMenu === "language" ?
                        <Box 
                            className={valuesInput.componentStyleButton.Class_ButtonAppBar_box}
                        >
                            <IconButton 
                                className   ={valuesInput.componentStyleButton.Class_ButtonAppBar}
                                onClick     ={handleClick}
                            >
                                <LanguageIcon
                                    className={valuesInput.componentStyleButton.Class_ButtonAppBarIcon}
                                />
                            </IconButton>
                            <Menu
                                id          ="menu-appbar-language"
                                anchorEl    ={anchorEl}
                                open        ={open}
                                onClose     ={handleClose}
                            >  
                                {
                                    valuesInput.textContent.map((item, index)=>{
                                        return(
                                            <MenuItem 
                                                key     ={index} 
                                                onClick ={()=>changeLanguage(item)}
                                            >
                                                {item}
                                            </MenuItem>
                                        )
                                    })
                                }
                            </Menu>
                        </Box>
                    :null
                }
                
            </NoSsr>
        </React.Fragment>
    )
}


export default MenuDropDown