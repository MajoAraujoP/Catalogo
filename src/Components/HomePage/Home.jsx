import React from "react";
import Product from "./Product";
import SignInModal from "./SignInModal";

const Home = () => {
    return(
        <div className="MainPage">
            <div className="NavBar">
                <div className="Logo">
                    <img className="LogoImg" src="\Materiales\logo.jpg" alt="" />
                    <h1 className="Name">Nutrisima</h1>
                </div>
                <div className="searchDiv">
                    <input className="Search" type="search" placeholder="&#128269; Buscar"/>
                </div>
            </div>
            <div>
                <Product/>
            </div>
        </div>
    );
} 

export default Home;