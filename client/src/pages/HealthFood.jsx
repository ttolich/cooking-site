import React from 'react';
import {Image} from "react-bootstrap";
import fst from "../components/assets/images/health/1.jpg";
import snd from "../components/assets/images/health/2.jpg";
import trd from "../components/assets/images/health/3.jpg";
import fth from "../components/assets/images/health/4.jpg";

const HealthFood = () => {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="recipes">
                        <div className="recipes__item">
                            <div className="section__header">
                                <h2 className="section__title">Health and Food</h2>
                                <h3 className="section__subtitle">Eat well. Live long</h3>
                                <div className="section__text">
                                    <p>The food we eat gives our bodies the "information" and materials they need to
                                        function properly.
                                        If we don't get the right information, our metabolic processes suffer and our
                                        health declines.</p>
                                    <p>If we get too much food, or food that gives our bodies the wrong instructions, we
                                        can become
                                        overweight, undernourished, and at risk for the development of diseases and
                                        conditions,
                                        such as arthritis, diabetes, and heart disease.</p>
                                    <p>In short, what we eat is central to our health. Consider that in light of
                                        Webster's definition
                                        of medicine: "The science and art dealing with the maintenance of health and the
                                        prevention,
                                        alleviation, or cure of disease."</p>
                                </div>
                                <div className="quote__author">Harriet van Horne</div>
                                <hr/>
                                    <div className="quote">"Cooking is like love. It should be entered into with abandon
                                        or not at all."
                                    </div>
                            </div>
                        </div>
                        <div className="recipes__item products--photos">
                            <table className="recipes__img">
                                <tr>
                                    <th className="products__item">
                                        <div className="products__img">
                                            <a href="/health-meatfish">
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

export default HealthFood;