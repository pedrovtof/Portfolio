"use client"
import IndexPageHome from './core/pages/home/page'
import {LanguageProvider} from "./global/globalFunctions"
export default function Home() {
  return (
      <LanguageProvider>
       <IndexPageHome />
      </LanguageProvider>  
  );
}
