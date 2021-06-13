import React from 'react';

import logo from "./../../../assets/img/logo-blanco.png";
import {MenuSidebar} from "../../../shared/menu-sidebar";
import SectionMenu from "./section-menu/section-menu";


const Sidebar = () => {

    const menu = MenuSidebar;

    return (
        <div className="layout__sidebar">
            <div className="sidebar__header">
                <img src={logo} alt=""/>
            </div>
            <div className="layout__menu_sidebar">
                    {
                        menu.map(sectionMenu =>
                            <SectionMenu key={sectionMenu.id} item={sectionMenu} />
                            )
                    }
            </div>

        </div>
    );
};

export default Sidebar;
