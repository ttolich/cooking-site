import React from 'react';
import broiling from "../components/assets/images/methods/1.jpg"
import {Image} from "react-bootstrap";

const BroilingMethod = () => {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">Broiling</h2>
                        <h3 className="section__subtitle">Cooking method</h3>
                    </div>
                    <div className="recipes">
                        <div className="recipes__item">
                            <div className="products__img recipes--img">
                                <Image width={440} src={broiling}/>
                            </div>
                        </div>
                        <div className="recipes__item">
                            <div className="recipes__text cooking--method">
                                <p>It is cooking by direct heat, it could be done by the source of heat above or below.
                                    It is dry cooking and can be done on an iron bar or pan, where the food is cooked
                                    uncovered. The pan or bar is oiled slightly to prevent sticking.</p>
                                <p>Broiling differs from roasting and baking in that the food is turned during the
                                    process
                                    so as to cook one side at a time. Temperatures are higher for broiling than for
                                    roasting;
                                    the broil indicator of a household range is typically set around 550 °F (288 °C),
                                    whereas larger commercial appliances broil between 700 and 1,000 °F (371 and 538
                                    °C).</p>
                                <p>Example: Broiled peanut, Broiled Bacon-Basted Salmon with Mushroom-Oyster Sauce.</p>
                            </div>
                            <hr className="recipes__hr"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BroilingMethod;