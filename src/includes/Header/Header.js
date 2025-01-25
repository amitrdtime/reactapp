
function Header(props) {
    return (
        <header className="bg-primary text-white text-center py-3">
            <h1> {props.companyName} {props.fname} </h1>
        </header>
    )
}

export default Header;