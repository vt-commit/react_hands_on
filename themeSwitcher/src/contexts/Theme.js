import { createContext,useContext } from "react";

//when context is created first time initial state what values 
//should be present inside it ().
export const ThemeContext = createContext({
themeMode:"light",
darkTheme:()=>{},
lightTheme:()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}