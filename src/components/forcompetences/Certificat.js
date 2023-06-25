
import React from "react";
import "../forcompetences/styles/Certificat.css";
import PhData from '../forcompetences/media/dataScience.jpg' ;
import PhJavascript from '../forcompetences/media/javascript.png';

import js from '../forcompetences/media/js.pdf';
import data from '../forcompetences/media/data.pdf';

function Certificat(){

     
     return(
           <div className="listeCertificat">
            <h2>Certifications</h2>
                 <div className="Data">
                    <span>
                       <a href={data} target="_blank"><i className="fa fa-download" id = "iData"></i></a>
                    </span>
                    <img className = 'imageData' src={PhData} alt="certData" />
                 </div>
                 <div className="javascript">
                    <span>
                       <a href={js} target="_blank"><i className="fa fa-download" id = "ijavascript"></i></a>
                    </span>
                    <img className = 'imageJavascript' src={PhJavascript} alt="certJavascript" />
                 </div>
                 
           </div>
     );                       

}
export default Certificat;