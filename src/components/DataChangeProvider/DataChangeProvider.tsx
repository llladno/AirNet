import {createContext, ReactNode, useState} from "react";
import {AllTasksI} from "../../types/types.ts";

export interface Props {
    dataContext: AllTasksI,
    setDataContext: (data: AllTasksI) => void
}

export const PopupDataContext = createContext<Props>({
    dataContext: {},
    setDataContext: () => {}})

const DataChangeProvider = ({children}: { children: ReactNode }) => {
    const [dataContext, setDataContext] = useState<AllTasksI>({});

    return (
        <PopupDataContext.Provider value={{dataContext, setDataContext}}>
            {children}
        </PopupDataContext.Provider>
    );
};

export default DataChangeProvider;