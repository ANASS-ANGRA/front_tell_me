import { Link } from "react-router-dom"
import "./style/nav_bar.css"


function Nav_bar(){
    return(
        <div id="nav_bar">
            <div id="nav_bar_titre">
                <h1>Tell me</h1>
            </div>
            <div >
                <ul id="nav_bar_li">
                    <li><Link to="/">accueil</Link>  </li>
                    <li><Link to="/post">post</Link></li>
                    <li><Link to="/profile">profil</Link></li>
                </ul>

            </div>
        </div>
    )
}
export default Nav_bar