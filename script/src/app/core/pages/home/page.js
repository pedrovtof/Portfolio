"use client"
import * as React from 'react'
import ButtonAppBar from '../../../module/materialDesing/appbar/appbar'
import { useTheme } from "@mui/material/styles";
import {printf, useLanguageContext} from "../../../global/globalFunctions"
import pageContentText from '../../../../../public/content/pages/home.json'
import {
  BoxHomeIntro,
  BoxHomeAboutMe,
  BoxHomeTecnologies,
  BoxHomeProjects,
  BoxHomeBrands,
  BoxTestimonial
} from './utils'
import { Element} from "react-scroll";

const IndexPageHome =()=> {


  const [textPage, setTextPage] = React.useState({
    optionsAppBar: [],
    themesPage: [],
    languagesPage: [],
    introBox: [],
    aboutMe:[],
    projects:[],
    brands:[],
    testimonial:[]
  })


  const { language } = useLanguageContext();

  const theme = useTheme();
 
  React.useEffect(()=>{ 
      const currentLanguage = language || "English"
      const alterTextPage = {
        optionsAppBar: pageContentText.languages[currentLanguage].listAppBar ,
        themesPage: pageContentText.languages[currentLanguage].themes,
        languagesPage: pageContentText.languages[currentLanguage].languages,
        introBox: pageContentText.languages[currentLanguage].introBox,
        aboutMe: pageContentText.languages[currentLanguage].aboutMe,
        technologies: pageContentText.languages[currentLanguage].technologies,
        projects: pageContentText.languages[currentLanguage].projects,
        brands: pageContentText.languages[currentLanguage].brands,
        testimonial: pageContentText.languages[currentLanguage].testimonial
      }
      setTextPage(alterTextPage);
    }, [language])
  
  

  return (
    <React.Fragment>
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
            "ScrollLink_duration":800,
            "ScrollLink_offset":-100,
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

      <Element id={textPage.optionsAppBar[0]} >
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

      <Element id={textPage.optionsAppBar[1]} >
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

      <Element 
        id={textPage.optionsAppBar[2]} 
        style={{ backgroundColor: theme.palette.background.alternative }}
      >
          <BoxHomeProjects 
            BoxContentText = {{
              "projects":textPage.projects,
            }}
            BoxClasses = {{
              "Class_Box_Container":"home-projects-box-container",
              "Class_Box_Container_hover":"home-projects-box-container-hover",
              "Class_Box_Grid":"home-projects-box-grid",
              "Class_Box_Grid_second":"home-projects-box-grid-second",
              "Class_Box_Grid_hover":"home-projects-box-grid-hover",
              "Class_Box_Grid_hover_second":"home-projects-box-grid-hover-second",
              "Class_Box_Grid_hover_tech":"home-projects-box-grid-hover-tech",
              "Class_Box_Grid_hover_tech_second":"home-projects-box-grid-hover-tech-second",
              "Class_Box_img_preview":"home-projects-box-img",
              "Class_Box_img_hover_preview":"home-projects-box-img-hover",
              "Class_Box_img_hover_tech":"home-projects-box-img-hover-tech",
              "Class_Box_Button_Container_hover":"home-projects-box-button-container-hover",
              "Class_Box_Button_hover":"home-projects-box-button-hover",
              "Class_Box_Typography_hover":"home-projects-box-typography-hover",
              "Class_Box_Typography":"home-projects-box-typography",
            }}
            TypographyConfig = {{
              "variantH1":"h1",
              "variantH2":"h2",
              "variantH3":"h3",
              "variantBody1":"body1",
              "size_hover_box_typography_title":"size_hover_box_typography_title",

            }}
            GridConfig = {{
              "Grid_size":12,
              "Grid_columns":6,
              "Grid_columns_hover":4,
            }}
          />
      </Element>

      <Element 
        id={textPage.optionsAppBar[3]} 
      >
        <BoxHomeBrands 
           BoxContentText = {{
            "brands":textPage.brands,
          }}
          BoxClasses = {{
            "Class_Box_Container":"home-brands-box-container",
            "Class_Box_Grid":"home-brands-box-grid",
            "Class_Box_Grid_Second":"home-brands-box-grid-second",
            "Class_Box_Typography":"home-brands-box-typography",
            "Class_Box_img":"home-brands-box-img",
          }}
          TypographyConfig = {{
            "variant":"h2",
          }}
          GridConfig = {{
            "Grid_size":12,
            "Grid_columns":3,
          }}
        />
      </Element>

      <Element 
        id={textPage.optionsAppBar[4]}
      >
        <BoxTestimonial
          BoxContentText = {{
            "testimonial":textPage.testimonial,
          }}
          BoxClasses = {{
            "Class_Box_Container":"home-testimonial-box-container",
            "Class_Box_Typography":"home-testimonial-box-typography",
            "Class_Box_MobileStepper_Typography":"home-testimonial-box-mobileStepper-typography",
            "Class_Box_Grid":"home-testimonial-box-grid",
            "Class_Box_Grid_second":"home-testimonial-box-grid-second",
            "Class_Box_Grid_second_img":"home-testimonial-box-grid-second-img",
            "Class_Box_Grid_second_txt":"home-testimonial-box-grid-second-text",
            "Class_Box_Paper":"home-testimonial-box-paper",
            "Class_Box_img":"home-testimonial-box-img",
            "Class_Box_Button":"home-testimonial-box-button",
            "Class_Box_MobileStepper":"home-testimonial-box-button-mobileStepper",
          }}
          TypographyConfig = {{
            "variantH2":"h2",
            "variantH5":"h5",
            "variantBody1":"body1",
          }}
          PaperConfig = {{
            "elevation":0,
          }}
          GridConfig = {{
            "Grid_size":12,
            "Grid_columns":6,
          }}
          MobileStepperConfig = {{
            "variant":"dots",
            "position":"static",
          }}
          ButtonConfig = {{
            "size":"small"
          }}
        />
      </Element>

    </React.Fragment>
  );
  
}

export default IndexPageHome;