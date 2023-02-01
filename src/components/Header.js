import {FaBars, FaTimes} from "react-icons/fa"
import {useRef} from "react"
import "../Styles/header.scss"

function Header(){
    const navRef = useRef();

    const showHeader = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <h3>mmdb</h3>
            <div className="header-right">
                <nav ref={navRef}>
                    <a href="/">Read List</a>
                    <a href="/completed">Completed</a>
                    <a href="/add">+ Add</a>
                    <button className="nav-btn nav-close-btn" onClick={showHeader}>
                        <FaTimes></FaTimes>
                    </button>
                </nav>
                <button className="nav-btn" onClick={showHeader}>
                    <FaBars></FaBars>
                </button>
            </div>
        </header>
    )
}

export default Header
