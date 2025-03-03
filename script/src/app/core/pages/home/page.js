"use client"
import * as React from 'react'
import ButtonAppBar from '../../../module/materialDesing/appbar/appbar'
import {printf, useLanguageContext} from "../../../global/globalFunctions"
import pageContentText from '../../../../../public/content/pages/home.json'
import {
  BoxHomeIntro
} from './utils'

const IndexPageHome =()=> {
  const { language } = useLanguageContext();

  const [textPage, setTextPage] = React.useState({
    optionsAppBar: [],
    themesPage: [],
    languagesPage: [],
    introBox: [],
    aboutMe:[]
  })

  React.useEffect(()=>{
    const currentLanguage = language
    const alterTextPage = {
      optionsAppBar: pageContentText.languages[currentLanguage].listAppBar ,
      themesPage: pageContentText.languages[currentLanguage].themes,
      languagesPage: pageContentText.languages[currentLanguage].languages,
      introBox: pageContentText.languages[currentLanguage].introBox,
      aboutMe: pageContentText.languages[currentLanguage].aboutMe
    }

    setTextPage(alterTextPage);
  }, [language])


  return (
    <>
      <ButtonAppBar
        Typography_variant="h6"
        Typography_component= "div"
        BarStyle = {{
            "Class_appBarDiv":"home-appbar-div",
            "Class_toolbar":"home-appbar-div-appbar-toolbar",
            "Class_AppBarTypography":"home-header-appbar-typography",
          }}
        ButtonAppBar = {{
          "Class_ButtonAppBar":"home-header-button-appbar",
          "Class_ButtonAppBar_box":"home-header-button-appbar-box"
        }}
        ContentText = {{
            "optionsAppBar":textPage.optionsAppBar,
            "themesPage":textPage.themesPage,
            "languagesPage":textPage.languagesPage
          }}
      />
      <BoxHomeIntro 
          BoxContentText = {{
            "introBox":textPage.introBox,
          }}
          BoxClasses = {{
            "Class_Box_Container":"home-intro-box-container",
            "Class_Box_Grid":"home-intro-box-grid",
            "Class_Box":"home-intro-box-box",
            "Class_Box_Typography":"home-intro-box-typography",
            "Class_Box_Typography_span":"home-intro-box-typography-span",
            "Class_Box_img":"home-intro-box-img"
          }}
      />
    </>
  );
}

export default IndexPageHome;