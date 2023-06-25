import "../forcompetences/styles/Langue.css";
import fr from '../forcompetences/media/fr.ico';
import en from '../forcompetences/media/en.ico';
function Langue(){




    return(<div className="langues">
             <h2>Langues</h2>
             <li>Français-Marternelle</li>
             <span>
                <img src={fr} alt="icon" id="imageFr"/>
             </span>
             <li>Anglais-C1</li>
             <span>
                <img src={en} alt="icon" id="imageEn"/>
             </span>
          </div>);
}

export default Langue;
