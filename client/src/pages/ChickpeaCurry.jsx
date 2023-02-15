import React from 'react';
import {Image} from "react-bootstrap";
import curry from "../components/assets/images/recipe/main-course/chickpea-curry.jpg";
import NavBar from "./NavBar";
import {useCallback, useState} from "react";

const initState = [2, 1, 1, 9, 1, 2, 1, 2, 2, 400, 100, 0.5, 100];

const ChickpeaCurry = () => {
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
                        <h2 className="section__title">Chickpea Curry</h2>
                        <h3 className="section__subtitle">Family favorite</h3>
                    </div>
                    <div className="recipes">
                        <div className="recipes__item">
                            <div className="products__img recipes--img">
                                <Image width={440} src={curry}/>
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
                                <li>{servings[0]} tbsp oil</li>
                                <li>{servings[1]} onion, diced</li>
                                <li>{servings[2]} tsp fresh or dried chilli, to taste</li>
                                <li>{servings[3]} garlic cloves (approx 1 small bulb of garlic)</li>
                                <li>thumb-sized piece ginger, peeled</li>
                                <li>{servings[4]} tbsp ground coriander</li>
                                <li>{servings[5]} tbsp ground cumin</li>
                                <li>{servings[6]} tbsp garam masala</li>
                                <li>{servings[7]} tbsp tomato purée</li>
                                <li>{servings[8]} x 400g cans chickpeas, drained</li>
                                <li>{servings[9]} g can chopped tomatoes</li>
                                <li>{servings[10]} g creamed coconut</li>
                                <li>{servings[11]} small pack coriander, chopped, plus extra to garnish</li>
                                <li>{servings[12]} g spinach</li>
                                <li>cooked rice and/or dahl</li>
                            </ul>

                            <div className="recipes__text">
                                <p>To make the paste, heat a little of the 2 tbsp oil in a frying pan, add 1 diced onion and 1 tsp fresh or dried chilli,
                                    and cook until softened, about 8 mins.</p>
                                <p>In a food processor, combine 9 garlic cloves, a thumb-sized piece of peeled ginger and the remaining oil,
                                    then add 1 tbsp ground coriander, 2 tbsp ground cumin, 1 tbsp garam masala, 2 tbsp tomato purée,
                                    0.5 tsp salt and the fried onion. Blend to a smooth paste – add a drop of water or more oil, if needed.</p>
                                <p>Cook the paste in a medium saucepan for 2 mins over a medium-high heat, stirring occasionally so it doesn’t stick.</p>
                                <p>Tip in two 400g cans drained chickpeas and a 400g can chopped tomatoes, and simmer for 5 mins until reduced down.</p>
                                <p>Add 100g creamed coconut with a little water, cook for 5 mins more, then add ½ small pack chopped coriander
                                    and 100g spinach, and cook until wilted.</p>
                                <p>Garnish with extra coriander and serve with rice or dhal (or both).</p>
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

export default ChickpeaCurry;