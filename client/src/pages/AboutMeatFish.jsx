import React from 'react';
import fst from "../components/assets/images/health/1.jpg";
import {Image} from "react-bootstrap";

const AboutMeatFish = () => {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">Meat and Fish</h2>
                        <h3 className="section__subtitle">About food</h3>
                    </div>
                    <div className="recipes">
                        <div className="recipes__item">
                            <div className="products__img recipes--img">
                                <Image width={440} src={fst}/>
                            </div>
                        </div>
                        <div className="recipes__item">
                            <div className="recipes__text cooking--method">
                                <p>There are very few cultures where meat and poultry are not important types of food. Some animals such as cows, pigs, chickens,
                                    and lamb are raised specifically for their meat. Others, such as game birds, wild boar, rabbits, and deer, are often hunted.
                                    For cooking, meat can be minced, cut into chops, diced, sliced, or roasted as large cuts. When it comes
                                    to different cuisines in the world, each region has a preference for meat. Lamb and goat meat are popular in the Mediterranean
                                    region, poultry is the meat of choice in Asia, and Latin American food culture mostly revolves around beef. Some delicacies
                                    in French cuisine use the liver of some birds such as duck or goose to create pate known as foie gras. Other types of offal
                                    used in cooking include the heart, kidneys, or tongue. The cut of meat can affect the way it is prepared and cooked. For example,
                                    a choice T-bone steak or pork chop may be pan-fried. But a tougher cut of beef may be braised or stewed for many hours to
                                    tenderize it. A ‘rack of lamb’ is a popular way to roast and serve meat from sheep.</p>
                                <hr className="recipes__hr"/>
                                <p>Seafood is another important category of food. This food category includes fish, shellfish such as crab and lobster, and squid
                                    or octopus. Most types of fish sold in shops are caught at sea. However, fish farming is also a common way to raise salmon, carp,
                                    rainbow trout, mussels, oysters, and clams. Most countries that have coastal regions have a distinct fish culture. For example,
                                    in Mediterranean countries, whole grilled, baked, or steamed fish is often on the menu. Also, deep-fried squid rings are popular
                                    as an appetizer and are even sold in fast-food restaurants. Many Eastern European countries smoke various types of fish to
                                    preserve them. One of the strongest fish cultures in Asia is in Japan. Slices of raw fish or slightly-salted fish are delicately
                                    cut and served with rice and nori (seaweed) rolls. Popular types of seafood or fish for sushi include tuna, salmon, halibut,
                                    clams, scallops, or sea bass.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMeatFish;