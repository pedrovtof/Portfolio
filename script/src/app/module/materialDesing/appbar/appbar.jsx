"use client";

import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography
} from '@mui/material';

import {printf, useLanguageContext} from "../../../global/globalFunctions"
import appBarContent  from "../../../../../public/content/pages/home.json"
import MenuDropDown from "../menu/menu"

const ButtonAppBar = (
    valuesInput,
) => {

    const { language, setLanguage } = useLanguageContext();

    const [textPage, setTextPage] = React.useState({
        optionsAppBar: [],
        themesPage: [],
        languagesPage: []
    })
    
    React.useEffect(() => {
        const currentLanguage = language
        const alterTextPage = {
            optionsAppBar: appBarContent.languages[currentLanguage].listAppBar ,
            themesPage: appBarContent.languages[currentLanguage].themes,
            languagesPage: appBarContent.languages[currentLanguage].languages
        }

        setTextPage(alterTextPage);
    }, [language]); 

    
    const componentStyleButton = valuesInput.ButtonAppBar

    return (
            <Box className={
                valuesInput.BarStyle.Class_appBarDiv
                }>
                <AppBar>
                    <Toolbar>
                        {
                            textPage.optionsAppBar.map((item, index) => {
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
                            textContent={textPage.themesPage}
                            typeMenu="theme"
                            componentStyleButton={componentStyleButton}
                        />
                        <MenuDropDown
                            textContent={textPage.languagesPage}
                            typeMenu="language"
                            componentStyleButton={componentStyleButton}
                            setLanguage={setLanguage} 
                        />
                    </Toolbar>
                </AppBar>
            </Box>
    );
}

export default ButtonAppBar