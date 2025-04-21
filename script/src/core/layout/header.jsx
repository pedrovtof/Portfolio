import React            from "react"
import Head             from "next/head"
import NavBar           from "./navbar/appBar"
import {translations}   from '../global/i18n/translations'
import { useRouter }    from 'next/router'

const _Header = (props) =>{

    const { locale }    = useRouter()
    let t               = translations[locale] || translations['en']
    
    return(
        <React.Fragment>
            <Head>
                <title>
                    {props.title}
                </title>
                <meta 
                    name    ="viewport" 
                    content ="width=device-width, initial-scale=1"
                />
                <link 
                    rel     ="icon" 
                    href    ="./favicon.ico"
                />
            </Head>
            <NavBar
                Typography_variant      = "h6"
                Typography_component    = "div"
                BarStyle                = {{
                    "Class_appBarDiv"           :"home-appbar-div",
                    "Class_toolbar"             :"home-appbar-div-appbar-toolbar",
                    "Class_AppBarTypography"    :"home-header-appbar-typography",
                    "Class_appBar_breadcrumbs"  :"home-header-appbar-breadcrumbs",
                    "Class_AppBarTypography_box":"home-header-appbar-typography-box"
                }}
                ButtonAppBar            = {{
                    "Class_ButtonAppBar"    :"home-header-button-appbar",
                    "Class_ButtonAppBarIcon":"home-header-button-appbar-icon",
                    "Class_ButtonAppBar_box":"home-header-button-appbar-box",
                }}
                ContentText             = {{
                    "optionsAppBar" :t.listAppBar,
                    "themesPage"    :t.themes,
                    "languagesPage" :t.languages
                }}
                ScrollLinkConfig        = {{
                    "ScrollLink_smooth"     :true,
                    "ScrollLink_duration"   :800,
                    "ScrollLink_offset"     :-100,
                    "ScrollLink_spy"        :true
                }}
            />
        </React.Fragment>
    )
    
}

export default _Header;