import Peoples from "./Components/peoples/peoples";
import FormPeople from "./Components/formPeople/FormPeople";
import styles from './global.module.scss';
import { useEffect } from "react";
import {settingStore} from "./store";

const App = () =>{
    const toggleDarkTheme = settingStore(state => state.toggleDarkTheme);
    const darkTheme = settingStore(state => state.darkTheme);

    const handleChangeTheme = () =>{
        toggleDarkTheme();
    }

    const renderTheme = (darkTheme) =>{
        if(darkTheme){
            return styles['dark-theme']
        }else{
            return styles['white-theme'];
        }
    }
 

    return(
        <div className={renderTheme(darkTheme)}>
            <button onClick={()=>{handleChangeTheme()}}>Toggle Dark Theme</button>
            <FormPeople/>
            <Peoples/>
        </div>
    )
}

export default App;