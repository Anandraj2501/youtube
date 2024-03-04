import { createContext, useState } from "react";

const ToggleContext = createContext();

const ToggleContextProvider = ({children})=>{
    const [isSidebaropen,setisSidebaropen] = useState(false);

    const toggleSidebar=()=>{
        setisSidebaropen(!isSidebaropen);
    };

    return(
        <ToggleContext.Provider value={{toggleSidebar,isSidebaropen}}>
            {children}
        </ToggleContext.Provider>
    )
}

export  {ToggleContextProvider,ToggleContext}