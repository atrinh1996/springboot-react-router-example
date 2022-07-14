import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './Main';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
// import Dad1 from './Dad1';
// import Dad2 from './Dad2';
import Punchline from './Punchline';
import DadJoke from './DadJoke';


function App() {

  return(
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<Main />} >


            <Route path="dadjoke" element={<DadJoke />}>
              <Route path="punchline" element={<Punchline />} />
            </Route>

            
          </Route>


      </Routes>
    </BrowserRouter>
  );

}

export default App;


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     this.dadJokes();
//   }

//   dadJokes = () => {
//     // fetch("http://localhost:8080/api/dadjokes")
//     fetch("/api/dadjokes")
//     .then((response) => {
//       console.log(response);
//       return response.text();
//     })
//     .then((message) => {
//       // console.log(message);
//       this.setState({message: message});
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h3 className='App-title'>{this.state.message}</h3>
          
//         </header>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
