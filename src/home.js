import { Link } from "react-router-dom"
import "./style/Home.css"
import { useEffect } from "react"




function Home(){

    return(
       <div id="Home">
          <div id="text_home">
            <h1>Partagez vos problèmes et trouvez des solutions ensemble !</h1>
            <p>Bienvenue sur tell me ! Notre plateforme a pour but de permettre aux étudiants de partager leurs problèmes et leurs préoccupations concernant leur établissement. Nous croyons que la collaboration et la discussion sont la clé pour trouver des solutions efficaces et améliorer la vie étudiante. Rejoignez notre communauté dès maintenant pour échanger et trouver des réponses ensemble !</p>
             <button className="button_home"><Link to="/login">connection</Link></button>
             <button className="button_home"><Link to="/inscri">inscription</Link></button>
          </div>
          <div id="image">

          </div>
       </div>
    )
}
export default Home