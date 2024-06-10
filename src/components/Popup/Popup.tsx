import './popup.css'
import {FormEvent, useContext} from "react";
import {PopupContext} from "../PopupProvider/PopupProvider.tsx";
import ANButton from "../common/ANButton/ANButton.tsx";
import {addTask, TaskI} from "../../types/types.ts";
import Store from "../../store/store.ts";
import {PopupDataContext, Props} from "../DataChangeProvider/DataChangeProvider.tsx";
import ANIconButton from "../common/ANIconButton/ANIconButton.tsx";

const Popup = () => {
    const {popupContext, setPopupContext} = useContext(PopupContext)
    const {setDataContext} = useContext<Props>(PopupDataContext)

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const inputs = e.target as HTMLFormElement;
        let data: addTask = {
            color: '',
            description: '',
            time: '',
            title: '',
            type: '',
            day: 0,
            month: 0,
            year: 0
        }
        Array.from(inputs).map((el) => {
            if (el instanceof HTMLInputElement) {
                if (el.name === 'timeform' || el.name === 'timeto') {
                    el.name === 'timeform' ? data.time = el.value : data.time += '-' + el.value
                } else {
                    data[el.name as keyof TaskI] = el.value
                }
            }
        })

        data = {...data, day: popupContext.data.day, month: popupContext.data.month, year: popupContext.data.year}
        setDataContext(Store.addTask(data))
    }

    function deleteTask(task: addTask) {
        setDataContext(Store.deleteTask(task))
    }

    return (
        <>{popupContext.isOpen && <div className='popup' onClick={() => setPopupContext(false)}>
            {!popupContext.data.title ?
                <form onSubmit={handleSubmit} className='popup__content' onClick={(e) => e.stopPropagation()}>
                    <h2>{popupContext.data ? `${popupContext.data.day}.${popupContext.data.month}.${popupContext.data.year}` : 'Popup'}</h2>
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
                </form> : <div className='popup__content-task'>
                    <h2>Название: {popupContext.data.title}</h2>
                    <p>Описание: {popupContext.data.description}</p>
                    <p>Время: {popupContext.data.time}</p>
                    <div className='popup__content__color'>
                        <p>Цвет</p>

                        <div className='popup__content__color-show'
                             style={{backgroundColor: popupContext.data.color}}></div>
                    </div>
                    <ANIconButton style={{background: 'red', color: 'white'}} onClick={() => deleteTask(popupContext.data)}>
                        Удалить
                    </ANIconButton>

                </div>}
        </div>}</>
    );
};

export default Popup;