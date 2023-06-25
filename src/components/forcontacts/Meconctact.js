import '../forcontacts/styles/Mecontact.css';

const handleMecontact = (
    <div className="contacts">
        <h2 id="idcontact"> Mes contacts</h2>
        <hr id="hrcontact"></hr>
        <div className='classContacts'>
        <li>
            <i className='fas fa-envelope'></i>
            <a href='mailto:smeite20@gmail.com' alt="adressemail">smeite20@gmail.com</a> 
        </li>
       
        <li id = "phone">
            <i className='fas fa-phone'></i>
             (+33) 6 56 67 50 62
        </li>
        <li id="location" >
        <i className='fas fa-search-location'></i>
            91570 Bièvres
        </li>
        </div>
        <div>
            <button>
                <a href='mailto:smeite20@gmail.com' target="_blank" alt="adressemail"><i className='fa fa-envelope' id="item1"></i></a> 
            </button>
            <button>
                <a href='https://www.linkedin.com/in/aboubakar-sidik-meite-849795251/' alt="linkedin" target="_blank"><i className='fa fa-linkedin' id ="item2"></i></a> 
            </button>
            <button>
                <a href='https://github.com/aboubakarsidik' alt="github" target="_blank"><i className='fa fa-github' id="item3"></i></a> 
            </button>
        </div>
    </div>
);


function Meconctact(){

    return (handleMecontact);

}

export default Meconctact;