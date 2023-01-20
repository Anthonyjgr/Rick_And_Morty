import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return (
        <nav className={style.container}>
            <Link to="about" >ABOUT</Link>
            <Link to="home" >HOME</Link>
            <SearchBar onSearch={onSearch} />
            <Link to="/" >LOG OUT</Link>
        </nav>
    )
}

export default Nav;