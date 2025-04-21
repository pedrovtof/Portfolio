import React            from "react"
import Footer           from "./footer"
import _Header          from "./header"
import ThemeProvider    from "../theme/theme"

const RootLayout = ({children, title}) => {
   
    return (
        <React.Fragment>
            <ThemeProvider>
                <_Header 
                    title={title}
                />
                    <main>
                        {children}
                    </main>
                <Footer/>
            </ThemeProvider>
        </React.Fragment>
    )

}

export default RootLayout;