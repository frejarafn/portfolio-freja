import { NavLink } from "react-router-dom";

export default function Nav(){
    return (
        <nav>
            <NavLink to="/" end>Freja van Gilst</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>

        </nav>
    );
}