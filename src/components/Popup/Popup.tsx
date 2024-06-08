import './popup.css'
import {useContext} from "react";
import {PopupContext} from "../PopupRovider/PopupProvider.tsx";
import ANIconButton from "../common/ANIconButton/ANIconButton.tsx";
import ANButton from "../common/ANButton/ANButton.tsx";
import {TaskI} from "../../types/types.ts";

const Popup = () => {
    const {context, setContext} = useContext<boolean>(PopupContext);

    function handleSubmit(e: any) {
        e.preventDefault();
        const inputs = e.target as HTMLFormElement;
        let data: TaskI = {}
        Array.from(inputs).map((el) => {
            if (el instanceof HTMLInputElement) {
                if (el.name === 'timeform' || el.name === 'timeto') {
                    console.log('ok')
                    el.name === 'timeform' ? data.time = el.value : data.time += '-' + el.value
                } else {
                    data[el.name] = el.value
                }
            }
        })
        console.log(data)
    }

    return (
        <>{context && <div className='popup' onClick={() => setContext(false)}>
            <form onSubmit={handleSubmit} className='popup__content' onClick={(e) => e.stopPropagation()}>
                <h1>Popup</h1>
                <p>Название</p>
                <input name='title'/>
                <p>Описание</p>
                <input name='description'/>
                <p>Цвет</p>
                <input name='color' type='color' defaultValue='#9b9b9b'/>
                <p>Время</p>

                <div>
                    C <input name='timeform' type='time'/> до <input name='timeto' type='time'/>
                </div>
                <ANButton type='submit'>Создать</ANButton>
            </form>
        </div>}</>
    );
};

export default Popup;