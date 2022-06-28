import "./Header.css"
import HeaderBtn from "./HeaderBtn"

const Header = () => {
    return (
        <div className="ribbon">
            <HeaderBtn title="Home"/>
            <HeaderBtn title="Photos"/>
            <HeaderBtn title="Contact"/>
        </div>
    )
}

export default Header