import React from 'react'
import './Main.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


function Player() {
    const options = [
        'one', 'two', 'three'
      ];
      const defaultOption = options[0];
  return (
      <div className='container navigationbar'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navpadding">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Pricing</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="/">Action</a>
                    <a className="dropdown-item" href="/">Another action</a>
                    <a className="dropdown-item" href="/">Something else here</a>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
        <h1 className="review">Player Reviews</h1>
        <div className="container dropdown">
                <button className="btn btn-secondary dropdown-toggle  my-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="/">Action</a>
            <a className="dropdown-item" href="/">Another action</a>
            <a className="dropdown-item" href="/">Something else here</a>
        </div>
        </div>  
       
{/* <Dropdown options={options} onChange value={defaultOption} placeholder="Select an option" />; */}
        <b><hr /></b>
        <div className="card mx-3 my-3" id="card">
            <img src="" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div><div className="card mx-3 my-3" id="card">
            <img src="" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div><div className="card mx-3 my-3" id="card">
            <img src="" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div><div className="card mx-3 my-3" id="card">
            <img src="" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <h1 className="logo">LOGO</h1>

        <h2 className="logo1">For The Future Creative Coach</h2>

    </div>
   )
}

export default Player
