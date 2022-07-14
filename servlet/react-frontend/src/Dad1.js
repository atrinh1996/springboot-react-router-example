import React from 'react';
import { Link, Outlet } from 'react-router-dom';


class Dad1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.dadJokes();
  }

  dadJokes = async () => {
    await fetch("/api/dadjoke1")
    .then((response) => {
      console.log("Joke 1:");
      console.log(response);
      return response.text();
    })
    .then((message) => {
      console.log(message);
      this.setState({message: message});
    });
  }

  render() {
    return (
      <div>
        <h3 className='App-title'>{this.state.message}</h3>
        <button type='button'>
                <Link 
                    to="punchline" 
                    state={{
                        id: 1
                    }}
                >
                    Reveal
                </Link>
            </button>
            <Outlet />
      </div>
      
      
    );
  }
}

export default Dad1;
