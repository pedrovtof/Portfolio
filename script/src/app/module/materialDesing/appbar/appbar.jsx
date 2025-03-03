"use client";

import * as React from 'react'
import {
    AppBar,
    Box,
    Toolbar,
    Typography
} from '@mui/material'

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
                    {
                        textPageAppBar.optionsAppBar.map((item, index) => {
                            return( 
                            <Typography key={index}
                                variant={valuesInput.Typography_variant} 
                                component={valuesInput.Typography_component}
                                className={
                                    valuesInput.BarStyle.Class_AppBarTypography
                                } 
                                name={item} 
                                id={item}> 
                                {item} 
                            </Typography>)
                            
                        })  
                    }
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