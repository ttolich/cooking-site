import React from 'react';
import {Image} from "react-bootstrap";
import mushroom from "../components/assets/images/recipe/soups/mushroom-soup.jpg";
import NavBar from "./NavBar";
import {useCallback, useState} from "react";

const initState = [90, 2, 1, 500, 2, 1, 1, 4];

const MushroomSoup = () => {
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
                        <h2 className="section__title">Mushroom Soup</h2>
                        <h3 className="section__subtitle">Family favorite</h3>
                    </div>
                    <div className="recipes">
                        <div className="recipes__item">
                            <div className="products__img recipes--img">
                                <Image width={440} src={mushroom}/>
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
                                <li>{servings[0]} g butter</li>
                                <li>{servings[1]} medium onions, roughly chopped</li>
                                <li>{servings[2]} garlic clove, crushed</li>
                                <li>{servings[3]} g mushrooms, finely chopped (chestnut or button mushrooms work well)</li>
                                <li>{servings[4]} tbsp plain flour</li>
                                <li>{servings[5]} l hot chicken stock</li>
                                <li>{servings[6]} bay leaf</li>
                                <li>{servings[7]} tbsp single cream</li>
                                <li>small handful flat-leaf parsley, roughly chopped, to serve (optional)</li>
                            </ul>

                            <div className="recipes__text">
                                <p>Heat the butter in a large saucepan and cook the onions and garlic until soft but not browned, about 8-10 mins.</p>
                                <p>Add the mushrooms and cook over a high heat for another 3 mins until softened. Sprinkle over the flour and stir to combine.
                                    Pour in the chicken stock, bring the mixture to the boil, then add the bay leaf and simmer for another 10 mins.</p>
                                <p>Remove and discard the bay leaf, then remove the mushroom mixture from the heat and blitz using a hand blender until smooth.
                                    Gently reheat the soup and stir through the cream (or, you could freeze the soup at this stage – simply stir
                                    through the cream when heating). Scatter over the parsley, if you like, and serve.</p>
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

export default MushroomSoup;