import React from 'react';
import {Image} from "react-bootstrap";
import greek from "../components/assets/images/recipe/salads/greek.jpg";
import NavBar from "./NavBar";
import {useCallback, useState} from "react";

const initState = [4, 1, 0.5, 16, 1, 85, 4];

const GreekSalad = () => {
    const [servings, setServings] = useState(initState);

    const handleServingsChange = useCallback((e) => {
        e.preventDefault();

        if (e.target.value !== '') {
            setServings(initState.map((item) => item * Number(e.target.value)));
        } else {
            setServings(initState);
        }
    }, []);
    return (
        <div>
            <NavBar/>

            <section className="section">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">Greek Salad</h2>
                        <h3 className="section__subtitle">Family favorite</h3>
                    </div>
                    <div className="recipes">
                        <div className="recipes__item">
                            <div className="products__img recipes--img">
                                <Image width={440} src={greek}/>
                            </div>
                        </div>
                        <div className="recipes__item">
                            <p className="ingredients__title"><strong>Ingredients</strong></p>

                            <label htmlFor="ingredients__count">Servings</label>
                            <select id="ingredients__count" onChange={handleServingsChange} defaultValue={1}>
                                <option value={1}>4 servings</option>
                                <option value={2}>8 servings</option>
                            </select>

                            <ul className="ingredients">
                                <li>{servings[0]} large vine tomatoes, cut into irregular wedges</li>
                                <li>{servings[1]} cucumber, peeled, deseeded, then roughly chopped</li>
                                <li>{servings[2]} red onion thinly sliced</li>
                                <li>{servings[3]} Kalamata olives</li>
                                <li>{servings[4]} tsp dried oregano</li>
                                <li>{servings[5]} g feta cheese, cut into chunks (barrel matured feta is the best)</li>
                                <li>{servings[6]} tbsp Greek extra virgin olive oil</li>
                            </ul>

                            <div className="recipes__text">
                                <p>Place 4 large vine tomatoes, cut into wedges, 1 peeled, deseeded and chopped cucumber, ½ a thinly sliced red onion, 16 Kalamata olives,
                                    1 tsp dried oregano, 85g feta cheese chunks and 4 tbsp Greek extra virgin olive oil in a large bowl.</p>
                                <p>Lightly season, then serve with crusty bread to mop up all of the juices.</p>
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

export default GreekSalad;