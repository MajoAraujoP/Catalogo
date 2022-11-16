import React from "react";
import Product from "./Product";
import SignInModal from "./SignInModal";
import NavBar from "./NavBar";

const Home = () => {
    return(
        <div className="MainPage">
            <div>
                <NavBar/>
            </div>
            {/*<div className="Carrusel">         
                <div>
                    <img className="ImgCarrusel" src="\Materiales\PuntaBallena.jpg" alt="" />    
                </div>
                <div>
                    <img className="ImgCarrusel" src="\Materiales\Hornex.jpg" alt="" />
                </div>
                <div>
                    <img className="ImgCarrusel" src="\Materiales\fortylex.jpg" alt="" />
                </div>
                <div>
                    <img className="ImgCarrusel" src="\Materiales\Azucarlito.png" alt="" />
                </div> 
            </div>*/}
            <div className="ProductMain">
                <Product/>
            </div>
            <div className="Footer">
                <img className="ImgFooter" src="\Materiales\FondoRojo.jpeg" alt="" />
            </div>
        </div>
    );
} 

export default Home;