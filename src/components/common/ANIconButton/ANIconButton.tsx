import './ANIconButton.css'
import {ButtonHTMLAttributes, FC, ReactNode} from "react";

interface ANIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}

const ANIconButton: FC<ANIconButtonProps> = ({children, ...props}: {
    children: ReactNode
}) => {
    return (
        <button className='default__button-icon' {...props}>
           {children}
        </button>
    );
};

export default ANIconButton;