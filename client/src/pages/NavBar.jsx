import React, {useCallback, useState} from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    const handleOpenClick = useCallback((e) => {
        e.preventDefault();

        setOpen((state) => !state);
    }, []);

    const handleOpenMobClick = useCallback((e) => {
        setOpen((state) => !state);
    }, []);

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link className="nav__link" to="/">Cooking blog</Link>
                    </div>
                    <nav className="nav index" id="nav">
                        <Link className="nav__link" to="/weather-widget">Weather Widget</Link>
                        <Link className="nav__link" to="/login">Log in</Link>
                        <Link className="nav__link" to="/registration">Sign up</Link>
                    </nav>
                    <button
                        className={isOpen ? "nav-toggle active" : "nav-toggle"}
                        type="button"
                        onClick={handleOpenClick}
                    >
                        <div className="nav-toggle-content">
                            <span className="nav-toggle__item" />
                        </div>
                    </button>
                </div>
            </div>
            <div className={isOpen ? "mob-nav-contain active-nav" : "mob-nav-contain"}>
                {isOpen && (
                    <nav className="nav-mob">
                        <Link className="nav__link" to="/weather-widget">Weather Widget</Link>
                        <Link className="nav__link" to="/login" onClick={handleOpenMobClick}>Log in</Link>
                        <Link className="nav__link" to="/registration" onClick={handleOpenMobClick}>Sign up</Link>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default NavBar;