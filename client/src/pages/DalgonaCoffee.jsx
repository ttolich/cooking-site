import React from 'react';
import {Image} from "react-bootstrap";
import coffee from "../components/assets/images/recipe/drinks/dalgona-coffee.jpg";
import NavBar from "./NavBar";

const DalgonaCoffee = () => {
    return (
        <div>
            <NavBar/>

            <section className="section">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">Dalgona Coffee</h2>
                        <h3 className="section__subtitle">Family favorite</h3>
                    </div>
                    <div className="recipes">
                        <div className="recipes__item">
                            <div className="products__img recipes--img">
                                <Image width={440} src={coffee}/>
                            </div>
                        </div>
                        <div className="recipes__item">
                            <p className="ingredients__title"><strong>Ingredients</strong></p>

                            <ul className="ingredients">
                                <li><p className="ingredients__nums" id="result0"></p> 3 tbsp instant coffee</li>
                                <li><p className="ingredients__nums" id="result1"></p> 2 tbsp sugar</li>
                                <li><p className="ingredients__nums" id="result2"></p> 400-500ml milk (we used whole milk)</li>
                            </ul>
                            <div className="recipes__text">
                                <p>Whisk the coffee, sugar and 3 tbsp boiling water in a bowl for approximately 5 mins
                                    until the mixture is thick and fluffy with stiff peaks. This is easiest done using
                                    an electric whisk but can be done by hand.</p>
                                <p>For hot coffee, heat the milk and pour into two heatproof glasses. For cold coffee, pour the cold milk into two glasses.
                                    Divide the coffee mixture in half and spoon evenly on top of the glasses. Serve and stir thoroughly before drinking.</p>
                            </div>
                            <hr className="recipes__hr"/>
                            <div className="quote recipes--quote">Bon appetit!</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DalgonaCoffee;