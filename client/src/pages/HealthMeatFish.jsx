import React from 'react';
import fst from "../components/assets/images/health/1.jpg";
import {Image} from "react-bootstrap";

const HealthMeatFish = () => {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">Meat and Fish</h2>
                        <h3 className="section__subtitle">Health and food</h3>
                    </div>
                    <div className="recipes">
                        <div className="recipes__item">
                            <div className="products__img recipes--img">
                                <Image width={440} src={fst}/>
                            </div>
                        </div>
                        <div className="recipes__item">
                            <div className="recipes__text cooking--method">
                                <p>Meat and fish are different food groups, but they have something in common. Both are sources of protein, a nutrient
                                    important for our muscular health. The proteins found in meat and fish are of high biological value, meaning that
                                    they contain all the essential amino acids required to support our body functions in the right proportion. Besides
                                    proteins, these groups supply varying amounts of other important nutrients such as vitamins and minerals.</p>
                                <hr className="recipes__hr"/>
                                <p>
                                    Meat is a source of group B vitamins and several minerals such as iron or magnesium. Group B vitamins provide energy
                                    for our body and brain. Meat’s iron is “high availability iron”, meaning that it has a higher rate of absorption and
                                    usage than plant-based sources of iron for normal body functions. Eating 3 weekly servings of meat, choosing lean cuts,
                                    is recommended by the Spanish Society of Community Nutrition (SENC). According to the same guidelines, the consumption
                                    of red and processed meat should be moderated, once or less a week.
                                </p>
                                <hr className="recipes__hr"/>
                                <p>
                                    Fish is a source of vitamin D and minerals such as phosphorus and iodine. Fat)ty fish is rich in polyunsaturated fatty
                                    acids Omega3 which reduce the “bad” cholesterol (LDL) – by cutting down triglyceride levels and preceding substances which
                                    play a major preventive role in cardiovascular diseases. Vitamin D is important for correct calcium fixation in bones, and
                                    phosphorus helps to maintain healthy teeth. Fish consumption is particularly important for pregnant and breastfeeding people
                                    and during periods of growth such as childhood. Eating 3 to 4 weekly servings of fish is recommended by the Spanish Society
                                    of Community Nutrition. Shellfish are high-quality protein sources too, low in sodium, calories, and saturated fats.
                                    Shellfish also contain polyunsaturated fatty acids Omega3, and are excellent sources of vitamins (B1, B12) and minerals
                                    such as phosphorus, potassium, iron, iodine, fluorine, and zinc.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HealthMeatFish;