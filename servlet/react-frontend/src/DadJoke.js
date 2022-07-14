import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function DadJoke() {
    let { state } = useLocation();
    let { id } = state;
    console.log(id);
    console.log(typeof id)

    let [message, setMessage] = useState('');
    let URL = `/api/dadjoke${id}`;

    useEffect(() => {
        async function fetchData() {
            console.log(`DadJoke ${id}:`)
            let response = await fetch(URL);
            let text = await response.text();
            console.log(response);
            console.log(text);
            setMessage(text);
        }
        fetchData();
    }, [URL, id]);

    return(
        <div>
        <h3 className='App-title'>{message}</h3>
        <button type='button'>
                <Link 
                    to="punchline" 
                    state={{
                        id: id
                    }}
                >
                    Reveal
                </Link>
            </button>
            <Outlet />
      </div>
    );
}

export default DadJoke;
