import React from 'react';
import {Image} from "react-bootstrap";
import fst from "../components/assets/images/health/1.jpg";
import snd from "../components/assets/images/health/2.jpg";
import trd from "../components/assets/images/health/3.jpg";
import fth from "../components/assets/images/health/4.jpg";

const AboutFood = () => {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="recipes">
                        <div className="recipes__item">
                            <div className="section__header">
                                <h2 className="section__title">About Food</h2>
                                <h3 className="section__subtitle">Food is an art</h3>
                                <div className="section__text">
                                    <p>Food is any substance consumed to provide nutritional support for an organism.
                                        Food is usually of plant, animal, or fungal origin, and contains essential
                                        nutrients,
                                        such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is
                                        ingested by an organism and assimilated by the organism's cells
                                        to provide energy, maintain life, or stimulate growth.</p>
                                    <p>Food has an important role in the culture and cuisine of every country in the
                                        world.
                                        Different types of food combine to create tasty culinary delights that can bring
                                        people together.
                                        Food culture often develops by combining local ingredients, different cooking
                                        styles,
                                        and influences from cuisines from around the world.</p>
                                </div>
                                <div className="quote__author">Craig Claiborne</div>
                                <hr/>
                                    <div className="quote">"Cooking is at once child’s play and adult joy. And cooking
                                        done with care is an act of love."
                                    </div>
                            </div>
                        </div>
                        <div className="recipes__item products--photos">
                            <table className="recipes__img">
                                <tr>
                                    <th className="products__item">
                                        <div className="products__img">
                                            <a href="/about-meatfish">
                                                <Image src={fst}/>
                                            </a>
                                        </div>
                                        <div className="products__text">Meat and fish</div>
                                    </th>
                                    <th className="products__item">
                                        <div className="products__img">
                                            <Image src={snd}/>
                                        </div>
                                        <div className="products__text">Vegetables and fruits</div>
                                    </th>
                                </tr>
                                <tr>
                                    <th className="products__item">
                                        <div className="products__img">
                                            <Image src={trd}/>
                                        </div>
                                        <div className="products__text">Herbs and spices</div>
                                    </th>
                                    <th className="products__item">
                                        <div className="products__img">
                                            <Image src={fth}/>
                                        </div>
                                        <div className="products__text">Dairy products</div>
                                    </th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutFood;