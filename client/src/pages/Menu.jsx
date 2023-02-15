import React from 'react';
import fst from "../components/assets/images/menu/1.png";
import snd from "../components/assets/images/menu/2.png";
import {Link} from "react-router-dom";
import MenuItem from "../components/MenuItem";

const menuItems = [
    {
        icon: fst,
        name: 'Recipes',
        listLinks: [
            {
                link: '/soups',
                title: 'Soups',
            },
            {
                link: '/main-course',
                title: 'Main course',
            },
            {
                link: '/appetizers',
                title: 'Appetizers',
            },
            {
                link: '/salads',
                title: 'Salads',
            },
            {
                link: '/desserts',
                title: 'Desserts',
            },
            {
                link: '/drinks',
                title: 'Drinks',
            },
        ],
    },
    {
        icon: snd,
        name: 'Products',
        listLinks: [
            {
                link: '/about-food',
                title: 'About products',
            },
            {
                link: '/cooking-methods',
                title: 'Cooking methods',
            },
            {
                link: '/health-food',
                title: 'Health and food',
            },
        ],
    },
]

const Menu = () => {
    return (
        <div>
            <section className="section section--menu">
                <div className="container">
                    <div className="menu__header">
                        <h2 className="section__title">Menu</h2>
                        <h3 className="section__subtitle">Speak with the taste</h3>
                    </div>
                    <div className="menu">
                        <div className="menu__item">
                            <div className="accordion">
                                {menuItems.map((menuItem, index) =>
                                    <MenuItem key={index} icon={menuItem.icon} name={menuItem.name}>
                                        {menuItem.listLinks.map((listLink, listLinkIndex) =>
                                            <Link key={listLinkIndex} to={listLink.link}>{listLink.title}</Link>
                                        )}
                                    </MenuItem>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Menu;