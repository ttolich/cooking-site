import React from 'react';
import {Image} from "react-bootstrap";
import coffee from "../components/assets/images/recipe/drinks/dalgona-coffee.jpg";
import latte from "../components/assets/images/recipe/drinks/iced-latte.jpg";
import smoothie from "../components/assets/images/recipe/drinks/watermelon-smoothie.jpg";
import tea from "../components/assets/images/recipe/drinks/honey-lemon-tea.jpg";
import limoncello from "../components/assets/images/recipe/drinks/limoncello.jpg";
import eggnog from "../components/assets/images/recipe/drinks/eggnog.jpg"
import mushroom from "../components/assets/images/recipe/soups/mushroom-soup.jpg";

const Drinks = () => {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">Drinks</h2>
                        <h3 className="section__subtitle">Good morning juice?</h3>
                        <div className="section__text recipes">
                            <p>A drink (or beverage) is a liquid intended for human consumption. In addition to their
                                basic function of satisfying thirst, drinks play important roles in human culture.
                                Common types of drinks include plain drinking water, milk, juice, smoothies and soft
                                drinks.
                                Traditionally warm beverages include coffee, tea, and hot chocolate. Caffeinated drinks
                                that contain the stimulant caffeine have a long history. In addition, alcoholic drinks
                                such as wine, beer, and liquor, which contain the drug ethanol, have been part of human
                                culture for more than 8,000 years. Non-alcoholic drinks often signify drinks that would
                                normally contain alcohol, such as beer, wine and cocktails, but are made with a
                                sufficiently
                                low concentration of alcohol by volume. The category includes drinks that have undergone
                                an alcohol removal process such as non-alcoholic beers and de-alcoholized wines.</p>
                        </div>
                    </div>
                    <div className="recipes__menu">
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <a href="/dalgona-coffee">
                                    <Image width={300} src={coffee}/>
                                </a>
                            </div>
                            <div className="products__text">Dalgona coffee</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={latte}/>
                            </div>
                            <div className="products__text">Iced latte</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={smoothie}/>
                            </div>
                            <div className="products__text">Watermelon smoothie</div>
                        </div>

                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={tea}/>
                            </div>
                            <div className="products__text">Honey and lemon tea</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={limoncello}/>
                            </div>
                            <div className="products__text">Limoncello</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={eggnog}/>
                            </div>
                            <div className="products__text">Classic eggnog</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Drinks;