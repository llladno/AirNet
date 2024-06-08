import {createContext, ReactNode, useState} from "react";

export const PopupContext = createContext(true);

const PopupProvider = ({children}: { children: ReactNode }) => {
    const [context, setContext] = useState<boolean>(true);


    return (
        <PopupContext.Provider value={{context, setContext}}>
            {children}
        </PopupContext.Provider>
    );
};

export default PopupProvider;