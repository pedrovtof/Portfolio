import ButtonAppBar from '../../../module/materialDesing/appbar/appbar'
import {printf, LanguageProvider, useLanguageContext} from "../../../global/globalFunctions"

const IndexPageHome =()=> {

  return (
    <>
    <LanguageProvider>
        <ButtonAppBar
          Typography_variant="h6"
          Typography_component= "div"
          BarStyle = {{
              "Class_appBarDiv":"home-appbar-div",
              "Class_AppBarTypography":"home-header-appbar-typography",
            }}
          ButtonAppBar = {{
            "Class_ButtonAppBar":"home-header-button-appbar",
            "Class_ButtonAppBar_box":"home-header-button-appbar-box"
          }}
        />
      </LanguageProvider>
    </>
  );
}

export default IndexPageHome;