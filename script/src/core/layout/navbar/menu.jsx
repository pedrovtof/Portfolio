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

        const themeMapStyles = {
            "Light": "light",
            "Dark": "dark",
            "Claro": "light",
            "Escuro": "dark",
            "Oscuro": "dark"
        }

        const typeOfTheme = themeMapStyles[e]

        if (typeOfTheme !== undefined && ((darkMode == false && typeOfTheme =='dark' ) || ((darkMode == true && typeOfTheme=='light' )))) {
            toggleTheme()
        }

        handleClose()
    }
  
    const changeLanguage = (e) => {

        const translateMap = {
            "Portugues": "pt-BR",
            "Espanhol": "es",
            "English": "en"
        }

        const typeOfTranslate = translateMap[e]

        if (typeOfTranslate !== undefined){
            router.push(router.pathname, router.asPath, { locale: typeOfTranslate })
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