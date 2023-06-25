import React from "react";
import ph from '../media/photo.png'
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const PhNom = (
        <div id="PhNom">
            <img src={ph} alt="Ma photo" width={100} />
            <h2>Aboubakar sidik</h2>
            <h2>MEITE</h2>
        </div>
);

const MenuNavigation = (
    <div className="MenuNavigation">
        <ul className="listeMenu">
            <li>
                <NavLink exact to="/" activeClassName = "navActive">
                      <i className="fas fa-home"></i>
                      <span>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/projets" activeClassName = "navActive">
                      <i className="fas fa-project-diagram"></i>
                      <span>Projets</span>
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/experiences" activeClassName = "navActive">
                      <i className="fas fa-chart-line"></i>
                      <span>Experiences</span>
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/competences" activeClassName = "navActive">
                      <i className="fas fa-award"></i>
                      <span>Competences</span>
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/formations" activeClassName = "navActive">
                      <i className="fas fa-school"></i>
                      <span>Formations</span>
                </NavLink>
            </li>

            <li>
                <NavLink exact to="/contacts" activeClassName = "navActive">
                      <i className="fas fa-phone"></i>
                      <span>Contacts</span>
                </NavLink>
            </li>
        </ul>
        <ul className="socialNetwork">
            <li>
                <a href="https://github.com/aboubakarsidik" target="_blank" id="s1">
                <i class="fa fa-github" ></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/aboubakar-sidik-meite-849795251/" target="_blank" id ="s2">
                <i class="fa fa-linkedin" ></i>
                </a>
            </li>
            <li>
                <a href="mailto:smeite20@gmail.com" target="_blank" id = "s3">
                <i class="fa fa-envelope" ></i>
                </a>
            </li>

        </ul>
    </div>
);

const mainForNavigation = (
      <>
       {PhNom} 
       {MenuNavigation}
       </> 
);

function Navigation(){

    return(mainForNavigation);
}

export default Navigation;
