import {createContext, ReactNode, useState} from "react";

export const PopupContext = createContext({isOpen: true, data: {}});

const PopupProvider = ({children}: { children: ReactNode }) => {
    const [popupContext, setPopupContext] = useState({
        isOpen: true,
        data: {}
    });

    return (
        <PopupContext.Provider value={{popupContext, setPopupContext}}>
            {children}
        </PopupContext.Provider>
    );
};

export default PopupProvider;