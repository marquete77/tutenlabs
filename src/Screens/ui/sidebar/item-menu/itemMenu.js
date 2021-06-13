import React, {useEffect, useState} from 'react';
// import {Tooltip} from 'primereact/tooltip';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink, useHistory} from "react-router-dom";
import {Check} from "is-null-empty-or-undefined";

const ItemMenu = ({item}) => {

    const history = useHistory();
    const {name, icon, link, actions} = item;
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if (!Check(history.location.pathname)) {
            setIsSelected(!isSelected);

            if (actions.length > 0 && !Check(history.location.pathname)) {
                if (actions.indexOf(history.location.pathname) !== -1) {
                    setIsSelected(!isSelected);
                }
            }
        }
    }, [setIsSelected, actions, history.location.pathname]);

    return (
        <div className="item-menu">
            <NavLink
                activeClassName="active"
                exact
                to={link}
            >
                <div className={`title-section ${isSelected ? 'selected-item' : ''}`}>
                    <span className="title">{name}</span>
                    {/*<Tooltip target=".icon-item-menu" content={`${name}`} mouseTrack mouseTrackLeft={10}/>*/}
                    <div className="icon-item-menu">
                        <FontAwesomeIcon icon={icon}/>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default ItemMenu;
