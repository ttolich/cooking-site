import React from 'react';
import {Image} from "react-bootstrap";
import potato from "../components/assets/images/recipe/appetizers/sweet-potato.jpg";
import paper from "../components/assets/images/recipe/appetizers/rice-paper.jpg";
import mushrooms from "../components/assets/images/recipe/appetizers/stuffed-mushrooms.jpg";
import mint from "../components/assets/images/recipe/appetizers/mint-coriander.jpg";
import tomato from "../components/assets/images/recipe/appetizers/tomato-feta.jpg";
import jalapeno from "../components/assets/images/recipe/appetizers/jalapeno-crisps.jpg";
import mushroom from "../components/assets/images/recipe/soups/mushroom-soup.jpg";

const Appetizers = () => {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">Appetizers</h2>
                        <h3 className="section__subtitle">Better food, better mood</h3>
                        <div className="section__text recipes">
                            <p>Appetizer, food eaten to pique the appetite or to moderate the hunger stimulated by
                                drink.
                                Hors d’oeuvres, small portions of savoury foods, often highly seasoned, and canapés,
                                small pieces of bread, crackers, or croutons with various toppings, are the classic
                                appetizer categories. The Scandinavian smorgasbord, Spanish tapas, Greek meze and
                                Egyptian mazza,
                                are all elaborate appetizer displays.</p>
                        </div>
                    </div>
                    <div className="recipes__menu">
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <a href="/potato-bites">
                                    <Image width={300} src={potato}/>
                                </a>
                            </div>
                            <div className="products__text">Sweet potato bites</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={paper}/>
                            </div>
                            <div className="products__text">Rice paper wraps</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={mushrooms}/>
                            </div>
                            <div className="products__text">Stuffed mushrooms</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={mint}/>
                            </div>
                            <div className="products__text">Mint & coriander tomato tarts</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={tomato}/>
                            </div>
                            <div className="products__text">Tomato & feta pesto bites</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={jalapeno}/>
                            </div>
                            <div className="products__text">Jalapeño cheese crisps</div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Appetizers;