import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <header>
            <nav>
                <div>
                    <h1>To do list</h1>
                </div>
                <div>
                    <Link to="/">
                        <button>List</button>
                    </Link>
                    <Link to="/create">
                        <button>Create</button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;