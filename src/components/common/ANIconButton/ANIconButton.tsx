import './ANIconButton.css'
import {ReactNode} from "react";

const ANIconButton = ({children, ...props}: {
    children: ReactNode
}) => {
    return (
        <button className='default__button-icon' {...props}>
           {children}
        </button>
    );
};

export default ANIconButton;