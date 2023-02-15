import React, {useCallback, useState} from 'react';
import {Image} from "react-bootstrap";

const MenuItem = ({ icon, name, children }) => {
    const [isOpen, setOpen] = useState();

    const handleOpenClick = useCallback((e) => {
        e.preventDefault();

        setOpen((state) => !state);
    }, []);

    return (
        <div className={isOpen ? 'accordion__item active' : 'accordion__item'}>
            <div className="accordion__section" onClick={handleOpenClick}>
                <Image className="accordion__icon" width={40} src={icon}/>
                <div className="accordion__title">{name}</div>
            </div>
            <div className={isOpen ? 'accordion__subsection active' : 'accordion__subsection'}>
                {children}
            </div>
        </div>
    );
};

export default MenuItem;