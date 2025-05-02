import React          from "react"
import RootLayout     from "../core/layout/default";
import PortifolioPage from "./home/page" 


export default function Home() {

  return (
     <RootLayout
      title="Pedro Fonseca"
    >
      <PortifolioPage />
     </RootLayout>
  )

}
