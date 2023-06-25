import "../forhome/stlyes/Mehome.css";
import cv from "../forhome/media/cv.pdf";
const textHome = (
        
<div className = "home">
      <h2 id="titre">Data Scientist/CDI</h2>
      <p id = "phome">
      Passionné par l’informatique à travers le développement et l’intelligence artificielle,<br></br>
      Curieux et Rigoureux, j’adore relever des challenges.<br></br>
      Actuellement apprenti data scientist, je suis à la recherche d’un poste en CDI 
      </p>
      <hr></hr>
      <a href={cv} alt="CV Aboubakar sidik MEITE" target = "_blank" id = "textCV">
      <button id = "buttonCV">Télécharger mon CV</button>
      </a>
     
</div>
);
function Mehome(){

return (textHome);
}
export default Mehome;
