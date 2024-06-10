import {createContext, ReactNode, useState} from "react";

export interface PopupContextI {
    popupContext: {
        isOpen: boolean
        data: any
    }
    setPopupContext: (data: any) => void
}

export const PopupContext = createContext<PopupContextI>({
    popupContext: {
        isOpen: false,
        data: {}
    },
    setPopupContext: () => {}});

const PopupProvider = ({children}: { children: ReactNode }) => {
    const [popupContext, setPopupContext] = useState({
        isOpen: false,
        data: {}
    });

    return (
        <PopupContext.Provider value={{popupContext, setPopupContext}}>
            {children}
        </PopupContext.Provider>
    );
};

export default PopupProvider;