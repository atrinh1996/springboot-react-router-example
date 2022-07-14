import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { Link, Outlet } from 'react-router-dom';


function Punchline(){ 
    let { state } = useLocation();
    let { id } = state;
    console.log(id);

    let [message, setMessage] = useState('');
    let URL = `/api/dadjoke${id}/punchline`;


    useEffect(() => {
        async function fetchData() {
            console.log(`Punchline: ${id}`)
            let response = await fetch(URL);
            let text = await response.text();
            console.log(response);
            console.log(text);
            setMessage(text);
        }
        fetchData();
    }, [URL, id]);

    return (
        <h3 className='App-title'>{message}</h3>
    );
}


export default Punchline