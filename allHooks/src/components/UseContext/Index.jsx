import React, { useState} from "react";

export const GlobalContext= React.createContext (null)

function GlobalState({children}){

    const [theme, setTheme]=useState('light')

    return (
        <GlobalContext.Provider value={{theme, setTheme}}>
        {children}
      </GlobalContext.Provider>
    )
   
}
export default GlobalState
