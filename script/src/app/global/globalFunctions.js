"use client";
import React, { createContext, useContext, useState } from "react";

function printf(arg){
    console.log(arg)
}

const LanguageContext = createContext();

const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
      throw new Error("useLanguageContext");
  }
  return context;
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("English"); 

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

module.exports = {
    printf,
    useLanguageContext,
    LanguageProvider
}


