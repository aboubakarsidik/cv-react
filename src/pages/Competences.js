import React from "react";
import Navigation from "../components/Navigation";
import Programmation from "../components/forcompetences/Programmation";
import Certificat from "../components/forcompetences/Certificat";
import "../components/forcompetences/styles/Programmation.css";
import Langues from "../components/forcompetences/Langue";
import Interet from "../components/forcompetences/Interet";


function Competences(){


    return (<div>
             <Navigation/>
             
              <Langues/>
              
              <Certificat/>
              
              <Programmation/>
              
              <Interet/> 
             
            </div>);
}

export default Competences;
