import { Switch } from "@mui/material";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";



const Header =(props) => {
  const [loggedIn, setLoggedIn] = useState (true);

  const displayLoggedIn =() =>{
 
    if(loggedIn){
      return (
        < >
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/browse">Browse Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/memegenerator">Generate Meme</NavLink>
        </li>
         </>
      )
    } else{
      return(
        <>
         <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/signup">Signup</NavLink>
        </li>

        </>
      )
    
    }
  }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Meme Generator</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " activeClassName="active" aria-current="page" to="/home">Home</NavLink>
        </li>
        { displayLoggedIn()}
        


        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/editorlist">Editor list</NavLink>
        </li>
    
        <li className="nav-item">
          <Switch
          value ={props.darkMode}
          onChange ={(e,v)=> props.setDarkMode(v)}
          />
        </li>
        {/* <li className="nav-item">
          <button className="btn btn-dark"> {productData.length}</button>
        
        </li> */}
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
};
export default Header;