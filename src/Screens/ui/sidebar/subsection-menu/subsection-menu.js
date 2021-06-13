import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ItemMenu from "../item-menu/itemMenu";

const SubsectionMenu = ({item}) => {
    const {name, subsection, icon} = item;

    return (
        <div className="item-menu">
            {
                (subsection && subsection.length > 0)
                    ?
                    <div className="title-subsection">
                        <span>{name}</span>
                        {/*<Tooltip target=".icon-item-menu" content={`${name}`} mouseTrack mouseTrackLeft={10}/>*/}
                        <div className="icon-item-menu">
                            <FontAwesomeIcon icon={icon}/>
                        </div>
                        <div className="items">
                            {
                                subsection.map(subsectionMenu => (
                                    <SubsectionMenu key={subsectionMenu.id} item={subsectionMenu}/>
                                ))
                            }
                        </div>
                    </div>
                    :
                    <ItemMenu item={item} />
            }

        </div>
    );
};

export default SubsectionMenu;
