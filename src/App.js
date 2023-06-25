import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Competences from './pages/Competences';
import Projets from './pages/Projets';
import Experiences from './pages/Experiences';
import Formations from './pages/Formations';
import {BrowserRouter,Route,Routes} from 'react-router-dom';


const menuNavigation = (
    <div>
    <BrowserRouter>
        <Routes>
            <Route path = "/cv-react/" exact Component={Home} />
            <Route path = "/cv-react/competences" Component={Competences} />
            <Route path = "/cv-react/experiences"  Component={Experiences} />
            <Route path = "/cv-react/contacts" Component={Contacts} />
            <Route path = "/cv-react/projets"  Component={Projets} />
            <Route path="/cv-react/formations" Component={Formations}/>
        </Routes>
    </BrowserRouter>
    </div>
  );


function App() {

  return menuNavigation;
}

export default App;
