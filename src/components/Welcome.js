/*named exports */
import './Welcome.scss';
export function Welcome(){
    return(
        <div className="welcomecont">
            <h1>Welcome to Movie Finder</h1>
            <p>Here you'll be able to search for your favorite movies and receive recommendations</p>
        </div>
    );
}