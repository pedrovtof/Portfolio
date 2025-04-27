import React                    from "react"
import { Element}               from "react-scroll"
import { useRouter }            from 'next/router'
import { useTheme }             from "@mui/material/styles"
import { translations }         from '../../core/global/i18n/translations.js'
import { BoxHomeIntro }         from '../../core/components/home/intro/boxIntro.jsx'
import { BoxHomeAboutMe }       from '../../core/components/home/aboutMe/boxAboutMe.jsx'
import { BoxHomeTechnologies }  from '../../core/components/home/technologies/boxTechnologies.jsx'
import { BoxHomeProjects }      from '../../core/components/home/projects/boxHomeProjects.jsx'
import { BoxHomeBrands }        from '../../core/components/home/brands/BoxHomeBrands.jsx'
import { BoxTestimonial }       from '../../core/components/home/testimonial/boxTestimonial.jsx'
import { BoxHomeContact }       from '../../core/components/home/contactMe/boxHomeContact.jsx'


const PortifolioPage =()=> {

    const { locale }    = useRouter()
    const theme         = useTheme()
    let t               = translations[locale] || translations['en']

    return (
        <React.Fragment>
            <BoxHomeIntro 
                BoxContentText      = {{
                "introBox":t.introBox,
                }}
                BoxClasses          = {{
                "Class_Box_Container"       :"home-intro-box-container",
                "Class_Box_Grid"            :"home-intro-box-grid",
                "Class_Box"                 :"home-intro-box-box",
                "Class_Box_Typography"      :"home-intro-box-typography",
                "Class_Box_Typography_span" :"home-intro-box-typography-span",
                "Class_Box_img"             :"home-intro-box-img"
                }}
                GridConfig          = {{
                "Grid_size"     :12,
                "Grid_columns"  :6
                }}
                TypographyConfig    = {{
                "variantH1"         :"h1",
                "variantH2"         :"h2",
                "typographyIdPrefix":"typography-introBox-prefix-name",
                "typographyIdName"  :"typography-introBox-name",
                }}
            />

        <Element id={t.listAppBar[0]} >
            <BoxHomeAboutMe 
                BoxContentText      = {{
                    "aboutMe":t.aboutMe,
                }}
                BoxClasses          = {{
                    "Class_Box_Container"               :"home-about-me-box-container",
                    "Class_Box_Grid"                    :"home-about-me-box-grid",
                    "Class_Box"                         :"home-about-me-box-box",
                    "Class_Box_Typography"              :"home-about-me-box-typography",
                    "Class_Box_img"                     :"home-about-me-box-img",
                    "Class_Box_Grid_second"             :"home-about-me-box-grid-second",
                    "Class_Box_Grid_second_box"         :"home-about-me-box-grid-second-box",
                    "Class_Box_Grid_second_box_button"  :"home-about-me-box-grid-second-box-button",
                    "Class_Box_Grid_second_box_img"     :"home-about-me-box-grid-second-box-img",
                }}
                GridConfig          = {{
                    "Grid_size"             :12,
                    "Grid_columns"          :6,
                    "Grind_columns_second"  :2
                }}
                TypographyConfig    = {{
                    "variantH1"         :"h1",
                    "variantBody1"      :"body1",
                    "typographyIdTitle" :"typography-aboutMe-title",
                    "typographyIdBody"  :"typography-aboutMe-body"
                }}
            />
        </Element>

        <Element id={t.listAppBar[1]} >
            <BoxHomeTechnologies 
                BoxContentText      = {{
                    "technologies":t.technologies,
                }}
                BoxClasses          = {{
                    "Class_Box_Container"   :"home-technologies-box-container",
                    "Class_Box_Grid"        :"home-technologies-box-grid",
                    "Class_Box_second_grid" :"home-technologies-box-grid-second",
                    "Class_Box_Grid_title"  :"home-technologies-box-grid-title",
                    "Class_Box_img"         :"home-technologies-box-img",
                }}
                TypographyConfig    = {{
                    "variant":"h3"
                }}
                GridConfig          = {{
                    "Grid_size"     :25,
                    "Grid_columns"  :5,
                }}
            />
        </Element>
        
        <Element id={t.listAppBar[2]} 
            style={{ backgroundColor: theme.palette.background.alternative }}
        >
            <BoxHomeProjects 
                BoxContentText      = {{
                "projects":t.projects,
                }}
                BoxClasses          = {{
                "Class_Box_Container"                         :"home-projects-box-container",
                "Class_Box_Container_hover"                   :"home-projects-box-container-hover",
                "Class_Box_Grid"                              :"home-projects-box-grid",
                "Class_Box_Grid_second"                       :"home-projects-box-grid-second",
                "Class_Box_Grid_hover"                        :"home-projects-box-grid-hover",
                "Class_Box_Grid_hover_second"                 :"home-projects-box-grid-hover-second",
                "Class_Box_Grid_hover_second_typography_box"  :"home-projects-box-grid-hover-second-typography-box",
                "Class_Box_Grid_hover_tech"                   :"home-projects-box-grid-hover-tech",
                "Class_Box_Grid_hover_tech_second"            :"home-projects-box-grid-hover-tech-second",
                "Class_Box_img_preview"                       :"home-projects-box-img",
                "Class_Box_img_hover_preview"                 :"home-projects-box-img-hover",
                "Class_Box_img_hover_tech"                    :"home-projects-box-img-hover-tech",
                "Class_Box_Button_Container_hover"            :"home-projects-box-button-container-hover",
                "Class_Box_Button_hover"                      :"home-projects-box-button-hover",
                "Class_Box_Typography_hover"                  :"home-projects-box-typography-hover",
                "Class_Box_Typography"                        :"home-projects-box-typography",
                }}
                TypographyConfig    = {{
                "variantH1"                       :"h1",
                "variantH2"                       :"h2",
                "variantH3"                       :"h3",
                "variantBody1"                    :"body1",
                "size_hover_box_typography_title" :"size_hover_box_typography_title",

                }}
                GridConfig          = {{
                "Grid_size"           :12,
                "Grid_columns"        :6,
                "Grid_columns_hover"  :4,
                }}
          />
        </Element>

        <Element id={t.listAppBar[3]} 
            style={{ backgroundColor: theme.palette.background.alternative }}
        >
            <BoxHomeBrands 
                BoxContentText      = {{
                    "brands":t.brands,
                }}
                BoxClasses          = {{
                    "Class_Box_Container"   :"home-brands-box-container",
                    "Class_Box_Grid"        :"home-brands-box-grid",
                    "Class_Box_Grid_Second" :"home-brands-box-grid-second",
                    "Class_Box_Typography"  :"home-brands-box-typography",
                    "Class_Box_img"         :"home-brands-box-img",
                }}
                TypographyConfig    = {{
                    "variant":"h2",
                }}
                GridConfig          = {{
                    "Grid_size"     :12,
                    "Grid_columns"  :3,
                }}
            />
        </Element>
        
        <Element id={t.listAppBar[4]} >
            <BoxTestimonial
                BoxContentText      = {{
                    "testimonial":t.testimonial,
                }}
                BoxClasses          = {{
                    "Class_Box_Container"               :  "home-testimonial-box-container",
                    "Class_Box_Typography"              :"home-testimonial-box-typography",
                    "Class_Box_MobileStepper_Typography":"home-testimonial-box-mobileStepper-typography",
                    "Class_Box_Grid"                    :"home-testimonial-box-grid",
                    "Class_Box_Grid_second"             :"home-testimonial-box-grid-second",
                    "Class_Box_Grid_second_img"         :"home-testimonial-box-grid-second-img",
                    "Class_Box_Grid_second_txt"         :"home-testimonial-box-grid-second-text",
                    "Class_Box_Paper"                   :"home-testimonial-box-paper",
                    "Class_Box_img"                     :"home-testimonial-box-img",
                    "Class_Box_Button"                  :"home-testimonial-box-button",
                    "Class_Box_MobileStepper"           :"home-testimonial-box-button-mobileStepper",
                }}
                TypographyConfig    = {{
                    "variantH2"     :"h2",
                    "variantH5"     :"h5",
                    "variantBody1"  :"body1",
                }}
                PaperConfig         = {{
                    "elevation":0,
                }}
                GridConfig          = {{
                    "Grid_size"     :12,
                    "Grid_columns"  :6,
                }}
                MobileStepperConfig = {{
                    "variant"   :"dots",
                    "position"  :"static",
                }}
                ButtonConfig        = {{
                    "size":"small"
                }}
            />
        </Element>
        
        <Element id={t.listAppBar[5]} >
            <BoxHomeContact 
                BoxContentText      = {{
                    "contact":t.contact,
                    }}
                BoxClasses          = {{
                    "Class_Box_Container"   :"home-contact-box-container",
                    "Class_Box_Typography"  :"home-contact-box-typography",
                    "Class_Box_Form"        :"home-contact-box-form",
                    "Class_Box_Grid"        :"home-contact-box-grid",
                    "Class_Box_Grid_Second" :"home-contact-box-grid-second",
                    "Class_TextField"       :"home-contact-box-textField",
                    "Class_TextArea"        :"home-contact-box-textArea",
                    "Class_Box_img"         :"home-contact-box-img",
                    "Class_Box_Button"      :"home-contact-box-button",
                    "Class_Box_Stack_Alert" :"home-contact-box-stack-alert",
                    "Class_Box_Stack"       :"home-contact-box-form-stack"
                }}
                TypographyConfig    = {{
                    "variantH5":"h5",
                    "variantH2":"h2",
                }}
                BoxConfig           = {{
                    "variant"   :"contained",
                    "component" :"form",
                }}
                TextFieldConfig     = {{
                    "variant":"outlined",
                    "label":"subject",
                    "id":"outlined",
                    "focused":"true",
                    "sx_Width":"90%",
                    "type_text":"text",
                }}
                ButtonConfig        = {{
                    "type"      :"submit",
                    "variant"   :"contained",
                }}
                GridConfig          = {{
                    "Grid_size"     :12,
                    "Grid_columns"  :6,
                }}
            />
        </Element>

        </React.Fragment> 
    )
    
}
/*
<Element id={t.listAppBar[1]} >

</Element>
*/

export default PortifolioPage;