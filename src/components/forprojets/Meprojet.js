import "../forprojets/styles/Meprojet.css";

function Meprojet(){

const textMeprojet = (
    <div>
        <div className="p1">
            <h2>Maison Intelligene/ Python et R </h2>
            <p>
                <li><i className="fas fa-angle-right"></i>Choisir des capteurs tinkerkit et led (Capteur de température, digital.)</li>
                <li><i className="fas fa-angle-right"></i>Aide aux devoirs donnés par les enseignants en classe </li>
                <li><i className="fas fa-angle-right"></i>Générer un programme C sous Arduino et récupérer les données</li>
                <li><i className="fas fa-angle-right"></i>Créer un accès à distance aux données via l’interface Raspberry</li>
            </p>
        </div>
        <div className="p2">
            <h2>Construction de base de données / SQL</h2>
            <p>
                <li><i className="fas fa-angle-right"></i>Créer le schéma de base de données</li>
                <li><i className="fas fa-angle-right"></i>Manipuler les données et créer des vues</li>
                <li><i className="fas fa-angle-right"></i>Faciliter et automatiser des taches au sein de la base de données</li>

            </p>
        </div>
        <div id="p3"> 
            <h2>Application de gestion de fichiers multimédia (Rust)</h2>
            <p>
                <li><i className="fas fa-angle-right"></i>Analyser récursivement un répertoire pour collecter les fichiers</li>
                <li><i className="fas fa-angle-right"></i>Effectuer une recherche sur les données gérées</li>
                <li><i className="fas fa-angle-right"></i>Générer un fichier Mark down contenant le résultat de la requête</li>
                
            </p>
        </div>
        <div id="p4">
            <h2>Consultation de données via une plateforme web/ Html,Js</h2>
            <p>
                <li><i className="fas fa-angle-right"></i>Consultation de données via une plateforme web (HTML,Css, JavaScript) </li>
                <li><i className="fas fa-angle-right"></i>Utiliser Github pour la gestion du projet et de mise à jour</li>
                <li><i className="fas fa-angle-right"></i>Déployer l’application sur un server</li>
                
            </p>
        </div>
        
    </div>
);

return (textMeprojet);
}
export default Meprojet;