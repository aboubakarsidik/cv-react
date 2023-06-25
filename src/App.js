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
            <Route path = "/" exact Component={Home} />
            <Route path = "/competences" Component={Competences} />
            <Route path = "/experiences"  Component={Experiences} />
            <Route path = "/contacts" Component={Contacts} />
            <Route path = "/projets"  Component={Projets} />
            <Route path="/formations" Component={Formations}/>
        </Routes>
    </BrowserRouter>
    </div>
  );


function App() {

  return menuNavigation;
}

export default App;
