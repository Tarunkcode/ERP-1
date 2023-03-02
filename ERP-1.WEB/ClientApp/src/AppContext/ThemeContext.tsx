import * as React from 'react'


import { createContext } from 'react';



export var ThemeContext = createContext({ theme: '', changeTheme: () => { } })

export default function ThemeProvider({children }: any) {
    var [theme, setTheme]: any = React.useState('light');
    const changeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
      
    }

    var value = { theme, changeTheme }
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}