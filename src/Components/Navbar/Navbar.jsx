import './Navbar.css'
const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-logo'>TechFlare</div>
            <div className='search'>
                <label htmlFor="searchh"></label>
                <input className='search-bar' type="text" placeholder='search here' id='searchh' />
                </div>
            <ul className="nav-menu">
                <li className='hove'>Home</li >
                <li className='hove'>Explore</li >
                <li className='hove'>About</li>
                <li className='hove'>Carrers</li>
                <li className='hove'>contact</li >
            </ul>

        </div>
    )
}


export default Navbar
