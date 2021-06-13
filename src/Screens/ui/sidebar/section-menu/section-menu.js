import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SubsectionMenu from "../subsection-menu/subsection-menu";
import ItemMenu from "../item-menu/itemMenu";
import {useHistory} from "react-router-dom";
import {Check} from "is-null-empty-or-undefined";

const SectionMenu = ({item}) => {

        const history = useHistory();
        const {name, subsection, icon, sections} = item;
        const [isSelected, setIsSelected] = useState(false);

        const handleClick = (e) => {
            e.preventDefault();
            setIsSelected(!isSelected)
        }

        // Abre una seccion cerrando la otra
        useEffect(() => {
            if (sections.length > 0 && !Check(history.location.pathname)) {
                if (sections.indexOf(history.location.pathname) !== -1) {
                    setIsSelected(!isSelected);
                } else {
                    setIsSelected(false);
                }
            }
        }, [setIsSelected, history.location.pathname, sections]);


        return (
            <div className={`section-menu`}>
                {
                    (subsection && subsection.length > 0) ?
                        <>
                            <div
                                className={`title-section ${isSelected ? 'selected-section' : ''}`}
                                onClick={handleClick}
                            >
                                <span className="title">{name}</span>
                                <div className="icon-item-menu">
                                    <FontAwesomeIcon icon={icon}/>
                                </div>
                            </div>
                            <div className={
                                `items 
                            ${isSelected ? 'display-block' : 'display-none'}
                            
                            `}>
                                {
                                    subsection.map(subsectionMenu => (
                                        <SubsectionMenu key={subsectionMenu.id} item={subsectionMenu}/>
                                    ))
                                }
                            </div>
                        </> :
                        <ItemMenu item={item}/>
                }

            </div>
        );
    }
;

export default SectionMenu;
