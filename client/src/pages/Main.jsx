import React from 'react';
import {Link} from "react-router-dom";

const Main = () => {
    return (
    <>
        <div>
            <div className="intro" id="intro">
                <div className="container">
                    <div id="intro__inner">
                        <h1 className="intro__title">Cooking blog</h1>
                        <h2 className="intro__subtitle">Cooking with passion. Cooking with love
                            <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet"/>
                        </h2>
                        <Link className="btn" to="/menu">Menu</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
export default Main;