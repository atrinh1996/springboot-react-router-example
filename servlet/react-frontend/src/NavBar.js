import { Link } from "react-router-dom";


function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><Link to="/dadjoke" state={{id: 1}}>Dad Joke 1</Link></li>
                    <li className="nav-item"><Link to="/dadjoke" state={{id: 2}}>Dad Joke 2</Link></li>
                </ul>
            </div>
        </nav>
        
    );
}

export default NavBar;