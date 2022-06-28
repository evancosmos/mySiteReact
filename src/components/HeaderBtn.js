import "./HeaderBtn.css"

const HeaderBtn = (props) => {
    return (
        <div className="ribbonBtn">
            <div>{props.title}</div>
        </div>
    )
}

export default HeaderBtn