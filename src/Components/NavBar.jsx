import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <h2>
            <div id="navbar">
                <Link to="/">Home</Link>
                <Link to="/blue">Blue</Link>
                <Link to="/red">Red</Link>
                <Link to="/purple">Purple</Link>
                <Link to="/black">Black</Link>
            </div>
        </h2>
        
    );
}