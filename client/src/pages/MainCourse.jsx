import React from 'react';
import {Image} from "react-bootstrap";
import curry from "../components/assets/images/recipe/main-course/chickpea-curry.jpg";
import pork from "../components/assets/images/recipe/main-course/slow-roast-pork.jpg";
import aubergine from "../components/assets/images/recipe/main-course/aubergine-melts.jpg";
import  beef from "../components/assets/images/recipe/main-course/braised-beef-ginger.jpg";
import gnocchi from "../components/assets/images/recipe/main-course/gnocchi-tomato.jpg";
import casserole from "../components/assets/images/recipe/main-course/green-bean-casserole.jpg";
import potato from "../components/assets/images/recipe/appetizers/sweet-potato.jpg";

const MainCourse = () => {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">Main Course</h2>
                        <h3 className="section__subtitle">Cook with imagination</h3>
                        <div className="section__text recipes">
                            <p>A main course is the featured or primary dish in a meal consisting of several courses.
                                It usually follows the entrée ("entry") course. In the United States and Canada (except
                                Quebec),
                                the main course is traditionally called an "entrée". English-speaking Québécois follow
                                the modern French use of the term entrée to refer to a dish served before the main
                                course.</p>
                        </div>
                    </div>
                    <div className="recipes__menu">
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <a href="/chickpea-curry">
                                    <Image width={300} src={curry}/>
                                </a>
                            </div>
                            <div className="products__text">Chickpea curry</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={pork}/>
                            </div>
                            <div className="products__text">Slow-roast pork shoulder</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={aubergine}/>
                            </div>
                            <div className="products__text">Aubergine melts</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={beef}/>
                            </div>
                            <div className="products__text">Braised beef with ginger</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={gnocchi}/>
                            </div>
                            <div className="products__text">Gnocchi & tomato bake</div>
                        </div>
                        <div className="recipes__menu__item">
                            <div className="recipes__menu__img">
                                <Image width={300} src={casserole}/>
                            </div>
                            <div className="products__text">Green bean casserole</div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainCourse;