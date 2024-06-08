import {ReactNode} from "react";
import './ANButton.css'

const AnButton = ({children, ...props}: {children: ReactNode}) => {
    return (
        <button className='default__button' {...props}>
            {children}
        </button>
    );
};

export default AnButton;