import React from "react";

const NavBar = () => {
    return(
        <div>
            <div className="NavBar">
                <div className="Logo">
                    <img className="LogoImg" src="\Materiales\logo.jpg" alt="" />
                    <h1 className="Name">Nutrisima</h1>
                </div>
                <div className="searchDiv">
                    <input className="Search" type="search" placeholder="&#128269; Buscar"/>
                </div>
            </div>
        </div>
    );
} 


export default NavBar;