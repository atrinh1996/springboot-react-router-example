import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


function Dad2(){ 
    let [message, setMessage] = useState('');
    let URL = "/api/dadjoke2";

    useEffect(() => {
        async function fetchData(url) {
            console.log("Joke 2:")
            let response = await fetch(url);
            let text = await response.text();
            console.log(response);
            console.log(text);
            setMessage(text);
        }
        fetchData(URL);
    }, [URL]);

    return (
        <div>
            <h3 className='App-title'>{message}</h3>
            <button type='button'>
                <Link 
                    to="punchline" 
                    state={{
                        id: 2
                    }}
                >
                    Reveal
                </Link>
            </button>
            <Outlet />
        </div>
        
    );
}

export default Dad2;

// class Dad2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     this.dadJokes();
//   }

//   dadJokes = async () => {
//     await fetch("/api/dadjoke2")
//     .then((response) => {
//       console.log("Joke 2:");
//       console.log(response);
//       return response.text();
//     })
//     .then((message) => {
//       console.log(message);
//       this.setState({message: message});
//     });
//   }

//   render() {
//     return (
//       <h3 className='App-title'>{this.state.message}</h3>
//     );
//   }
// }

// export default Dad2;
