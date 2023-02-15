import React, {useContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import {Context} from "../index";
import './assets/css/style.css';

import Main from "../pages/Main";
import Auth from "../pages/Auth";
import Menu from "../pages/Menu";
import Appetizers from "../pages/Appetizers"
import Soups from "../pages/Soups"
import Drinks from "../pages/Drinks"
import Desserts from "../pages/Desserts"
import MainCourse from "../pages/MainCourse"
import Salads from "../pages/Salads"
import AboutFood from "../pages/AboutFood"
import CookingMethods from "../pages/CookingMethods"
import HealthFood from "../pages/HealthFood"
import TastyPancakes from "../pages/TastyPancakes"
import BroilingMethod from "../pages/BroilingMethod";
import Layout from "./Layout";
import NoMatch from "./NoMatch";
import WeatherWidget from "./WeatherWidget";
import MushroomSoup from "../pages/MushroomSoup";
import SweetPotatoBites from "../pages/SweetPotatoBites";
import DalgonaCoffee from "../pages/DalgonaCoffee";
import ChickpeaCurry from "../pages/ChickpeaCurry";
import GreekSalad from "../pages/GreekSalad";
import AboutMeatFish from "../pages/AboutMeatFish";
import HealthMeatFish from "../pages/HealthMeatFish";

export default function AppRouter() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route path={'/'} element={<Main />} index />
                <Route path={'/registration'} element={<Auth/>}/>
                <Route path={'/login'} element={<Auth/>}/>
                <Route path={'/menu'} element={<Menu/>}/>
                <Route path={'/appetizers'} element={<Appetizers/>}/>
                <Route path={'/desserts'} element={<Desserts/>}/>
                <Route path={'/drinks'} element={<Drinks/>}/>
                <Route path={'/main-course'} element={<MainCourse/>}/>
                <Route path={'/soups'} element={<Soups/>}/>
                <Route path={'/salads'} element={<Salads/>}/>
                <Route path={'/about-food'} element={<AboutFood/>}/>
                <Route path={'/cooking-methods'} element={<CookingMethods/>}/>
                <Route path={'/health-food'} element={<HealthFood/>}/>
                <Route path={'/tasty-pancakes'} element={<TastyPancakes/>}/>
                <Route path={'/mushroom-soup'} element={<MushroomSoup/>}/>
                <Route path={'/potato-bites'} element={<SweetPotatoBites/>}/>
                <Route path={'/dalgona-coffee'} element={<DalgonaCoffee/>}/>
                <Route path={'/chickpea-curry'} element={<ChickpeaCurry/>}/>
                <Route path={'/greek-salad'} element={<GreekSalad/>}/>
                <Route path={'/broiling-method'} element={<BroilingMethod/>}/>
                <Route path={'/about-meatfish'} element={<AboutMeatFish/>}/>
                <Route path={'/health-meatfish'} element={<HealthMeatFish/>}/>
                <Route path={'/weather-widget'} element={<WeatherWidget/>}/>
            </Route>
            <Route path="*" element={<NoMatch />}/>
        </Routes>
    );
};
