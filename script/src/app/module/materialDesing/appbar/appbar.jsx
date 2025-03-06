"use client";

import * as React from 'react'
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Breadcrumbs,
    Link as MuiLink
} from '@mui/material'

import {Link as ScrollLink} from "react-scroll";

import {printf, useLanguageContext} from "../../../global/globalFunctions"
import appBarContent  from "../../../../../public/content/pages/home.json"
import MenuDropDown from "../menu/menu"



const ButtonAppBar = (
    valuesInput,
) => {

    const { setLanguage } = useLanguageContext();

    const textPageAppBar = valuesInput.ContentText

    const componentStyleButton = valuesInput.ButtonAppBar

    return (
            <AppBar className={
                valuesInput.BarStyle.Class_appBarDiv
            } >
                <Toolbar className={valuesInput.BarStyle.Class_toolbar}>
                    <Box
                        className={valuesInput.BarStyle.Class_AppBarTypography_box}
                    >
                        {
                            textPageAppBar.optionsAppBar.map((item, index) => {
                                return( 
                                    <ScrollLink
                                        to={item}
                                        key={index}
                                        smooth={valuesInput.ScrollLinkConfig.ScrollLink_smooth}
                                        duration={valuesInput.ScrollLinkConfig.ScrollLink_duration}
                                        offset={valuesInput.ScrollLinkConfig.ScrollLink_offset}
                                        spy={valuesInput.ScrollLinkConfig.ScrollLink_spy}
                                        
                                    >
                                        <Typography 
                                            key={index}
                                            variant={valuesInput.Typography_variant} 
                                            component={valuesInput.Typography_component} 
                                            className={valuesInput.BarStyle.Class_AppBarTypography}
                                            sx={{ color: (theme) => theme.palette.primary.contrastText }}
                                        > 
                                            {item} 
                                        </Typography>
                                   
                                    </ScrollLink>
                                    
                                )
                            })  
                        }
                    </Box>
                    <MenuDropDown
                        textContent={textPageAppBar.themesPage}
                        typeMenu="theme"
                        componentStyleButton={componentStyleButton}
                    />
                    <MenuDropDown
                        textContent={textPageAppBar.languagesPage}
                        typeMenu="language"
                        componentStyleButton={componentStyleButton}
                        setLanguage={setLanguage} 
                    />
                </Toolbar>
            </AppBar>
    );
}

export default ButtonAppBar