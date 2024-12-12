import './NavBar.scss';
/*default exports */
function NavBar(){
    return(
        <div className="navbarcont">
            <p>Logo Here</p>
            <div className="rightnav">
                <p>Favorites</p>
                <p>Trending</p>
                <p>Shows</p>
                <p>All</p>
                <div className="searchcont">
                    Search goes here
                </div>
            </div>
        </div>
    );
}

export default NavBar;