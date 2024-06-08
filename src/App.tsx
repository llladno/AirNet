import './App.css'
import Calendar from "./components/Calendar/Calendar.tsx";
import Popup from "./components/Popup/Popup.tsx";
import PopupProvider from "./components/PopupRovider/PopupProvider.tsx";
function App() {


    return (
        <PopupProvider>
            <Calendar/>
            <Popup />
        </PopupProvider>
    )
}

export default App
