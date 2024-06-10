import './App.css'
import Calendar from "./components/Calendar/Calendar.tsx";
import Popup from "./components/Popup/Popup.tsx";
import PopupProvider from "./components/PopupProvider/PopupProvider.tsx";
import DataChangeProvider from "./components/DataChangeProvider/DataChangeProvider.tsx";

function App() {


    return (
        <PopupProvider>
            <DataChangeProvider>
                <Calendar/>
                <Popup/>
            </DataChangeProvider>
        </PopupProvider>
    )
}

export default App
