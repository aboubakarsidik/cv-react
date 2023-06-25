import "../forexperiences/styles/Jobs.css"

function Jobs(){

const textJobs = (
<div>  
    <div className="job1">
        <span>
           <h3>Sept 2023-à présent</h3>
           <h2>Apprenti Data Scientist / HYVIA</h2>
        </span>
        <h4>Missions</h4>
        <p>
            <li><i className="fas fa-angle-right"></i>S’assurer de la disponibilité et de la qualité des données utilisées</li>
            <li><i className="fas fa-angle-right"></i>Créer et transformer les jeux de données nécessaires</li>
            <li><i className="fas fa-angle-right"></i>Analyser et explorer les données</li>
            <li><i className="fas fa-angle-right"></i>Développer les outils de data visualisation pour créer des dashboards</li>
            <li><i className="fas fa-angle-right"></i>Construire des modèles prédictifs et des algorithmes de machine-learning</li>
        </p>
        <h4>Competences  </h4>
        <p>  
            <li><i className="fas fa-angle-right"></i>Data architecture</li>
            <li><i className="fas fa-angle-right"></i>Programmation: Pyhton, R</li>
            <li><i className="fas fa-angle-right"></i>Environnements CloudOVH,AWS,Azure,OpenSource</li> 
            <li><i className="fas fa-angle-right"></i>Spark,Pyspark</li>
        </p>
    </div>

    <div className="job2">
        <span>
            <h3>Dec 2020-à Sept 2023</h3>
            <h2>Cours Particuliers / Solution Cours(CDI)</h2>
        </span>
        <h4>Missions</h4>
        <p>
            <li><i className="fas fa-angle-right"></i>Préparation des supports de cours en fonction des besoins des lacunes identifiées</li>
            <li><i className="fas fa-angle-right"></i>Aide aux devoirs donnés par les enseignants en classe </li>
            <li><i className="fas fa-angle-right"></i>Communication avec les parents de l’enfant afin de comprendre sa situation particulière <br></br>
            <i id="idBr">pour définir au mieux comment faire progresser l’élève</i></li>
            <li><i className="fas fa-angle-right"></i>une préparation éventuelle aux examens</li>
            <li><i className="fas fa-angle-right"></i>un suivi individuel et systématique à chaque séance, afin de suivre son avancée </li>
            
        </p>
        <h4 id="titreCompetence">Competences </h4>
        <p>  
            <li><i className="fas fa-angle-right"></i>Mathematiques, Physique, Informatique</li>
            <li><i className="fas fa-angle-right"></i>Autonomie</li>
            <li><i className="fas fa-angle-right"></i>Pédagogue</li> 
            <li><i className="fas fa-angle-right"></i>Rigoureux</li>
        </p>
    </div>
    
</div>   
);



return (textJobs);



}
export default Jobs;