import "../forcompetences/styles/Programmation.css";



function ProgressBar(props){

    const headLanguage = (<h2 id="idLanguage">{props.t1}</h2>);
    const headLogiciel = (<h2 id="idLogiciel">{props.t2}</h2>);




    return (<div className="programmation">
          {headLanguage}
          {  props.language.map(item =>{

            let xpComplete = 5;
            let progressbar = item.xp / xpComplete * 100 + "%";
             return(
             <div key={item.id} className="languageList">
              <li>{item.value}</li>
              <div className="progressbar" style={{width:progressbar}}>
              </div>
             </div>
             );
             
            }
            )
          }
          {headLogiciel}
          {  props.logiciel.map(item =>{

            let xpComplete = 5;
            let progressbar = item.xp / xpComplete * 100 + "%";
             return(
             <div key={item.id} className="logicielList">
              <li>{item.value}</li>
              <div className="progressbar" style={{width:progressbar}}>
              </div>
             </div>
             );
             
            }
            )
          }

    </div>);



}

export default ProgressBar;
