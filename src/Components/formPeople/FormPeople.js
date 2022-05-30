import { useState } from "react";
import useStore from "../../store";

const FormPeople = () =>{
    const [people, setPeople] = useState('');
    const addPeople = useStore(state => state.addPeople);

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        addPeople(people);
    }

    const handleInputChange = (name) =>{
        setPeople(name);
    }

    return(
        <form onSubmit={(e) => {handleOnSubmit(e)}}>
            <input onChange={(e) => {handleInputChange(e.target.value)}} value={people} type='text' placeholder="Name..."/>
            <button type="submit">Add Person</button>
        </form>
    )
}

export default FormPeople;