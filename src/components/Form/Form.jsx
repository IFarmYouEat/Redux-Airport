import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Form () {
    const [airline, setAirline] = useState('');
    const dispatch = useDispatch();

    const submitAirline = (event) => {
        event.preventDefault();
        let action = {type: "ADD_AIRLINE", payload: {airline}}
        dispatch(action);
        setAirline('')
    }


    return(
        <form onSubmit={submitAirline}>
            <input placeholder='Airline Name' value={airline} onChange={(event) => setAirline(event.target.value)}/>
            <button type ="submit">Add Airline</button>
        </form>
     

    )
}

export default Form;