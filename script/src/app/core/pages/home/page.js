"use client"
import * as React from 'react'
import ButtonAppBar from '../../../module/materialDesing/appbar/appbar'
import {printf, useLanguageContext} from "../../../global/globalFunctions"
import pageContentText from '../../../../../public/content/pages/home.json'
import {
  BoxHomeIntro,
  BoxHomeAboutMe,
  BoxHomeTecnologies
} from './utils'
import { Element} from "react-scroll";

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
      aboutMe: pageContentText.languages[currentLanguage].aboutMe,
      technologies: pageContentText.languages[currentLanguage].technologies
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
              "Class_appBar_breadcrumbs":"home-header-appbar-breadcrumbs",
              "Class_AppBarTypography_box":"home-header-appbar-typography-box",
            }}
          ButtonAppBar = {{
            "Class_ButtonAppBar":"home-header-button-appbar",
            "Class_ButtonAppBar_box":"home-header-button-appbar-box",
          }}
          ContentText = {{
              "optionsAppBar":textPage.optionsAppBar,
              "themesPage":textPage.themesPage,
              "languagesPage":textPage.languagesPage
            }}
          ScrollLinkConfig = {{
            "ScrollLink_smooth":true,
            "ScrollLink_duration":500,
            "ScrollLink_offset":-50,
            "ScrollLink_spy":true
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
          GridConfig = {{
            "Grid_size":12,
            "Grid_columns":6
          }}
          TypographyConfig = {{
            "variantH1":"h1",
            "variantH2":"h2",
            "typographyIdPrefix":"typography-introBox-prefix-name",
            "typographyIdName":"typography-introBox-name",
          }}
        />
      <Element key={0} >
        <BoxHomeAboutMe 
          BoxContentText = {{
            "aboutMe":textPage.aboutMe,
          }}
          BoxClasses = {{
            "Class_Box_Container":"home-about-me-box-container",
            "Class_Box_Grid":"home-about-me-box-grid",
            "Class_Box":"home-about-me-box-box",
            "Class_Box_Typography":"home-about-me-box-typography",
            "Class_Box_img":"home-about-me-box-img",
            "Class_Box_Grid_second":"home-about-me-box-grid-second",
            "Class_Box_Grid_second_box":"home-about-me-box-grid-second-box",
            "Class_Box_Grid_second_box_button":"home-about-me-box-grid-second-box-button",
            "Class_Box_Grid_second_box_img":"home-about-me-box-grid-second-box-img",
          }}
          GridConfig = {{
            "Grid_size":12,
            "Grid_columns":6,
            "Grind_columns_second":2
          }}
          TypographyConfig = {{
            "variantH1":"h1",
            "variantBody1":"body1",
            "typographyIdTitle":"typography-aboutMe-title",
            "typographyIdBody":"typography-aboutMe-body"
          }}
        />
      </Element>
      <Element key={1} >
        <BoxHomeTecnologies 
          BoxContentText = {{
            "technologies":textPage.technologies,
          }}
          BoxClasses = {{
            "Class_Box_Container":"home-technologies-box-container",
            "Class_Box_Grid":"home-technologies-box-grid",
            "Class_Box_second_grid":"home-technologies-box-grid-second",
            "Class_Box_Grid_title":"home-technologies-box-grid-title",
            "Class_Box_img":"home-technologies-box-img",
          }}
          TypographyConfig = {{
            "variant":"h3"
          }}
          GridConfig = {{
            "Grid_size":25,
            "Grid_columns":5,
          }}
        />
      </Element>
    </>
  );
}

export default IndexPageHome;