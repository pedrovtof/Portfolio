import React                    from "react"
import {
    AppBar,
    Box,
    Toolbar,
    Typography
}                               from '@mui/material'
import {Link as ScrollLink}     from "react-scroll"
import MenuDropDown             from "./menu"

const NavBar = (valuesInput) => {

    const textPageAppBar        = valuesInput.ContentText
    const componentStyleButton  = valuesInput.ButtonAppBar

    return (
        <React.Fragment>
            <AppBar 
                className={valuesInput.BarStyle.Class_appBarDiv} 
            >
                <Toolbar
                    className={valuesInput.BarStyle.Class_toolbar}
                >
                    <Box
                        className={valuesInput.BarStyle.Class_AppBarTypography_box}
                    >
                        {   
                            textPageAppBar.optionsAppBar.map((item, index) => {
                                return( 
                                    <ScrollLink
                                        to          ={item}
                                        key         ={index}
                                        smooth      ={valuesInput.ScrollLinkConfig.ScrollLink_smooth}
                                        duration    ={valuesInput.ScrollLinkConfig.ScrollLink_duration}
                                        offset      ={valuesInput.ScrollLinkConfig.ScrollLink_offset}
                                        spy         ={valuesInput.ScrollLinkConfig.ScrollLink_spy}
                                        
                                    >
                                        <Typography 
                                            key         ={index}
                                            variant     ={valuesInput.Typography_variant} 
                                            component   ={valuesInput.Typography_component} 
                                            className   ={valuesInput.BarStyle.Class_AppBarTypography}
                                            sx          ={{ color: (theme) => theme.palette.primary.contrastText }}
                                        > 
                                            {item} 
                                        </Typography>
                                    
                                    </ScrollLink>
                                    
                                )
                            })  
                        }
                    </Box>
                    <MenuDropDown
                        textContent             ={textPageAppBar.themesPage}
                        typeMenu                ="theme"
                        componentStyleButton    ={componentStyleButton}
                    />
                    <MenuDropDown
                        textContent             ={textPageAppBar.languagesPage}
                        typeMenu                ="language"
                        componentStyleButton    ={componentStyleButton}
                    />
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default NavBar