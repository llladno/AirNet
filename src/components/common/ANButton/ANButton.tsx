import {ButtonHTMLAttributes, FC, ReactNode} from "react";
import './ANButton.css'

interface ANButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

const AnButton: FC<ANButtonProps> = ({children, ...props}: {children: ReactNode}) => {
    return (
        <button className='default__button' {...props}>
            {children}
        </button>
    );
};

export default AnButton;