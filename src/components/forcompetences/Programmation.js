import { useState } from "react";
import Progressbar from "../forcompetences/Progressbar";


function Programmation(){
    const [dataLanguage] = useState([
                                   
                                    {id:1,value:'Python',xp:4},
                                    {id:2,value:'Language R',xp:3},
                                    {id:3,value:'SQL', xp:3},
                                    {id:4, value:'Excel Vba',xp:4},
                                    {id:5, value:'Javascript',xp:3},
                                    {id:6, value:'Java', xp:2},
                                    {id:7, value:'Rust',xp:3},
                                    {id:7, value:'Html-CSS',xp:3},
                                    {id:8,value:'niv.max' ,xp:5}

                            ]);
    
    const [dataLogiciel] = useState([   {id:1,value:'Visual studio',xp:4},
                                        {id:2,value:'Jupyter Notebook',xp:3},
                                        {id:3,value:'Rstudio', xp:3},
                                        {id:4, value:'Oracle',xp:2},
                                        {id:5, value:'Microsoft office',xp:4},
                                        {id:6, value:'Linux', xp:4},
                                        {id:7, value:'windows',xp:4},
                                        {id:7, value:'Github',xp:3},
                                        {id:8,value:'niv.max',xp:5}
                        ]) ;              
   
   
    return (
           <div>
            <Progressbar 
            language={dataLanguage} 
            t1="Languages" 
            logiciel={dataLogiciel} 
            t2="Logiciels"
            ></Progressbar>
           </div>

    );

}
export default Programmation;